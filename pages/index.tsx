import React, { useRef, useEffect, useState } from 'react';
import EventCard from '../components/CompViewAsli/EventCard';
import TopBar from '../components/CompViewAsli/TopBar';
import EventCardCarousel from '../components/CompViewAsli/StoryCards';
import BannerCard from '../components/CompViewAsli/TopBanner';
import SectionTitle from '../components/CompViewAsli/CompDetails/Text/SectionTitle';
import FilterButton from '../components/CompViewAsli/CompDetails/ButtonCard/FilterButton';
import BottomImage from '../components/CompViewAsli/BottomImage';

const filterOptions = [
  { label: 'نزدیک‌ترین' },
  { label: 'محبوب‌ترین' },
  { label: 'جدیدترین' },
];

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div className="home-page-container">
      <style jsx>{`
        .home-page-container {
          padding-left: 94px;
          padding-right: 94px;
        }
        
        @media (max-width: 768px) {
          .home-page-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .home-page-container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }
        
        .event-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(373px, 1fr));
          column-gap: 12px;
          row-gap: 32px;
          margin: 32px auto;
          max-width: calc(4 * 373px + 3 * 12px);
          width: 100%;
          justify-content: center;
          justify-items: center;
          direction: ltr;
        }
        
        @media (max-width: 768px) {
          .event-grid {
            grid-template-columns: 1fr;
            max-width: 100%;
            column-gap: 0;
            row-gap: 16px;
          }
        }
        
        .filter-bar-responsive {
          display: flex;
          gap: 16px;
          justify-content: flex-end;
          margin: 24px 0;
        }
        
        @media (max-width: 768px) {
          .filter-bar-responsive {
            justify-content: center !important;
            flex-direction: row !important;
            gap: 8px;
            flex-wrap: nowrap !important;
          }
        }
        
        .carousel-container {
          position: relative;
          left: -94px;
          width: calc(100% + 188px);
          padding-left: 10px;
          padding-right: 10px;
          box-sizing: border-box;
        }
        
        @media (max-width: 768px) {
          .carousel-container {
            left: -16px;
            width: calc(100% + 32px);
            padding-left: 8px;
            padding-right: 8px;
          }
        }
      `}</style>
      
      <div className="topbar-responsive">
        <TopBar />
      </div>
      <style jsx>{`
        .topbar-responsive {
          width: 100%;
        }
        @media (max-width: 768px) {
          .topbar-responsive {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>

      <div style={{ height: 64 }} />

      {/* Banner Card - New Position */}
      <SectionTitle>!اگه قرار باشه فقط یه جا بری</SectionTitle>
      <BannerCard />

      {/* Event Card Carousel - New Position */}
      <SectionTitle>:بهترین هایی که دعوتی</SectionTitle>
      <div className="carousel-container">
        <EventCardCarousel />
      </div>

      <div style={{ height: 60 }} />
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <SectionTitle>:همه جاهایی که دعوتی</SectionTitle>
      </div>

      {/* Filter Buttons */}
      <div className="filter-bar-responsive">
        {filterOptions.map((option, idx) => (
          <FilterButton
            key={option.label}
            label={option.label}
            active={activeFilter === idx}
            onClick={() => setActiveFilter(idx)}
          />
        ))}
      </div>

      <div className="event-grid">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <div style={{ height: 64 }} />

      <SectionTitle>برندها</SectionTitle>
      <BottomImage />
    </div>
  );
};

export default HomePage; 