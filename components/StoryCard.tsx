import React from 'react';

const StoryCard: React.FC = () => {
  return (
    <div
      style={{
        width: 320.6,
        height: 570,
        borderRadius: 24,
        backgroundImage: "url('/story.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        boxShadow: '0 2px 16px #ccc',
        position: 'relative',
        flex: 'none', // prevent shrinking in flex row
      }}
    >
      {/* محتوا بعداً اضافه می‌شود */}
    </div>
  );
};

export default StoryCard; 