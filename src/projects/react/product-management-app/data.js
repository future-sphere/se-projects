interface Category {
  id: number;
  name: string;
  slug: string;
}

const categories = [
  {
    id: 1,
    name: 'RPG',
    slug: 'rpg',
  },
  {
    id: 2,
    name: 'MMORPG',
    slug: 'mmorpg',
  },
  {
    id: 3,
    name: 'Shooter',
    slug: 'shooter',
  },
  {
    id: 4,
    name: 'Simulator',
    slug: 'simulator',
  },
  {
    id: 5,
    name: 'Sports',
    slug: 'sports',
  },
  {
    id: 6,
    name: 'Racing',
    slug: 'racing',
  },
  {
    id: 7,
    name: 'Adventure',
    slug: 'adventure',
  },
];

interface Game {
  id: number;
  title: string;
  slug: string;
  description: string;
  categorySlug: Category['slug'];
  price: number;
  image: string;
}

const games: Game[] = [
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
    {
        id: 4,
        title: 'Overwatch',
        slug: 'overwatch',
        description:
            'Overwatch is a team-based multiplayer online battle arena video game developed and published by Blizzard Entertainment.',
        categorySlug: 'rpg',
        price: 0,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/League_of_Legends_logo.png/220px-League_of_Legends_logo.png',
    },
    {
        id: 5,
        title: 'Dota 2',
        slug: 'dota-2',
        description:
            'Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation.',
        categorySlug: 'mmorpg', 
        price: 0,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/League_of_Legends_logo.png/220px-League_of_Legends_logo.png',
    },
    {
        id: 6,
        title: 'Counter-Strike: Global Offensive',
        slug: 'counter-strike-global-offensive',
        description:

            'Counter-Strike: Global Offensive (CS: GO) is a first-person shooter video game developed and published by Valve Corporation.',
        categorySlug: 'shooter',
        price: 0,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/League_of_Legends_logo.png/220px-League_of_Legends_logo.png',  
    },
    {
        id: 7,
        title: 'Call of Duty: Modern Warfare',
        slug: 'call-of-duty-modern-warfare',
        description:
            'Call of Duty: Modern Warfare is a first-person shooter video game developed by Infinity Ward and published by Activision.',
        categorySlug: 'shooter',
        price: 0,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/League_of_Legends_logo.png/220px-League_of_Legends_logo.png',
    },
    {
        id: 8,
        title: 'Call of Duty: Black Ops',
        slug: 'call-of-duty-black-ops',
        description:
            'Call of Duty: Black Ops is a first-person shooter video game developed by Infinity Ward and published by Activision.',
        categorySlug: 'shooter',
        price: 0,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/League_of_Legends_logo.png/220px-League_of_Legends_logo.png',
    },
    {
        id: 9,
        title: 'Call of Duty: Ghosts',
        slug: 'call-of-duty-ghosts',
        description:
            'Call of Duty: Ghosts is a first-person shooter video game developed by Infinity Ward and published by Activision.',
        categorySlug: 'shooter',
        price: 0,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/League_of_Legends_logo.png/220px-League_of_Legends_logo.png',
    },
    {
        id: 10,
        title: 'World of Warcraft',

];
