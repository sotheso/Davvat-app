import React from 'react';

interface BannerTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BannerTitle: React.FC<BannerTitleProps> = ({ children, ...props }) => (
  <div
    style={{
      display: 'flex',
      width: 'auto',
      height: 26,
      flexDirection: 'column',
      justifyContent: 'center',
      flexShrink: 0,
      alignItems: 'flex-start',
    }}
    {...props}
  >
    <div
      style={{
        width: 'auto',
        height: '100%',
        textAlign: 'right',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: 'black',
        fontSize: 24,
        fontFamily: 'Ravi',
        fontWeight: 700,
        wordWrap: 'break-word',
      }}
    >
      {children}
    </div>
  </div>
);

export default BannerTitle; 