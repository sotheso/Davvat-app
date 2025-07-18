import React, { useRef, useEffect } from 'react';
import EventCard from '../components/EventCard';
import StoryCard from '../components/StoryCard';
import TopBar from '../components/TopBar';

const NUM_STORY_CARDS = 10;
const STORY_GAP = 32;

const HomePage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320.6;
      const gap = STORY_GAP;
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
        const gap = STORY_GAP;
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
    <div>
      <TopBar />
      <div style={{ height: 60 }} />
      {/* Horizontal scrollable StoryCards, scroll starts from center and auto-scrolls smoothly */}
      <div ref={scrollRef} style={{width: '100%', overflowX: 'auto', marginBottom: 32, direction: 'ltr'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: STORY_GAP, minWidth: NUM_STORY_CARDS * 320.6 + (NUM_STORY_CARDS - 1) * STORY_GAP, paddingBottom: 8}}>
          {Array.from({ length: NUM_STORY_CARDS }).map((_, i) => (
            <StoryCard key={i} />
          ))}
        </div>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 62}}>
        <svg width="32" height="32" style={{flexShrink: 0}} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
        </svg>
        <h1 className="font-bold" style={{textAlign: 'center', margin: 0}}>رویدادهای جدید</h1>
        <svg width="32" height="32" style={{flexShrink: 0}} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
        </svg>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(373px, 1fr))',
          columnGap: -100, // فاصله افقی کم
          rowGap: 32,    // فاصله عمودی فعلی
          margin: '32px auto',
          maxWidth: (4 * 373) + (3 * 12), // برای ۴ کارت
          width: '100%',
          justifyContent: 'center',
          justifyItems: 'center',
          direction: 'ltr',
        }}
      >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      {/* فروردین تیتر و دایره‌ها */}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 0}}>
        <svg width="32" height="32" style={{flexShrink: 0}} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
        </svg>
        <h2 className="font-medium" style={{textAlign: 'center', margin: 0}}>فروردین</h2>
        <svg width="32" height="32" style={{flexShrink: 0}} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
        </svg>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(373px, 1fr))',
          columnGap: 0, // فاصله افقی کم
          rowGap: 32,    // فاصله عمودی فعلی
          margin: '32px auto',
          maxWidth: (6 * 373) + (5 * 12), // برای ۶ کارت
          width: '100%',
          justifyContent: 'center',
          justifyItems: 'center',
          direction: 'ltr',
        }}
      >
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