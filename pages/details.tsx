import React from 'react';
import TopBar from '../components/CompViewAsli/TopBar';
import DetailsImage from '../components/CompViewDetails/DetailsImage';
import BazaarcheButton from '../components/CompViewAsli/CompDetails/ButtonCard/BazaarcheButton';
import CapsuleButtonGroup from '../components/CompViewDetails/CapsuleButtonGroup';
import OrangeCapsule from '../components/CompViewDetails/OrangeCapsule';

const DetailsPage: React.FC = () => {
  return (
    <div>
      <div style={{ paddingLeft: '94px', paddingRight: '94px' }}>
        <TopBar />
        <div style={{ height: 64 }} />
        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          {/* Banner box */}
          <DetailsImage />
          {/* Info section */}
          <EventInfo
            name="ایونت بساط"
            description="وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!وقتی شب و بساط و وافور با منقل ترکیب بشن، اون شب یه شب فراموش شدنیه! پس سیخ یادتون نره!"
            tags={["بازارچه", "بازارچه", "بازارچه", "بازارچه", "بازارچه"]}
            address="خیابان ایرانشهر، تقاطع بهشتی، کوچه علیمرادی، پلاک ۱۲، کافه عمارت دل"
            time="۲۵ فروردین الی ۳ اسفند - از ساعت ۲۲ تا ۴ صبح"
            programs={[
              { capsule: "۲۵ فروردین", description: "سواروسکی، لوئی ویتون، دولچه گابانا" },
              { capsule: "۲۶ فروردین", description: "سواروسکی، لوئی ویتون، دولچه گابانا" },
              { capsule: "۲۷ فروردین", description: "سواروسکی، لوئی ویتون، دولچه گابانا" }
            ]}
            images={["image1.jpg", "image2.jpg"]}
          />
        </div>

      <div style={{ height: 12}} />
      <div style={{ height: 100 }} />

      <div style={{ height: 12}} />
      <BannerTitle style={{ color: '#F26430', marginBottom: 24 }}>:برندها</BannerTitle>
      <BannerParagraph>
        سواروسکی، لویی ویتون، دولچه گابانا، سواروسکی، لویی ویتون، دولچه گابانا، سواروسکی، لویی ویتون، دولچه گابانا، سواروسکی، لویی ویتون، دولچه گابانا
      </BannerParagraph>
      <div style={{ height: 100 }} />

      </div>
      {/* Fixed Action Buttons at Bottom */}
      <div
        className="glassy-action-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          padding: '16px 0',
          zIndex: 1000,
        }}
      >
        <div className="glassy-action-bar-inner">
          <CapsuleButtonGroup />
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

type Program = { capsule: string, description: string };

const EventInfo = ({
  name,
  description,
  tags,
  address,
  time,
  programs,
  images,
}: {
  name: string,
  description: string,
  tags: string[],
  address: string,
  time: string,
  programs: Program[],
  images?: string[],
}) => (
  <div style={{ width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
      <BannerTitle>{name}</BannerTitle>
    </div>
    <BannerParagraph>
      {description}
    </BannerParagraph>
    <div style={{ display: 'flex', gap: 8, marginBottom: 24, marginTop: 12 }}>
      {tags.map((tag, idx) => (
        <BazaarcheButton key={idx}>{tag}</BazaarcheButton>
      ))}
    </div>
    <BannerTitle style={{ color: '#F26430', marginTop: 24, marginBottom: 12 }}>:آدرس</BannerTitle>
    <BannerParagraph style={{ marginBottom: 16 }}>{address}</BannerParagraph>
    <BannerTitle style={{ color: '#F26430', marginTop: 24, marginBottom: 12 }}>:تاریخ</BannerTitle>
    <BannerParagraph style={{ marginBottom: 32 }}>{time}</BannerParagraph>

    {/* برنامه‌ها */}
    {programs && programs.length > 0 && (
      <>
        <BannerTitle style={{ color: '#F26430', marginBottom: 24 }}>:برنامه‌ها</BannerTitle>
        {programs.map((program, idx) => (
          <div key={idx} style={{ width: '100%', textAlign: 'right', marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
              <OrangeCapsule>{program.capsule}</OrangeCapsule>
            </div>
            <BannerParagraph>{program.description}</BannerParagraph>
          </div>
        ))}
      </>
    )}
  </div>
); 