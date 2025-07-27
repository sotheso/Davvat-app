import React from 'react';
import BazaarcheButton from './BazaarcheButton';
import DateButton from './DateButton';
import BannerParagraph from '../CompText/BannerTopView/BannerParagraph';
import BannerTitle from '../CompText/BannerTopView/BannerTitle';

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
        {/* Button row absolutely positioned at bottom left of orange block */}
        <div style={{
          position: 'absolute',
          right: 400 + 20, // orange block margin right + desired padding from orange block
          bottom: 16, // orange block margin bottom
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8
        }}>
          <BazaarcheButton>دانش</BazaarcheButton>
          <BazaarcheButton>موزیک</BazaarcheButton>
          <BazaarcheButton>بازارچه</BazaarcheButton>
          <DateButton>پنجشنبه، ۲۴ فروردین</DateButton>
        </div>
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
        {/* Centered description text with spacing from the orange block */}
        <div
          style={{
            position: 'absolute',
            right: 370 + 32 + 24, // orange block width + gap + extra padding from orange block + extra padding from right edge
            top: '45%',
            transform: 'translateY(-50%)',
            width: 637,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <BannerTitle style={{ marginBottom: 8 }}>
            ایونت بساط
          </BannerTitle>
          <BannerParagraph>
            وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!
          </BannerParagraph>
        </div>
      </div>
    </div>
  );
};

export default BannerCard; 