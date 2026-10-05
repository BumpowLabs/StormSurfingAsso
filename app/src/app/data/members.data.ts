// Portraits des membres (une entrée = une page SEO en style magazine).
// Pour ajouter un membre : copier un bloc et renseigner les champs connus.
// Les champs vides sont simplement masqués sur la page.

export interface Member {
  slug: string;              // identifiant d'URL : /membres/<slug>
  firstName: string;         // prénom (titre)
  photo: string;             // portrait principal (dans public/)
  photos?: string[];         // photos additionnelles (optionnel)
  tagline?: string;          // phrase perso mise en exergue
  role?: string;             // rôle : Surfeur, Accompagnant, Bénévole, Famille…

  // Infos clés (encadré)
  age?: string;
  location?: string;         // où tu vis
  surfingSince?: string;     // depuis combien de temps tu surfes
  board?: string;            // ta planche actuelle
  spot?: string;             // spot / ambiance préférée

  // Questions / réponses
  whoAreYou?: string;
  loveAtSea?: string;        // ce que tu préfères au bord de l’eau (ouvert, non-surfeurs)
  oceanMeaning?: string;     // ce que l’océan représente pour toi (ouvert)
  howDiscovered?: string;    // comment découvert le surf + âge
  firstWave?: string;
  whySurf?: string;
  surferType?: string;
  boardWhy?: string;
  spotWhy?: string;
  memorableSession?: string;
  offWater?: string;
  surfChangedYou?: string;
  howFoundStorm?: string;
  stormSpirit?: string;
  perfectWave?: string;
  beginnerTip?: string;
  threeWords?: string[];     // 3 mots
  dreamWave?: string;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}

export const MEMBERS: Member[] = [
  {
    slug: "benoit",
    firstName: "Benoit",
    role: "Membre fondateur",
    photo: "ben.jpeg",
    photos: ["ben1.jpeg", "ben2.jpeg", "ben3.jpeg", "ben4.jpeg", "ben6.jpeg", "ben7.jpeg"],
    age: "55 ans",
    location: "Saint-Alban",
    board: "Twin",
    spot: "Le Cap Fréhel",
    whoAreYou:
      "Je m'appelle Benoît, j'ai 55 ans et je vis à Saint-Alban. J'ai longtemps tenu un surfshop, « Titine Surf Shop » et dès que les conditions sont là, je file à l'eau.",
    howDiscovered:
      "Je faisais beaucoup de windsurf et puis j'ai essayé le surf. Je n'ai plus jamais arrêté depuis.",
    firstWave:
      "Ma première vague, c'était à La Torche, avec un malibu shapé dans le garage.",
    whySurf:
      "Pour les sensations, pour la glisse, pour être dans l'eau et profiter de l'océan.",
    surferType:
      "Dès que la houle est là, je vais à l'eau. Vagues de vent, vagues parfaites ou imparfaites, c'est un terrain de jeu dans lequel je trouverai toujours un petit bout de vague pour m'amuser. Et au pire, je passe en bodysurf.",
    boardWhy:
      "J'adore le twin. La première fois que j'en ai surfé un, j'avais l'impression d'être sur un tapis volant. Depuis, je n'ai jamais arrêté de surfer ce type de planche.",
    spotWhy:
      "Le Cap, car c'est une vague exigeante et puissante qui ne pardonne pas trop l'erreur.",
    memorableSession:
      "Une session d'automne au Cap Fréhel avec des vagues énormes comme rarement on en a eu. Il y a eu une série qui a décalé du large, sur un pic que je n'avais jamais vu se former et que je n'ai jamais revu d'ailleurs. On était trois dans l'eau ce jour-là : Chaman, qui shootait gros, David et moi. On a tous bouffé comme jamais, mais on a pris quelques vagues aussi :) Et ça, c'est de l'adrénaline pure, gravée dans ma mémoire. Inoubliable.",
    offWater:
      "Rando avec le dog, nage avec Pass 22 ou pirogue selon la météo.",
    howFoundStorm:
      "Storm Surfing est né suite au décès de mon pote Antoine Mouille. Antoine était quelqu'un de généreux et de foncièrement gentil, très apprécié des autres surfeurs. On a décidé de monter cette asso à sa mémoire.",
    stormSpirit:
      "Une bande de passionnés sans prise de tête, où le partage compte plus que le niveau.",
    perfectWave:
      "Une gauche de 2 m, vent offshore léger, marée montante, eau à 18°C et les copains à l'eau.",
    beginnerTip:
      "Mets bien ta planche à plat, rame plus que tu ne le penses, fais attention aux autres et surtout : amuse-toi.",
    dreamWave:
      "Santa Cruz au Portugal, qui envoie une gauche hyper creuse — un gros souvenir avec Antoine, qui y a laissé un tympan…",
    seoTitle: "Benoît, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Benoît, membre de la Storm Surfing Association : ancien gérant de Titine Surf Shop, passionné de twin et du Cap Fréhel. Son parcours et sa vision du surf en Bretagne.",
  },
  {
    slug: "yann",
    firstName: "Yann",
    role: "Membre fondateur",
    photo: "papy.jpg",
    photos: ["papy1.jpeg", "papy2.jpeg"],
    age: "56 ans",
    location: "Plurien",
    whoAreYou: "Le portrait de Yann arrive bientôt.",
    seoTitle: "Yann, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Yann, membre fondateur de la Storm Surfing Association, à Plurien (Côtes-d'Armor).",
  },
  {
    slug: "john",
    firstName: "John",
    role: "Membre fondateur",
    photo: "john.jpeg",
    photos: ["john1.jpeg"],
    whoAreYou: "Le portrait de John arrive bientôt.",
    seoTitle: "John, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de John, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "besha",
    firstName: "Besha",
    role: "Membre fondatrice",
    photo: "besha.jpeg",
    photos: ["besha1.jpeg", "besha2.jpeg", "besha3.jpeg", "besha4.jpeg", "besha5.jpeg"],
    age: "46 ans",
    surfingSince: "18 ans",
    board: "Longboard 9' Takayama Perf (Surftech)",
    spot: "À la maison : Quai Barrier ou Ville Men",
    whoAreYou:
      "Jeune femme dynamique qui vieillit 🤪 ! Actrice économique locale depuis 15 ans, aux activités multiples — taxi driveuse en principal — qui a eu la chance de s'installer dans ce petit coin de paradis pour allier travail et loisirs.",
    howDiscovered:
      "J'ai commencé le surf il y a 18 ans, suite à ma rencontre avec Romain.",
    firstWave:
      "Ma première vague, c'était à La Palue — j'ai cru que j'allais mourir ! 😆 J'avais le Bic, Romain me dit « vas-y, rame… euh non… euh », et là je pars en tout droit, lui à côté mort de rire. Ma première vraie vague, prise toute seule : à Lostmarc'h (je ne sais toujours pas comment j'ai fait). Et là, premier take-off — non académique évidemment, sur une gauche en plus, avec plein de monde à éviter !",
    whySurf:
      "Je retourne à l'eau encore et encore — même si j'ai bien diminué ces dernières années — parce que ça me vide la tête et que ça me procure vraiment du bien-être, même si je ne prends pas beaucoup de vagues. Tu es juste concentrée sur le fait de prendre une vague, et plus rien ne compte. C'est un vrai échappatoire quand tu bosses non-stop, et de la bonne fatigue.",
    loveAtSea:
      "J'aime les sessions avec des petites vagues et les copains — les vieux, les jeunes et les chiens ! Bonne ambiance, même si ce n'est pas souvent. Les sessions filles aussi, on s'encourage 😜.",
    surferType:
      "Longboardeuse, petites vagues, chill et smile à l'eau avec les copains-copines, of course 🤪. Je surfe quand je peux, donc pas souvent la première à l'eau — mais j'aime bien les sessions « alone », braquage au quai 🤩. Je n'aime pas le vent : j'ai une rame pourrie, alors quand c'est off, je galère de ouf avec ma planche.",
    boardWhy:
      "Un 9 pieds Takayama Perf (Surftech), pour charger du gros 🤪 — mon « cadeau des 40 ans » ! Pas de noseride, donc plus adaptée à mon surf.",
    spotWhy:
      "Mon spot préféré : la maison 😁 — Quai Barrier ou Ville Men.",
    memorableSession:
      "Difficile d'en choisir une ! Ma toute première, où j'ai réalisé que c'était méga dur comme sport : t'en prends plein la figure dans les mousses et tu n'arrives à rien 🤪. Une à Biscarrosse où j'ai compris le sens de « machine à laver ». Une à Tronoën où je surfais en fait avec la cornée déchirée… Et surtout les sessions aux Sables avec la Bernik et notre coach de l'époque, Boz. Bref, il y en a plein !",
    offWater:
      "Quand il n'y a pas de vagues, je me balade beaucoup avec ma chienne, un peu de vélo et de footing — quand je ne bosse pas 😅.",
    howFoundStorm:
      "Pour Antoine. D'ailleurs, je crois que lors de ma première vraie vague à Lostmarc'h, il était là.",
    stormSpirit:
      "Le partage d'une passion à travers la mémoire d'un ami 🥰, en faisant perdurer ses valeurs et son envie de transmettre.",
    perfectWave:
      "Une vague qui déroule en droite, glassy et pas trop grosse 🌊, sans vent, sous le soleil et sans barre à passer 😅. Ou tout simplement la vague qui te fait rester alors que tu voulais sortir 🤪.",
    seoTitle: "Besha, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Besha, membre fondatrice de la Storm Surfing Association : longboardeuse, petites vagues et bonne ambiance. Son parcours et sa vision du surf en Bretagne.",
  },
  {
    slug: "barns",
    firstName: "Barns",
    role: "Membre",
    photo: "barns.jpeg",
    whoAreYou: "Le portrait de Barns arrive bientôt.",
    seoTitle: "Barns, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Barns, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "tatane",
    firstName: "Tatane",
    role: "Membre",
    photo: "tatane.jpeg",
    whoAreYou: "Le portrait de Tatane arrive bientôt.",
    seoTitle: "Tatane, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Tatane, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "liam",
    firstName: "Liam",
    role: "Membre",
    photo: "liam.jpeg",
    whoAreYou: "Le portrait de Liam arrive bientôt.",
    seoTitle: "Liam, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Liam, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "enio",
    firstName: "Enio",
    role: "Membre",
    photo: "enio.jpeg",
    whoAreYou: "Le portrait de Enio arrive bientôt.",
    seoTitle: "Enio, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Enio, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "damien",
    firstName: "Damien",
    role: "Membre fondateur",
    photo: "damien.jpeg",
    whoAreYou: "Le portrait de Damien arrive bientôt.",
    seoTitle: "Damien, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Damien, membre fondateur de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "steph",
    firstName: "Steph",
    role: "Membre",
    photo: "steph.jpeg",
    photos: ["steph1.jpeg", "steph2.jpeg", "steph3.jpeg", "steph4.jpeg", "steph5.jpeg"],
    surfingSince: "1995",
    board: "De tout (single, fish, longboard, hull, V-bottom, bonzer…)",
    spot: "Les Grèves — son spot de cœur",
    howDiscovered:
      "J'ai découvert les sports de glisse au début des années 90, voire un peu avant, avec le funboard diffusé à la télé lors de la compétition de Bercy. Et je me suis mis au surf en 1995.",
    firstWave:
      "Première vague en bodyboard à Porry. J'ai commencé par le bodyboard, puis en remontant de Porry j'ai croisé un gars — Sylvain (de Saint-Cast, décédé depuis…) — qui me dit « tu devrais te mettre au surf ». Du coup j'ai acheté une planche, une Hoff à l'époque, une 6' ou 7' je crois. Ensuite Sylvain m'a pris sous son aile aux Grèves : il me conseillait, et c'est comme ça que j'ai débuté le surf.",
    surferType:
      "« Le meilleur du quartier », tiens, quelle question ! 😄 Non, j'en sais rien : je fais mon truc. Je m'intéresse à tous les supports — single, fish, longboard, hull, V-bottom, bonzer… — et à l'histoire du surf. Je ne me prends pas au sérieux : faut pas déconner les gars, on n'est pas des Kelly Slater, restons humbles.",
    boardWhy:
      "Je n'ai pas de planche particulière, je surfe de tout, j'essaie différents shapes. Ça crée une certaine ouverture d'esprit, je trouve — chose qui, hélas, se perd. Le but : me faire plaisir.",
    spotWhy:
      "Mon spot de cœur, ce sont les Grèves : c'est là que tout a commencé — les rencontres, les premières vagues intenses, les potes disparus… J'ai une affection particulière pour cet endroit. Aujourd'hui il y a trop de monde et l'ambiance n'est plus la même, alors je ne dirais pas que c'est mon spot préféré… mais tu le connais. On y a partagé tellement de moments forts que c'est inexplicable, ce que je ressens quand je surfe là-bas. Mais il est capricieux : il se mérite.",
    memorableSession:
      "Ce sera celle aux Grèves, où je remontais au pic et où j'ai vu Dadu se caler un double tube — et en sortir, en plus. Gravé.",
    offWater:
      "Je bosse la nuit, en général à partir de 0h30, et j'enchaîne les soirs de week-end comme photographe de concerts… mais pas que.",
    howFoundStorm:
      "J'ai découvert Storm Surfing avec Antoine. Je l'ai vu galérer et se battre pour monter sa structure, lutter contre certains qui lui mettaient des bâtons dans les roues pour l'empêcher de créer son école de surf. Mais il n'a rien lâché, et ça a payé. C'était un mec en or : gentillesse, générosité, humanité, et une envie incroyable de transmettre sa passion aux jeunes générations. Une perte énorme pour nous tous.",
    stormSpirit:
      "C'est justement ça : Antoine, tout simplement. Ayons toujours à l'esprit que les vagues, ça se partage, et qu'il faut accepter tout le monde — que tu sois en log, en shortboard, peu importe. On a tous une place à l'eau, les uns à côté des autres. Profitons, prenons du plaisir ensemble.",
    perfectWave:
      "Ce sera celle que je surferai avec Boz, Antoine, Sylvain… le plus tard possible. En attendant, ce sera la prochaine.",
    beginnerTip:
      "Dis bonjour en arrivant au pic, observe, demande conseil, et surtout intéresse-toi à l'histoire du surf : ce n'est pas un sport, c'est une culture — riche et intense, faite de personnages mythiques, de films, de photographies, de voyages, de musiques qu'il faut connaître. Une culture avec des codes et des règles à respecter. Et puis surtout : n'achète pas ces foutues planches en mousse — va voir un shaper !",
    dreamWave:
      "La Colombie-Britannique, l'Islande au printemps, et Chicama pour cette gauche de dingue.",
    seoTitle: "Steph, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Steph, membre de la Storm Surfing Association : surfeur depuis 1995, passionné de tous les shapes et de l'histoire du surf, attaché au spot des Grèves en Bretagne.",
  },
  {
    slug: "maxine",
    firstName: "Maxine",
    role: "Membre",
    photo: "maxine.jpeg",
    whoAreYou: "Le portrait de Maxine arrive bientôt.",
    seoTitle: "Maxine, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Maxine, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "carine",
    firstName: "Carine",
    role: "Membre fondatrice",
    photo: "carine.jpeg",
    whoAreYou: "Le portrait de Carine arrive bientôt.",
    seoTitle: "Carine, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Carine, membre fondatrice de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "arthur",
    firstName: "Arthur",
    role: "Membre",
    photo: "arthur.jpeg",
    whoAreYou: "Le portrait d'Arthur arrive bientôt.",
    seoTitle: "Arthur, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait d'Arthur, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "jo",
    firstName: "Jo",
    role: "Membre fondatrice",
    photo: "jo.jpeg",
    whoAreYou: "Le portrait de Jo arrive bientôt.",
    seoTitle: "Jo, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Jo, membre fondatrice de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "nathalie",
    firstName: "Nathalie",
    role: "Membre fondatrice",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Nathalie arrive bientôt.",
    seoTitle: "Nathalie, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Nathalie, membre fondatrice de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "romain",
    firstName: "Romain",
    role: "Membre fondateur",
    photo: "romain.jpeg",
    photos: ["romain1.jpeg", "romain2.jpeg", "romain3.jpeg", "romain4.jpeg", "romain5.jpeg", "romain6.jpeg", "romain7.jpeg", "romain8.jpeg", "romain9.jpeg"],
    surfingSince: "Depuis la vingtaine",
    spot: "Les Grèves d'En Bas",
    howDiscovered:
      "Depuis tout petit, je m'amuse dans les vagues et l'océan, et je me suis passionné de surf à la vingtaine en partant en trip surf avec des potes. J'ai toujours eu une grosse affinité avec l'océan et les sports de glisse, donc je me suis naturellement mis au surf.",
    firstWave: "Sûrement quand j'étais enfant, en jouant dans la mer.",
    surferType: "Plutôt grosses vagues.",
    spotWhy: "Les Grèves d'En Bas, bien sûr.",
    memorableSession: "Plein de sessions inoubliables !",
    offWater: "Kitesurf, vélo, pêche, jardin.",
    stormSpirit: "Liberté et convivialité.",
    perfectWave: "Pas de vague parfaite : plein de vagues différentes.",
    beginnerTip:
      "Bien observer le fonctionnement d'un spot, surtout s'il y a du monde. Et ne pas surestimer ses capacités quand les conditions sont solides.",
    dreamWave: "J'irais bien me balader aux Mentawai, les vagues ont l'air sympa 😁.",
    seoTitle: "Romain, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Romain, membre fondateur de la Storm Surfing Association : passionné de grosses vagues et des Grèves d'En Bas, en Bretagne.",
  },
  {
    slug: "gwenn",
    firstName: "Gwenn",
    role: "Membre fondateur",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Gwenn arrive bientôt.",
    seoTitle: "Gwenn, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Gwenn, membre fondateur de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "greg",
    firstName: "Greg",
    role: "Membre fondateur",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Greg arrive bientôt.",
    seoTitle: "Greg, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Greg, membre fondateur de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "servane",
    firstName: "Servane",
    role: "Membre fondatrice",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Servane arrive bientôt.",
    seoTitle: "Servane, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Servane, membre fondatrice de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "helene",
    firstName: "Hélène",
    role: "Membre fondatrice",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait d'Hélène arrive bientôt.",
    seoTitle: "Hélène, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait d'Hélène, membre fondatrice de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "flo",
    firstName: "Flo",
    role: "Membre fondateur",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Flo arrive bientôt.",
    seoTitle: "Flo, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Flo, membre fondateur de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "nath",
    firstName: "Nath",
    role: "Membre fondatrice",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Nath arrive bientôt.",
    seoTitle: "Nath, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Nath, membre fondatrice de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "maya",
    firstName: "Maya",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Maya arrive bientôt.",
    seoTitle: "Maya, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Maya, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "elise",
    firstName: "Élise",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait d'Élise arrive bientôt.",
    seoTitle: "Élise, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait d'Élise, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "maelys",
    firstName: "Maëlys",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Maëlys arrive bientôt.",
    seoTitle: "Maëlys, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Maëlys, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "benos",
    firstName: "Benos",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Benos arrive bientôt.",
    seoTitle: "Benos, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Benos, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "auguste",
    firstName: "Auguste",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait d'Auguste arrive bientôt.",
    seoTitle: "Auguste, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait d'Auguste, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "audrey",
    firstName: "Audrey",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait d'Audrey arrive bientôt.",
    seoTitle: "Audrey, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait d'Audrey, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "vincent",
    firstName: "Vincent",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Vincent arrive bientôt.",
    seoTitle: "Vincent, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Vincent, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "gabi",
    firstName: "Gabi",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Gabi arrive bientôt.",
    seoTitle: "Gabi, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Gabi, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "benoit2",
    firstName: "Benoit",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Benoit arrive bientôt.",
    seoTitle: "Benoit, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Benoit, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
  {
    slug: "bruno",
    firstName: "Bruno",
    role: "Membre",
    photo: "attente.jpeg",
    whoAreYou: "Le portrait de Bruno arrive bientôt.",
    seoTitle: "Bruno, membre de Storm Surfing — portrait",
    seoDescription:
      "Portrait de Bruno, membre de la Storm Surfing Association, club de surf au Cap Fréhel (Côtes-d'Armor).",
  },
];

export function findMember(slug: string): Member | undefined {
  return MEMBERS.find((m) => m.slug === slug);
}
