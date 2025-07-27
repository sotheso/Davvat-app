import React, { useState } from 'react';
import EventCard from './CompViewAsli/EventCard';

const EventCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start from first set
  
  // 9 total cards in 3 sets of 3
  const cardSets = [
    [1, 2, 3], // First set
    [4, 5, 6], // Second set
    [7, 8, 9], // Third set
  ];

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < cardSets.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Calculate the width for exactly 3 cards
  const cardWidth = 350.462;
  const cardGap = 16;
  const threeCardsWidth = (cardWidth * 3) + (cardGap * 2); // 3 cards + 2 gaps

  // Check if buttons should be disabled
  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === cardSets.length - 1;

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: '24px',
      margin: '32px 0',
      width: '100%'
    }}>
      {/* Title */}
      <div style={{
        width: '100%',
        height: '100%',
        textAlign: 'right',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        fontSize: 24,
        fontFamily: 'Ravi',
        fontWeight: '700',
        wordWrap: 'break-word',
        marginBottom: 16
      }}>
        :بهترین هایی که دعوتی
      </div>

      {/* Cards Container - Show exactly 3 cards */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '620.953px',
        overflow: 'hidden',
        position: 'relative',
        width: `${threeCardsWidth}px`,
        maxWidth: `${threeCardsWidth}px`,
        minWidth: `${threeCardsWidth}px`
      }}>
        <div 
          style={{
            display: 'flex',
            gap: `${cardGap}px`,
            transform: `translateX(-${currentIndex * threeCardsWidth}px)`,
            transition: 'transform 0.5s ease-in-out',
            width: `${cardSets.length * threeCardsWidth}px`,
            flexShrink: 0
          }}
        >
          {cardSets.flatMap((set, setIndex) => 
            set.map((cardId) => (
              <div 
                key={`${setIndex}-${cardId}`} 
                style={{
                  width: `${cardWidth}px`,
                  height: '620.953px',
                  background: '#F26430',
                  borderRadius: '24px',
                  position: 'relative',
                  flexShrink: 0,
                  transform: 'scale(1)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {/* Gray circle in bottom-left corner */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#F3F4F6',
                  borderRadius: '9999px',
                  flexShrink: 0,
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px'
                }} />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Navigation Buttons - Below Cards */}
      <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'flex-start',
        marginTop: '16px',
        width: '100%',
        paddingLeft: '20px'
      }}>
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          disabled={isPreviousDisabled}
          onMouseDown={(e) => e.preventDefault()}
          style={{
            width: '48px',
            height: '48px',
            background: isPreviousDisabled ? '#E5E7EB' : '#F3F4F6',
            borderRadius: '9999px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isPreviousDisabled ? 'not-allowed' : 'pointer',
            flexShrink: 0,
            transition: 'all 0.2s ease',
            opacity: isPreviousDisabled ? 0.5 : 1
          }}
          onMouseEnter={(e) => {
            if (!isPreviousDisabled) {
              e.currentTarget.style.background = '#E5E7EB';
              e.currentTarget.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isPreviousDisabled) {
              e.currentTarget.style.background = '#F3F4F6';
              e.currentTarget.style.transform = 'scale(1)';
            }
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke={isPreviousDisabled ? "#999" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          disabled={isNextDisabled}
          onMouseDown={(e) => e.preventDefault()}
          style={{
            width: '48px',
            height: '48px',
            background: isNextDisabled ? '#E5E7EB' : '#F3F4F6',
            borderRadius: '9999px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isNextDisabled ? 'not-allowed' : 'pointer',
            flexShrink: 0,
            transition: 'all 0.2s ease',
            opacity: isNextDisabled ? 0.5 : 1
          }}
          onMouseEnter={(e) => {
            if (!isNextDisabled) {
              e.currentTarget.style.background = '#E5E7EB';
              e.currentTarget.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isNextDisabled) {
              e.currentTarget.style.background = '#F3F4F6';
              e.currentTarget.style.transform = 'scale(1)';
            }
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke={isNextDisabled ? "#999" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EventCardCarousel; 