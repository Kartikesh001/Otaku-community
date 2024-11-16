import React from 'react';
import AnimeCard from './AnimeCard';

const animeData = [
  {
    id: 'attack-on-titan',
    title: 'Attack on Titan',
    image: '		https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ049_oRUwfv8Gf9AUJAi8zv9zfivHBWhOEDQ&s',
    rating: 9.8,
    episodes: 87,
    category: 'Dark Fantasy'
  },
  {
    id: 'one-piece',
    title: 'One Piece',
    image: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnJE7TAxWJSV42Igw3yiYBLYSNA1tz_XneQ&s',
    rating: 9.6,
    episodes: 1080,
    category: 'Adventure'
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0O1-Jx-5HeQIivIQ05h_ituVyiF8fZ-DpA&s',
    rating: 9.5,
    episodes: 44,
    category: 'Action'
  },
  {
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    image: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxJyplA6JsPBjNEoSn6ajTjHiwOVtKA_BTQ&s',
    rating: 9.4,
    episodes: 46,
    category: 'Supernatural'
  },
  {
    id: 'my-hero-academia',
    title: 'My Hero Academia',
    image: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qy9kJZVBR_IS3oI7odStCe3s-DUaohqUqw&sp',
    rating: 9.2,
    episodes: 138,
    category: 'Superhero'
  },
  {
    id: 'death-note',
    title: 'Death Note',
    image: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoT11vcZvKva9_zrrYSIDDHQyfj-_Z8XoYNw&sp',
    rating: 9.7,
    episodes: 37,
    category: 'Psychological'
  }
];

export default function AnimeShowcase() {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Anime Series</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animeData.map((anime) => (
          <AnimeCard key={anime.id} {...anime} />
        ))}
      </div>
    </div>
  );
}