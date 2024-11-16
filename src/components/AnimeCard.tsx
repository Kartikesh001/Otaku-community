import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Star } from 'lucide-react';

interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  episodes: number;
  category: string;
}

export default function AnimeCard({ id, title, image, rating, episodes, category }: AnimeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          {rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{episodes} Episodes</p>
        <div className="flex justify-between items-center">
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
            {category}
          </span>
          <Link
            to={`/chat/${id}`}
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
          >
            <MessageCircle className="w-4 h-4" />
            Join Chat
          </Link>
        </div>
      </div>
    </div>
  );
}