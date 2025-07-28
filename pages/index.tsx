import React, { useRef, useEffect, useState } from 'react';
import EventCard from '../components/CompViewAsli/EventCard';
import TopBar from '../components/CompViewAsli/TopBar';
import EventCardCarousel from '../components/CompViewAsli/EventCardCarousel';
import BannerCard from '../components/CompViewAsli/BannerCard';
import SectionTitle from '../components/CompViewDetails/Text/SectionTitle';
import FilterButton from '../components/CompViewDetails/ButtonCard/FilterButton';

const filterOptions = [
  { label: 'نزدیک‌ترین' },
  { label: 'محبوب‌ترین' },
  { label: 'جدیدترین' },
];

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div style={{ paddingLeft: '94px', paddingRight: '94px' }}>
      
      
      <TopBar />


      {/* Banner Card - New Position */}
      <SectionTitle>!اگه قرار باشه فقط یه جا بری</SectionTitle>
      <BannerCard />


      {/* Event Card Carousel - New Position */}
      <SectionTitle>:بهترین هایی که دعوتی</SectionTitle>
      <EventCardCarousel />


      <div style={{ height: 60 }} />
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <SectionTitle>:همه جاهایی که دعوتی</SectionTitle>
      </div>


      {/* Filter Buttons */}
      <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end', margin: '24px 0' }}>
        {filterOptions.map((option, idx) => (
          <FilterButton
            key={option.label}
            label={option.label}
            active={activeFilter === idx}
            onClick={() => setActiveFilter(idx)}
          />
        ))}
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
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default HomePage; 