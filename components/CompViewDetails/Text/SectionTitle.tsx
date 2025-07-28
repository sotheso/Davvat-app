import React from 'react';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, ...props }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      textAlign: 'right', // اطمینان از راست‌چین بودن
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      color: 'black',
      fontSize: 24,
      fontFamily: 'Ravi',
      fontWeight: '700',
      wordWrap: 'break-word',
    }}
    {...props}
  >
    {children}
  </div>
);

export default SectionTitle; 