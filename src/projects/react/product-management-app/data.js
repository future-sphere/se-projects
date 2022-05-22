export interface Category {
  id: number;
  name: string;
  slug: string;
}

export const categories = [
  {
    name: 'RPG',
    slug: 'rpg',
  },
  {
    name: 'MMORPG',
    slug: 'mmorpg',
  },
  {
    name: 'Strategy',
    slug: 'strategy',
  },
  {
    name: 'Simulator',
    slug: 'simulator',
  },
  {
    name: 'Sports',
    slug: 'sports',
  },
  {
    name: 'Racing',
    slug: 'racing',
  },
  {
    name: 'Adventure',
    slug: 'adventure',
  },
];

export interface Game {
  id: number;
  title: string;
  slug: string;
  description: string;
  categorySlug: Category['slug'];
  price: number;
  image: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: 'The Witcher 3',
    slug: 'the-witcher-3',
    description:
      'The Witcher 3 is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.',
    categorySlug: 'rpg',
    price: 59.99,
    image:
      'https://m.media-amazon.com/images/M/MV5BYjY3ODFmNWUtNjhjNC00NTExLWIxYmEtYmQ0YTk5NjkzYTUwXkEyXkFqcGdeQXVyNzEyNjcwNTk@._V1_.jpg',
  },
  {
    id: 2,
    title: 'League of Legends',
    slug: 'league-of-legends',
    description:
      'League of Legends is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS.',
    categorySlug: 'mmorpg',
    price: 0,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/League_of_Legends_logo.png/220px-League_of_Legends_logo.png',
  },
  {
    id: 3,
    title: 'Fortnite',
    slug: 'fortnite',
    description:
      'Fortnite is a free-to-play battle royale video game developed and published by Epic Games and released in 2017 for Microsoft Windows, PlayStation 4, Xbox One, and macOS.',
    categorySlug: 'rpg',
    price: 0,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/League_of_Legends_logo.png/220px-League_of_Legends_logo.png',
  },
];
