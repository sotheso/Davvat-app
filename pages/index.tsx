import React from 'react';
import EventCard from '../components/EventCard';

const HomePage: React.FC = () => {
  return (
    <div style={{padding: 32}}>
      <h1 style={{textAlign: 'center'}}>رویدادهای جدید</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24, margin: '32px 0'}}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <h2 style={{textAlign: 'center'}}>فروردین</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24, margin: '32px 0'}}>
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