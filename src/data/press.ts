/** Press & Features, as listed on the old site's home page (titles, years and cities). */
export interface PressItem {
  title: string;
  year: string;
  city: string;
  url: string;
  img: string;
  alt: string;
}

const IMG = '/assets/sophie/img/press/web';

export const PRESS: PressItem[] = [
  {
    title: 'Harper’s Bazaar',
    year: '2025',
    city: 'Madrid',
    url: 'https://www.harpersbazaar.com/es/arte/a63283351/sophie-neuendorf-vicepresidenta-arnet-arte-negocios-mujeres-entrevista/',
    img: `${IMG}/harpers-bazaar.jpg`,
    alt: 'Harper’s Bazaar feature on Sophie Neuendorf at home',
  },
  {
    title: 'Giving Back Is Dead',
    year: '2025',
    city: 'Paris',
    url: 'https://www.scottstoverinc.com/giving-back-is-dead/giving-back-is-dead-sophie-neuendorf',
    img: `${IMG}/giving-back-is-dead.jpg`,
    alt: 'Sophie Neuendorf seated in front of a red, orange and blue colour field painting',
  },
  {
    title: 'Schlossseiten',
    year: '2025',
    city: 'Berlin',
    url: 'https://issuu.com/schlossseiten/docs/schlossseiten012025_springedition',
    img: `${IMG}/schlossseiten.jpg`,
    alt: 'Sophie Neuendorf seated on a wooden chair, from the Schlossseiten feature',
  },
  {
    title: 'Neuendorf Artist Residency',
    year: '2025',
    city: 'Santanyi',
    url: 'https://news.artnet.com/art-world/alejandro-pineiro-bello-neuendorf-residency-2634572',
    img: `${IMG}/residency-2025.jpg`,
    alt: 'Painting by Alejandro Piñeiro Bello from the Neuendorf Artist Residency',
  },
  {
    title: 'L’Officiel',
    year: '2023',
    city: 'Vienna',
    url: 'https://www.lofficiel.at/en/lifestyle/interview-with-sophie-neuendorf',
    img: `${IMG}/lofficiel.jpg`,
    alt: 'Pink courtyard of Sophie Neuendorf’s home in Mallorca, from L’Officiel',
  },
  {
    title: 'Neuendorf Artist Residency',
    year: '2023',
    city: 'Santanyi',
    url: 'https://news.artnet.com/art-world/neuendorf-residency-louise-giovanelli-2399048',
    img: `${IMG}/residency-2023.jpg`,
    alt: 'Painting by Louise Giovanelli from the Neuendorf Artist Residency',
  },
  {
    title: 'Vogue Spain',
    year: '2022',
    city: 'Mallorca',
    url: 'https://www.vogue.com/slideshow/sophie-neuendorf-wore-a-tiara-to-wed-the-count-of-teba-at-her-minimalist-home-in-mallorca',
    img: `${IMG}/vogue.jpg`,
    alt: 'Sophie Neuendorf in a white dress with her dog against a pink wall, from Vogue',
  },
  {
    title: 'ICON',
    year: '2021',
    city: 'Positano',
    url: 'https://icondigizine.de/story/sophie-neuendorf/',
    img: `${IMG}/icon.jpg`,
    alt: 'Sophie Neuendorf in an evening gown on a terrace set for dinner, from ICON',
  },
  {
    title: 'Tatler',
    year: '2021',
    city: 'London',
    url: 'https://www.tatler.com/article/artnet-hans-neuendorf-family',
    img: `${IMG}/tatler.jpg`,
    alt: 'Sophie Neuendorf at a long dining table in a minimalist room, from Tatler',
  },
  {
    title: 'Friends of Friends',
    year: '2021',
    city: 'Mallorca',
    url: 'https://www.friendsoffriends.com/profiles/mallorca-sophie-neuendorf-artnet/',
    img: `${IMG}/friends-of-friends.jpg`,
    alt: 'Pink house and pool in Mallorca, from Friends of Friends',
  },
];
