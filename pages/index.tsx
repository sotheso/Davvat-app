import React, { useRef, useEffect } from 'react';
import EventCard from '../components/EventCard';
import TopBar from '../components/TopBar';
import EventCardCarousel from '../components/EventCardCarousel';
import BannerCard from '../components/BannerCard';

const HomePage: React.FC = () => {
  return (
    <div style={{ paddingLeft: '94px', paddingRight: '94px' }}>
      <TopBar />
      
      {/* Banner Card - New Position */}
      <BannerCard />
      
      {/* Event Card Carousel - New Position */}
      <EventCardCarousel />
      
      <div style={{ height: 60 }} />
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 62}}>
        <svg width="32" height="32" style={{flexShrink: 0}} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
        </svg>
        <h1 className="font-bold" style={{textAlign: 'center', margin: 0}}>همه جاهایی که دعوتی:</h1>
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