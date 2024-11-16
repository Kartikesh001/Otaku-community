import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Sword, Heart, Ghost, Skull, Ship, Flame, LogOut } from 'lucide-react';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const communities = [
  { id: 'attack-on-titan', name: 'Attack on Titan', icon: Skull },
  { id: 'one-piece', name: 'One Piece', icon: Ship },
  { id: 'demon-slayer', name: 'Demon Slayer', icon: Sword },
  { id: 'jujutsu-kaisen', name: 'Jujutsu Kaisen', icon: Ghost },
  { id: 'my-hero-academia', name: 'My Hero Academia', icon: Heart },
  { id: 'death-note', name: 'Death Note', icon: Flame }
];

export default function Sidebar() {
  const location = useLocation();
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="w-64 bg-white border-r h-screen flex flex-col">
      <div className="p-4 border-b">
        <Link to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          AniChat
        </Link>
      </div>

      <div className="p-4 border-b">
        <p className="text-sm text-gray-600">Signed in as:</p>
        <p className="font-medium truncate">{user?.email}</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="mt-2">
          <h2 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Otaku Communities
          </h2>
          <div className="mt-2 space-y-1">
            {communities.map((community) => {
              const Icon = community.icon;
              return (
                <Link
                  key={community.id}
                  to={`/chat/${community.id}`}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${
                    location.pathname === `/chat/${community.id}`
                      ? 'bg-blue-50 text-blue-600'
                      : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{community.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}