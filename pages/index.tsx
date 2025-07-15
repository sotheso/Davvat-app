import React, { useRef, useEffect } from 'react';
import EventCard from '../components/EventCard';
import StoryCard from '../components/StoryCard';
import '../styles/globals.css';

const NUM_STORY_CARDS = 10;

const HomePage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320.6;
      const gap = 16;
      const visibleCards = 4;
      // مجموع عرض همه کارت‌ها و فاصله‌ها
      const totalWidth = NUM_STORY_CARDS * cardWidth + (NUM_STORY_CARDS - 1) * gap;
      // عرض قابل مشاهده (container)
      const containerWidth = scrollRef.current.offsetWidth;
      // اسکرول به وسط
      const scrollTo = (totalWidth - containerWidth) / 2;
      scrollRef.current.scrollLeft = scrollTo;
    }
  }, []);

  // Smooth scroll function
  function smoothScrollTo(element: HTMLElement, to: number, duration: number) {
    const start = element.scrollLeft;
    const change = to - start;
    const startTime = performance.now();
    function animateScroll(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      element.scrollLeft = start + change * progress;
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    requestAnimationFrame(animateScroll);
  }

  // Auto-scroll every 3.5 seconds, with very smooth movement
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth = 320.6;
        const gap = 16;
        const visibleCards = 4;
        const totalWidth = NUM_STORY_CARDS * cardWidth + (NUM_STORY_CARDS - 1) * gap;
        const containerWidth = scrollRef.current.offsetWidth;
        const maxScroll = totalWidth - containerWidth;
        // Move one card to the right
        let nextScroll = scrollRef.current.scrollLeft + cardWidth + gap;
        // If reached end, go back to start
        if (nextScroll > maxScroll) {
          nextScroll = 0;
        }
        // Use smoothScrollTo for a mellow effect
        smoothScrollTo(scrollRef.current, nextScroll, 1200);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{padding: 32}}>
      {/* Horizontal scrollable StoryCards, scroll starts from center and auto-scrolls smoothly */}
      <div ref={scrollRef} style={{width: '100%', overflowX: 'auto', marginBottom: 32, direction: 'ltr'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: 16, minWidth: NUM_STORY_CARDS * 320.6 + (NUM_STORY_CARDS - 1) * 16, paddingBottom: 8}}>
          {Array.from({ length: NUM_STORY_CARDS }).map((_, i) => (
            <StoryCard key={i} />
          ))}
        </div>
      </div>
      <h1 className="font-bold" style={{textAlign: 'center'}}>رویدادهای جدید</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(373px, 1fr))', gap: 32, margin: '32px 0'}}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <h2 className="font-medium" style={{textAlign: 'center'}}>فروردین</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(373px, 1fr))', gap: 32, margin: '32px 0'}}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default HomePage; 