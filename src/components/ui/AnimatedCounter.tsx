import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  labelClassName?: string;
  label: string;
}

export function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2.5,
  className,
  labelClassName,
  label,
}: AnimatedCounterProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="text-center">
      <div className={className}>
        {inView && (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            separator=","
          />
        )}
      </div>
      <p className={labelClassName}>{label}</p>
    </div>
  );
}
