import React from 'react';

const rectangleDiv: React.CSSProperties = {
  width: '156px',
  height: '56px',
  flexShrink: 0,
  borderRadius: '51px',
  backgroundColor: '#f26430',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 8px',
};

const textDiv: React.CSSProperties = {
  position: 'relative',
  fontSize: 24,
  fontWeight: 600,
  fontFamily: 'Ravi',
  color: '#fff',
  textAlign: 'center',
  display: 'inline-block',
};

const bechinimStyle: React.CSSProperties = {
  width: '79px',
  position: 'relative',
  fontSize: 24,
  fontWeight: 600,
  fontFamily: 'Ravi',
  color: '#f26430',
  textAlign: 'center',
  display: 'inline-block',
};

const iconStyle: React.CSSProperties = {
  width: '29px',
  height: '29px',
  flexShrink: 0,
  marginLeft: '16px',
  display: 'inline-block',
  verticalAlign: 'middle',
};

const containerStyle: React.CSSProperties = {
  width: '513px',
  height: '87px',
  flexShrink: 0,
  borderRadius: '83px',
  border: '2px solid #EDEDED',
  background: '#F3F3F3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
  gap: '16px',
};

const CapsuleButtonGroup: React.FC = () => {
  return (
    <div style={{
      ...containerStyle,
      gap: 0,
    }}>
      <div style={rectangleDiv}>
        <div style={textDiv}>یادآوری</div>
      </div>
      <div style={rectangleDiv}>
        <div style={textDiv}>گوگل‌مپ</div>
      </div>
      <div style={{ marginLeft: '16px' }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <circle cx="14.5" cy="14.5" r="14.5" fill="#F26430" />
            <circle cx="14.5" cy="14.5" r="7.5" fill="#FFF" />
          </svg>
          <div style={{ ...bechinimStyle, marginLeft: '16px' }}>بچینیم!</div>
        </span>
      </div>
    </div>
  );
};

export default CapsuleButtonGroup; 