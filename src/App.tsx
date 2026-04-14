/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Profile from './components/Profile';
import PostDetail from './components/PostDetail';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentView, setCurrentView] = useState<'profile' | 'post'>('profile');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handlePostClick = (id: number) => {
    setSelectedPostId(id);
    setCurrentView('post');
  };

  const handleBack = () => {
    setCurrentView('profile');
    setSelectedPostId(null);
  };

  return (
    <div className="w-full h-[100dvh] bg-white relative overflow-hidden flex flex-col mx-auto sm:max-w-md sm:border-x sm:border-gray-200">
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        {currentView === 'profile' ? (
          <Profile onPostClick={handlePostClick} />
        ) : (
          selectedPostId && <PostDetail postId={selectedPostId} onBack={handleBack} />
        )}
      </main>
      <BottomNav activeTab="profile" onTabChange={() => handleBack()} />
    </div>
  );
}
