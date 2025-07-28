import React from 'react';

const BottomImage: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      margin: '48px 0',
    }}>
      <div
        style={{
          width: '100%',
          maxWidth: 800,
          minHeight: 260,
          background: '#F26430',
          borderRadius: '40px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* متن وسط کارت */}
        <div style={{
          color: 'white',
          fontSize: 24,
          textAlign: 'center',
          fontWeight: 400,
          lineHeight: 1.6,
          padding: '48px 32px',
          width: '100%'
        }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac."
        </div>
        {/* دایره خاکستری پایین چپ */}
        <div style={{
          width: 56,
          height: 56,
          background: '#F3F4F6',
          borderRadius: '50%',
          position: 'absolute',
          left: 32,
          bottom: 32,
        }} />
      </div>
    </div>
  );
};

export default BottomImage; 