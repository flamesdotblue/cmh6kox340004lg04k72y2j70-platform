import { useEffect, useRef } from 'react';

export default function MaskRevealText({ as: Tag = 'h2', className = '', children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--reveal', '0%');
    const mask = 'linear-gradient(90deg, transparent 0%, white var(--reveal), white var(--reveal), transparent calc(var(--reveal) + 120px))';
    el.style.webkitMaskImage = mask;
    el.style.maskImage = mask;

    let raf;
    let progress = 0;
    const animate = () => {
      progress += (100 - progress) * 0.06;
      el.style.setProperty('--reveal', `${progress}%`);
      if (progress < 99.5) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <Tag ref={ref} className={className}>{children}</Tag>;
}
