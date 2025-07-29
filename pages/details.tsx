import React from 'react';
import TopBar from '../components/CompViewAsli/TopBar';
import DetailsImage from '../components/CompViewDetails/DetailsImage';
import BazaarcheButton from '../components/CompViewAsli/CompDetails/ButtonCard/BazaarcheButton';
import CapsuleButtonGroup from '../components/CompViewDetails/CapsuleButtonGroup';

const DetailsPage: React.FC = () => {
  return (

    <div style={{ paddingLeft: '94px', paddingRight: '94px' }}>
        <TopBar />
        <div style={{ height: 64 }} />



        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 64, alignItems: 'flex-start', justifyContent: 'center' }}>
          {/* Banner box */}
          <DetailsImage />
          {/* Info section */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
              <BannerTitle>ایونت بساط</BannerTitle>
              {/* امتیاز حذف شد */}
            </div>
            <BannerParagraph>
            وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!            </BannerParagraph>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24 , marginTop: 12}}>
              <BazaarcheButton>بازارچه</BazaarcheButton>
              <BazaarcheButton>بازارچه</BazaarcheButton>
              <BazaarcheButton>بازارچه</BazaarcheButton>
              <BazaarcheButton>بازارچه</BazaarcheButton>
              <BazaarcheButton>بازارچه</BazaarcheButton>
            </div>
            <BannerTitle style={{ color: '#F26430', marginTop: 24, marginBottom: 12 }}>:آدرس</BannerTitle>
            <BannerParagraph style={{ marginBottom: 16 }}>
              خیابان ایرانشهر، تقاطع بهشتی، کوچه علیمرادی، پلاک ۱۲، کافه عمارت دل
            </BannerParagraph>
            <BannerTitle style={{ color: '#F26430', marginTop: 24, marginBottom: 12 }}>:تاریخ</BannerTitle>
            <BannerParagraph style={{ marginBottom: 32 }}>
              ۲۵ فروردین الی ۳ اسفند - از ساعت ۲۲ تا ۴ صبح
            </BannerParagraph>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
              <CapsuleButtonGroup />
            </div>
          </div>
        </div>
      </div>
  );
};

export default DetailsPage;

// BannerTitle component
const BannerTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...props }) => (
  <div
    style={{
      width: '181.354px',
      height: '26.041px',
      flexShrink: 0,
      color: '#000',
      textAlign: 'right',
      fontFamily: 'Ravi',
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

// BannerParagraph component
const BannerParagraph: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div
    style={{
      width: '708px',
      height: '169px',
      flexShrink: 0,
      color: '#000',
      textAlign: 'right',
      fontFamily: 'Ravi',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '35px',
      marginBottom: 16,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    }}
    {...props}
  >
    {children}
  </div>
); 