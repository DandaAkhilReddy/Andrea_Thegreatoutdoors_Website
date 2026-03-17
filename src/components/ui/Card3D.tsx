import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function Card3D({ children, className, intensity = 10 }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isTouch = useMediaQuery('(hover: none)');

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientY - centerY) / (rect.height / 2);
    const y = (e.clientX - centerX) / (rect.width / 2);
    setRotateX(-x * intensity);
    setRotateY(y * intensity);
  }

  function handleMouseLeave(): void {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  }

  return (
    <div style={{ perspective: '1000px' }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isTouch ? 0 : rotateX,
          rotateY: isTouch ? 0 : rotateY,
          scale: isHovered && !isTouch ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={cn(
          'rounded-2xl bg-white shadow-lg transition-shadow duration-300',
          isHovered && 'shadow-2xl',
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}
