import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Member, findMember } from '../data/members.data';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  member?: Member;

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  ngOnInit(): void {
    const slug =
      this.route.snapshot.data['slug'] ??
      this.route.snapshot.paramMap.get('slug') ??
      '';
    this.member = findMember(slug);
    if (this.member) this.injectJsonLd(this.member);
  }

  private injectJsonLd(m: Member): void {
    const data: any = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: m.firstName,
      description: m.seoDescription,
      image: `https://storm-surfing.fr/${m.photo}`,
      memberOf: {
        '@type': 'SportsOrganization',
        name: 'Storm Surfing Association',
        url: 'https://storm-surfing.fr/',
      },
    };
    if (m.location) {
      data.homeLocation = { '@type': 'Place', name: m.location };
    }
    const existing = this.doc.getElementById('ld-member');
    if (existing) existing.remove();
    const s = this.doc.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'ld-member';
    s.text = JSON.stringify(data);
    this.doc.head.appendChild(s);
  }
}
