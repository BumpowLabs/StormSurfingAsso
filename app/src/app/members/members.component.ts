import { Component } from '@angular/core';
import { MEMBERS, Member } from '../data/members.data';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  // Fondateurs d'abord, puis membres (ordre d'ajout conservé dans chaque groupe)
  members: Member[] = [...MEMBERS].sort(
    (a, b) =>
      (a.role?.toLowerCase().includes('fondat') ? 0 : 1) -
      (b.role?.toLowerCase().includes('fondat') ? 0 : 1),
  );
}
