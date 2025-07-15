import React from 'react';

const EventCard: React.FC = () => {
  return (
    <div className="event-card" style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', background: '#f5f5f5', borderRadius: 16, padding: 20, boxShadow: '0 2px 8px #eee', width: 373, height: 181.46, gap: 20}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
        <img src="/banner.png" alt="بنر ایونت" style={{width: 120, height: 120, objectFit: 'cover', background: '#ddd', borderRadius: 12, flexShrink: 0, marginBottom: 2}} />
        <div style={{marginTop: 2, textAlign: 'center', color: '#888', fontSize: 12, background: '#e0e0e0', borderRadius: 12, padding: '1px 10px', display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 110}}>پنجشنبه، ۲۴ فروردین</div>
      </div>
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
        <div>
          <h3 style={{fontWeight: 'bold', fontSize: 20, marginBottom: 2, textAlign: 'right'}}>ایونت بساط</h3>
          <p style={{marginBottom: 2, textAlign: 'right', fontSize: 15}}>وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب به شب فراموش شدنیه!</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 4, marginTop: 2}}>
          <button style={{background: '#ff7043', color: '#fff', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 1px 4px #eee'}}>^</button>
          <div style={{display: 'flex', alignItems: 'center', gap: 2}}>
            <span style={{color: '#ff7043', fontSize: 18}}>★</span>
            <span style={{color: '#ff7043', fontSize: 18}}>★</span>
            <span style={{color: '#ff7043', fontSize: 18}}>★</span>
            <span style={{color: '#ccc', fontSize: 18}}>★</span>
            <span style={{color: '#ccc', fontSize: 18}}>★</span>
          </div>
          <button style={{background: '#f5f5f5', color: '#ff7043', border: 'none', borderRadius: 12, padding: '2px 16px', fontWeight: 'bold', fontSize: 14, marginRight: 8, boxShadow: '0 1px 4px #eee'}}>بازارچه</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard; 