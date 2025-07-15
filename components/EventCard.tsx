import React from 'react';

const EventCard: React.FC = () => {
  return (
    <div className="event-card" style={{border: '1px solid #eee', borderRadius: 12, padding: 16, background: '#fff', textAlign: 'center'}}>
      <img src="/banner.png" alt="بنر ایونت" className="event-image" style={{width: 180, height: 180, objectFit: 'cover', background: '#ddd', borderRadius: 8, marginBottom: 12}} />
      <div className="event-details">
        <h3>ایونت بساط</h3>
        <p>دایره‌های رنگی</p>
        <p>رسیدن بساط دایره رنگی</p>
        <button style={{marginTop: 8, background: '#ff7043', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 18px'}}>مشاهده</button>
      </div>
    </div>
  );
};

export default EventCard; 