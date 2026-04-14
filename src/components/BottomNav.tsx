import { Home, Search, PlusSquare, Film } from 'lucide-react';
import { profile } from '../data/mockData';

export default function BottomNav({ activeTab = 'home', onTabChange }: { activeTab?: string, onTabChange?: () => void }) {
  return (
    <nav className="flex items-center justify-around p-3 border-t border-gray-200 bg-white absolute bottom-0 w-full z-10 h-[60px]">
      <button className="focus:outline-none transition-transform active:scale-110">
        <Home className={`w-[22px] h-[22px] ${activeTab === 'home' ? 'text-gray-900 fill-gray-900' : 'text-gray-900'}`} />
      </button>
      <button className="focus:outline-none transition-transform active:scale-110">
        <Search className="w-[22px] h-[22px] text-gray-900" />
      </button>
      <button className="focus:outline-none transition-transform active:scale-110">
        <PlusSquare className="w-[22px] h-[22px] text-gray-900" />
      </button>
      <button className="focus:outline-none transition-transform active:scale-110">
        <Film className="w-[22px] h-[22px] text-gray-900" />
      </button>
      <button 
        className="focus:outline-none transition-transform active:scale-110"
        onClick={onTabChange}
      >
        <div className={`w-[22px] h-[22px] rounded-full overflow-hidden border ${activeTab === 'profile' ? 'border-gray-900 border-2' : 'border-gray-300'}`}>
          <img
            src={profile.avatar}
            alt="Profile"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </button>
    </nav>
  );
}
