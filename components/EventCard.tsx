import React from 'react';

const EventCard: React.FC = () => {
  return (
    <div className="event-card" style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'stretch', background: '#f5f5f5', borderRadius: 16, padding: 20, boxShadow: '0 2px 8px #eee', width: 373, height: 181.46, gap: 20, boxSizing: 'border-box', overflow: 'hidden'}}>
      {/* Right column: Banner and Date */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%', minWidth: 120}}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 12,
            backgroundImage: "url('/banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            flexShrink: 0,
            marginBottom: 8,
            backgroundColor: '#d9a9a9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <div style={{marginTop: 0, textAlign: 'center', color: '#888', fontSize: 10, background: '#e0e0e0', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: 104, height: 24, fontWeight: 500, lineHeight: '24px', boxSizing: 'border-box', padding: 0}}>پنجشنبه، ۲۴ فروردین</div>
      </div>
      {/* Left column: Title, then bazarche+stars, then description */}
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
        {/* Title at the top */}
        <h3 style={{fontWeight: 700, fontSize: 16, margin: 0, textAlign: 'right', marginBottom: 8}}>ایونت بساط</h3>
        {/* Stars and bazarche below the title */}
        {/* Description */}
        <p style={{margin: 0, textAlign: 'right', fontSize: 12, color: '#444'}}>وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب به شب فراموش شدنیه!</p>
        {/* Bottom row: up arrow (optional, if needed) */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, marginBottom: 8}}>
          <button style={{background: '#F2C1AE', color: '#F26430', border: 'none', borderRadius: 12, padding: '2px 16px', fontWeight: 'bold', fontSize: 10, boxShadow: '0 1px 4px #eee'}}>بازارچه</button>
          <div style={{display: 'flex', alignItems: 'center', gap: 2}}>
            <span style={{color: '#ff7043', fontSize: 18}}>★</span>
            <span style={{color: '#ff7043', fontSize: 18}}>★</span>
            <span style={{color: '#ff7043', fontSize: 18}}>★</span>
            <span style={{color: '#ccc', fontSize: 18}}>★</span>
            <span style={{color: '#ccc', fontSize: 18}}>★</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 4, marginTop: 8}}>
          <button style={{background: '#ff7043', color: '#fff', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 1px 4px #eee'}}>^</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard; 