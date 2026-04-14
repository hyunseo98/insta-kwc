import { ChevronLeft, MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { profile, myPosts } from '../data/mockData';
import { useState } from 'react';

export default function PostDetail({ postId, onBack }: { postId: number, onBack: () => void }) {
  const post = myPosts.find(p => p.id === postId);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!post) return null;

  return (
    <div className="bg-white min-h-full pb-[60px]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 sticky top-0 bg-white z-10">
        <div className="flex items-center space-x-4">
          <ChevronLeft className="w-6 h-6 cursor-pointer" onClick={onBack} />
          <span className="text-base font-bold">게시물</span>
        </div>
      </div>

      {/* Post Content */}
      <article className="bg-white pb-4">
        {/* Post Header */}
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
              <img src={profile.avatar} alt={profile.username} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <p className="text-[12px] font-semibold text-gray-900">{profile.username}</p>
          </div>
          <MoreHorizontal className="w-4 h-4 text-gray-600 cursor-pointer" />
        </div>

        {/* Image */}
        <div 
          className="relative w-full aspect-square bg-gray-100 cursor-pointer" 
          onDoubleClick={() => setLiked(true)}
        >
          <img src={post.image} alt="Post content" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-4">
            <button onClick={() => setLiked(!liked)} className="focus:outline-none transition-transform active:scale-125">
              <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-900'}`} />
            </button>
            <button className="focus:outline-none transition-transform active:scale-110">
              <MessageCircle className="w-5 h-5 text-gray-900" />
            </button>
            <button className="focus:outline-none transition-transform active:scale-110">
              <Send className="w-5 h-5 text-gray-900" />
            </button>
          </div>
          <button onClick={() => setSaved(!saved)} className="focus:outline-none transition-transform active:scale-110">
            <Bookmark className={`w-5 h-5 ${saved ? 'fill-gray-900 text-gray-900' : 'text-gray-900'}`} />
          </button>
        </div>

        {/* Likes & Caption */}
        <div className="px-3">
          <p className="text-[12px] font-semibold text-gray-900 mb-1">
            좋아요 {(post.likes + (liked ? 1 : 0)).toLocaleString()}개
          </p>
          {post.caption && (
            <p className="text-[12px] text-gray-900">
              <span className="font-semibold mr-1.5">{profile.username}</span>
              {post.caption}
            </p>
          )}
          <p className="text-[12px] text-gray-500 mt-1 cursor-pointer">
            댓글 {post.commentsCount.toLocaleString()}개 모두 보기
          </p>
          
          {/* Best Comment */}
          <div className="mt-1 flex items-start space-x-1.5">
            <span className="text-[12px] font-semibold text-gray-900">{post.bestCommentUser}</span>
            <span className="text-[12px] text-gray-900 flex-1">{post.bestComment}</span>
            <Heart className="w-3 h-3 text-gray-400 mt-1 shrink-0" />
          </div>

          {/* Best Comment Reply */}
          {(post as any).bestCommentReply && (
            <div className="mt-1 ml-6 flex items-start space-x-1.5">
              <span className="text-[12px] font-semibold text-gray-900">{(post as any).bestCommentReplyUser}</span>
              <span className="text-[12px] text-gray-900 flex-1">{(post as any).bestCommentReply}</span>
              <Heart className="w-3 h-3 text-gray-400 mt-1 shrink-0" />
            </div>
          )}

          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-wide">
            {post.timeAgo}
          </p>
        </div>
      </article>
    </div>
  );
}
