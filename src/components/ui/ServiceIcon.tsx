import { cn } from '@/utils/cn';

interface ServiceIconProps {
  service: string;
  className?: string;
}

function PatioIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <rect x="8" y="32" width="48" height="4" rx="1" />
      <rect x="12" y="38" width="8" height="8" rx="1" opacity="0.7" />
      <rect x="22" y="38" width="8" height="8" rx="1" opacity="0.7" />
      <rect x="32" y="38" width="8" height="8" rx="1" opacity="0.7" />
      <rect x="42" y="38" width="8" height="8" rx="1" opacity="0.7" />
      <rect x="12" y="48" width="8" height="8" rx="1" opacity="0.5" />
      <rect x="22" y="48" width="8" height="8" rx="1" opacity="0.5" />
      <rect x="32" y="48" width="8" height="8" rx="1" opacity="0.5" />
      <rect x="42" y="48" width="8" height="8" rx="1" opacity="0.5" />
      <path d="M16 32V16M32 32V12M48 32V16" strokeLinecap="round" />
      <circle cx="32" cy="8" r="3" />
    </svg>
  );
}

function PergolaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <line x1="12" y1="56" x2="12" y2="16" strokeLinecap="round" />
      <line x1="52" y1="56" x2="52" y2="16" strokeLinecap="round" />
      <line x1="8" y1="16" x2="56" y2="16" strokeLinecap="round" strokeWidth="3" />
      <line x1="8" y1="20" x2="56" y2="20" strokeLinecap="round" />
      <line x1="8" y1="24" x2="56" y2="24" strokeLinecap="round" />
      <line x1="8" y1="28" x2="56" y2="28" strokeLinecap="round" />
      <path d="M6 14l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 14l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KitchenIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <rect x="8" y="28" width="48" height="28" rx="2" />
      <line x1="8" y1="36" x2="56" y2="36" />
      <rect x="12" y="40" width="12" height="12" rx="1" />
      <circle cx="44" cy="46" r="6" />
      <line x1="44" y1="42" x2="44" y2="50" />
      <line x1="40" y1="46" x2="48" y2="46" />
      <rect x="8" y="24" width="48" height="4" rx="1" fill="currentColor" opacity="0.3" />
      <path d="M20 24v-6c0-1 1-2 2-2h4c1 0 2 1 2 2v6" />
      <path d="M36 24v-8c0-1 1-2 2-2h4c1 0 2 1 2 2v8" />
    </svg>
  );
}

function FirePitIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <ellipse cx="32" cy="44" rx="22" ry="8" />
      <ellipse cx="32" cy="44" rx="16" ry="5" opacity="0.5" />
      <path
        d="M32 36c-4-6-8-10-4-18 2 4 6 6 8 4-1 4 2 8-4 14z"
        strokeLinejoin="round"
        fill="currentColor"
        opacity="0.2"
      />
      <path d="M28 38c-2-4-3-6-1-10 1 2 3 3 4 2 0 2 1 4-3 8z" strokeLinejoin="round" />
      <path d="M36 38c-2-4-3-6-1-10 1 2 3 3 4 2 0 2 1 4-3 8z" strokeLinejoin="round" />
      <ellipse cx="32" cy="52" rx="22" ry="8" opacity="0.3" />
    </svg>
  );
}

function DeckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M4 36h56" strokeWidth="3" strokeLinecap="round" />
      <line x1="8" y1="36" x2="8" y2="56" strokeLinecap="round" />
      <line x1="56" y1="36" x2="56" y2="56" strokeLinecap="round" />
      <line x1="4" y1="40" x2="60" y2="40" opacity="0.7" />
      <line x1="4" y1="44" x2="60" y2="44" opacity="0.7" />
      <line x1="4" y1="48" x2="60" y2="48" opacity="0.7" />
      <line x1="4" y1="52" x2="60" y2="52" opacity="0.7" />
      <path d="M8 36V20h8v16" />
      <line x1="4" y1="20" x2="20" y2="20" strokeLinecap="round" />
      <line x1="4" y1="24" x2="20" y2="24" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function HardscapeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <rect x="8" y="44" width="20" height="8" rx="1" />
      <rect x="30" y="44" width="14" height="8" rx="1" />
      <rect x="46" y="44" width="10" height="8" rx="1" />
      <rect x="8" y="34" width="14" height="8" rx="1" />
      <rect x="24" y="34" width="18" height="8" rx="1" />
      <rect x="44" y="34" width="12" height="8" rx="1" />
      <rect x="12" y="24" width="16" height="8" rx="1" />
      <rect x="30" y="24" width="12" height="8" rx="1" />
      <rect x="44" y="24" width="8" height="8" rx="1" />
      <rect x="16" y="14" width="12" height="8" rx="1" />
      <rect x="30" y="14" width="14" height="8" rx="1" />
      <path d="M4 54h56" strokeLinecap="round" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  patios: PatioIcon,
  pergolas: PergolaIcon,
  'outdoor-kitchens': KitchenIcon,
  'fire-pits': FirePitIcon,
  decks: DeckIcon,
  hardscapes: HardscapeIcon,
};

export function ServiceIcon({ service, className }: ServiceIconProps) {
  const Icon = iconMap[service];
  if (!Icon) return null;
  return <Icon className={cn('w-16 h-16', className)} />;
}
