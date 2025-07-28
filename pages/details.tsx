import React from 'react';


const DetailsPage: React.FC = () => {
  return (
    <div style={{ background: '#F8F8F8', minHeight: '100vh', padding: '32px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 16, padding: 32 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 32, marginBottom: 32 }}>
          لوگوی دعوت
        </div>
        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 32, alignItems: 'flex-start', justifyContent: 'center' }}>
          {/* Banner box */}
          <div style={{ minWidth: 320, minHeight: 320, background: '#F26430', borderRadius: 32, flex: '0 0 340px', height: 340 }} />
          {/* Info section */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 24 }}>ایونت بساط</span>
              <span style={{ color: '#F26430', fontWeight: 700, fontSize: 18 }}>۳.۵ امتیاز</span>
            </div>
            <div style={{ textAlign: 'right', fontSize: 18, color: '#222', marginBottom: 16, lineHeight: 2 }}>
              وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <button style={{ background: '#F26430', color: '#fff', border: 'none', borderRadius: 16, padding: '4px 24px', fontSize: 16, cursor: 'pointer' }}>بازارچه</button>
              <button style={{ background: '#F26430', color: '#fff', border: 'none', borderRadius: 16, padding: '4px 24px', fontSize: 16, cursor: 'pointer' }}>بازارچه</button>
              <button style={{ background: '#F26430', color: '#fff', border: 'none', borderRadius: 16, padding: '4px 24px', fontSize: 16, cursor: 'pointer' }}>بازارچه</button>
              <button style={{ background: '#F26430', color: '#fff', border: 'none', borderRadius: 16, padding: '4px 24px', fontSize: 16, cursor: 'pointer' }}>بازارچه</button>
              <button style={{ background: '#F26430', color: '#fff', border: 'none', borderRadius: 16, padding: '4px 24px', fontSize: 16, cursor: 'pointer' }}>بازارچه</button>
            </div>
            <div style={{ fontWeight: 700, color: '#F26430', fontSize: 20, marginTop: 16 }}>آدرس:</div>
            <div style={{ fontSize: 16, marginBottom: 16, textAlign: 'right' }}>
              خیابان ایرانشهر، تقاطع بهشتی، کوچه علیمرادی، پلاک ۱۲، کافه عمارت دل
            </div>
            <div style={{ fontWeight: 700, color: '#F26430', fontSize: 20, marginTop: 8 }}>تاریخ:</div>
            <div style={{ fontSize: 16, marginBottom: 32, textAlign: 'right' }}>
              ۲۵ فروردین الی ۳ اسفند - از ساعت ۲۲ تا ۴ صبح
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
              <button style={{ background: '#F26430', color: '#fff', border: 'none', borderRadius: 24, padding: '8px 32px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>یادآوری</button>
              <button style={{ background: '#fff', color: '#F26430', border: '2px solid #F26430', borderRadius: 24, padding: '8px 32px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>گوگل مپ</button>
              <button style={{ background: '#F3F3F3', color: '#F26430', border: 'none', borderRadius: 24, padding: '8px 32px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>بچینیم!</button>
            </div>
          </div>
        </div>
        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32, gap: 8 }}>
          <span style={{ width: 12, height: 12, background: '#F3F3F3', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ width: 12, height: 12, background: '#F3F3F3', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ width: 12, height: 12, background: '#F26430', borderRadius: '50%', display: 'inline-block' }} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage; 