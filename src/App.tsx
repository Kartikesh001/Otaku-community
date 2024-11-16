import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatRoom from './components/ChatRoom';
import AnimeShowcase from './components/AnimeShowcase';
import Login from './pages/Login';
import AuthGuard from './components/AuthGuard';
import { MessageCircle } from 'lucide-react';

function ChatRoomWrapper() {
  const params = useParams<{ roomId: string }>();
  return params.roomId ? <ChatRoom roomId={params.roomId} /> : null;
}

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedLayout>
              <div className="max-w-7xl mx-auto">
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to AniChat
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Join discussions about your favorite anime series!
                  </p>
                </div>
                <AnimeShowcase />
              </div>
            </ProtectedLayout>
          }
        />
        <Route
          path="/chat/:roomId"
          element={
            <ProtectedLayout>
              <ChatRoomWrapper />
            </ProtectedLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;