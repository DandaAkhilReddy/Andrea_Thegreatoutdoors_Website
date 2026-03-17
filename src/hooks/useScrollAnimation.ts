import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  animate: 'visible' | 'hidden';
  inView: boolean;
}

/**
 * Returns a ref and an `animate` string (`'visible'` | `'hidden'`) for use
 * with framer-motion Variants on `<motion.div animate={animate}>`.
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn {
  const { threshold = 0.15, triggerOnce = true, rootMargin = '0px 0px -80px 0px' } = options;
  const [ref, inView] = useInView({ threshold, triggerOnce, rootMargin });

  return { ref, animate: inView ? 'visible' : 'hidden', inView };
}
