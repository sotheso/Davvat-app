import React, { useState } from 'react';

const images = [
  // اینجا می‌توانی عکس واقعی قرار دهی
  { bg: '#F26430' },
  { bg: '#F2C230' },
  { bg: '#30B7F2' },
];

const DetailsImage: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        width: '350.462px',
        height: '620.953px',
        flexShrink: 0,
        borderRadius: '19px',
        background: images[active].bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'background 0.3s',
      }}
    >
      {/* اینجا می‌توانی عکس یا محتوای دلخواه قرار دهی */}
      {/* دایره‌های پایین */}
      <div style={{
        position: 'absolute',
        bottom: 24,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
      }}>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label={`نمایش اسلاید ${idx + 1}`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill={active === idx ? '#FFF' : '#E5E7EB'} />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DetailsImage; 