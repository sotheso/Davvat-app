import React from 'react';

const StoryCard: React.FC = () => {
  return (
    <div
      style={{
        width: 320.595,
        height: 568.034,
        borderRadius: 16,
        backgroundImage: "url('/story.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        overflowY: 'hidden',
        overflowX: 'hidden',
        boxShadow: '0 2px 16px #ccc',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          borderRadius: 16,
          pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) -4.45%, rgba(0, 0, 0, 0.80) 70.96%)',
        }}
      />
      {/* Centered text overlay */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '65%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 28, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
          ایونت بساط
        </div>
        <div style={{ fontWeight: 400, fontSize: 16, color: '#fff', lineHeight: 1.7, whiteSpace: 'pre-line', marginBottom: 24 }}>
          دایره‌های رنگی
          <br />
          رسیدن بساطِ دایره‌زنگی
        </div>
        {/* Logos row */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 24 }}>
          <img src="/SnapInsta.to_236983041_1236746640096851_1732587132704826415_n.png" alt="لوگو 1" style={{ width: 36, height: 36, borderRadius: '50%', background: '#fff', objectFit: 'cover', border: '2px solid #fff' }} />
          <img src="/لوگو-مزمز.png" alt="لوگو 2" style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', objectFit: 'cover', border: '2px solid #fff' }} />
        </div>
        {/* مشاهده button */}
        <button
          style={{
            borderRadius: 27,
            background: '#F26430',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Ravi, sans-serif',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            border: 'none',
            padding: '2px 20px',
            marginTop: 8,
            cursor: 'pointer',
            boxShadow: '0 1px 4px #0001',
            outline: 'none',
          }}
        >
          مشاهده
        </button>
      </div>
    </div>
  );
};

export default StoryCard; 