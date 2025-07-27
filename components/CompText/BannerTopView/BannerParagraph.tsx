import React from 'react';

interface BannerParagraphProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BannerParagraph: React.FC<BannerParagraphProps> = ({ children, ...props }) => (
  <div
    style={{
      width: 'auto',
      height: 114,
      flexShrink: 0,
      color: '#000',
      textAlign: 'right',
      fontFamily: 'Ravi',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '35px',
      display: 'flex',
      alignItems: 'flex-start',
    }}
    {...props}
  >
    {children}
  </div>
);

export default BannerParagraph; 