'use client';

import { cn } from '@/lib/utils';

interface TagPillProps {
  tag: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function TagPill({ tag, isActive = false, onClick }: TagPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
        isActive
          ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20'
          : 'bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 hover:text-teal-200'
      )}
    >
      {tag}
    </button>
  );
}

