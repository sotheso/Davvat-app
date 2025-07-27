import React from 'react';

const BannerCard: React.FC = () => {
  return (
    <div style={{ marginBottom: 32 }}>
      {/* Main title outside the card */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <h1 style={{
          display: 'flex',
          width: 275,
          height: 35,
          flexDirection: 'column',
          justifyContent: 'center',
          flexShrink: 0,
          color: '#000',
          textAlign: 'right',
          fontFamily: 'Ravi, sans-serif',
          fontSize: 24,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          margin: '0 0 16px 0'
        }}>
          !اگه قرار باشه فقط یه جا بری
        </h1>
      </div>
      
      {/* Main banner card */}
      <div style={{
        width: 1104,
        height: 240,
        flexShrink: 0,
        borderRadius: 40,
        border: '1px solid #EDEDED',
        background: '#FCFCFC',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Left section - Empty for spacing */}
        <div style={{ flex: 1 }} />
        {/* Right section - Orange block */}
        <div style={{
          width: 370,
          height: 200,
          flexShrink: 0,
          borderRadius: 24,
          background: '#F26430',
          margin: 16
        }} />
        {/* Orange circle absolutely positioned in bottom left */}
        <div style={{
          position: 'absolute',
          left: 16,
          bottom: 16,
          width: 24,
          height: 24,
          background: '#F26430',
          borderRadius: '50%'
        }} />
      </div>
    </div>
  );
};

export default BannerCard; 