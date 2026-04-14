import { ChevronLeft, MoreHorizontal, Grid, PlaySquare, Repeat, UserSquare, Copy, BadgeCheck } from 'lucide-react';
import { profile, myPosts } from '../data/mockData';

export default function Profile({ onPostClick }: { onPostClick: (id: number) => void }) {
  return (
    <div className="bg-white min-h-full pb-[60px]">
      {/* Profile Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-10">
        <div className="flex items-center space-x-1.5">
          <ChevronLeft className="w-7 h-7 cursor-pointer -ml-1" />
          <span className="text-[20px] font-bold tracking-tight">{profile.username}</span>
          <BadgeCheck className="w-[18px] h-[18px] fill-blue-500 text-white" />
        </div>
        <MoreHorizontal className="w-5 h-5" />
      </div>

      {/* Profile Info */}
      <div className="px-4 pt-1 pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="p-[2.5px] bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600 rounded-full shrink-0">
            <div className="p-[2px] bg-white rounded-full">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-around text-center ml-4">
            <div>
              <div className="font-bold text-[15px]">{profile.postsCount}</div>
              <div className="text-[12px] text-gray-900">게시물</div>
            </div>
            <div>
              <div className="font-bold text-[15px]">{profile.followers}</div>
              <div className="text-[12px] text-gray-900">팔로워</div>
            </div>
            <div>
              <div className="font-bold text-[15px]">{profile.following}</div>
              <div className="text-[12px] text-gray-900">팔로잉</div>
            </div>
          </div>
        </div>
        
        <div className="font-bold text-[12px]">{profile.name}</div>
        <div className="text-[12px] text-gray-500 mb-0.5">가수</div>
        <div className="text-[12px] text-gray-900 whitespace-pre-wrap leading-snug mt-0.5">
          {profile.bio.split(/(@[\w_]+)/g).map((part, i) => 
            part.startsWith('@') ? (
              <span key={i} className="text-[#00376b] cursor-pointer">{part}</span>
            ) : (
              part
            )
          )}
        </div>
        
        <div className="flex items-center mt-3">
          <div className="flex -space-x-2 mr-3">
            <img src="https://picsum.photos/seed/m1/100/100" className="w-5 h-5 rounded-full border-2 border-white relative z-30" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/m2/100/100" className="w-5 h-5 rounded-full border-2 border-white relative z-20" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/m3/100/100" className="w-5 h-5 rounded-full border-2 border-white relative z-10" referrerPolicy="no-referrer" />
          </div>
          <div className="text-[12px] text-gray-900">
            <span className="font-semibold">bape_magazine</span>님, <span className="font-semibold">bapeboys_official</span>님 외 1명이 팔로우합니다
          </div>
        </div>

        <div className="flex space-x-2 mt-4">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 rounded-lg text-[12px] transition-colors">
            팔로우
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-black font-semibold py-1.5 rounded-lg text-[12px] transition-colors">
            메시지
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mt-1">
        <div className="flex-1 py-2.5 flex justify-center border-b-[1.5px] border-black">
          <Grid className="w-5 h-5 text-gray-900" />
        </div>
        <div className="flex-1 py-2.5 flex justify-center text-gray-400">
          <PlaySquare className="w-5 h-5" />
        </div>
        <div className="flex-1 py-2.5 flex justify-center text-gray-400">
          <Repeat className="w-5 h-5" />
        </div>
        <div className="flex-1 py-2.5 flex justify-center text-gray-400">
          <UserSquare className="w-5 h-5" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[1px]">
        {myPosts.map((post, index) => (
          <div 
            key={post.id} 
            className="aspect-square cursor-pointer relative group"
            onClick={() => onPostClick(post.id)}
          >
            <img src={post.image} alt="Post" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            {index === 0 && (
              <Copy className="w-4 h-4 text-white absolute top-2 right-2 drop-shadow-md" />
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}
