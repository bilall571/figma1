import React, { useState, useEffect, useCallback } from 'react';
import './MediaGallery.css';
import img1 from "../../assets/Col.png";
import img2 from "../../assets/Col (1).png";
import img3 from "../../assets/Col (2).png";
import img4 from "../../assets/Col (3).png";
import img5 from "../../assets/Group 48.png";
import img6 from "../../assets/Circle.png";

const mediaItems = [
  { src: img1, alt: "Product View 1", title: "Dashboard Overview", category: "Web App" },
  { src: img2, alt: "Product View 2", title: "Mobile Interface", category: "Mobile" },
  { src: img3, alt: "Product View 3", title: "Analytics Panel", category: "Dashboard" },
  { src: img4, alt: "Product View 4", title: "User Profile", category: "Web App" },
  { src: img5, alt: "Product View 5", title: "Settings Panel", category: "Settings" },
  { src: img6, alt: "Product View 6", title: "Notifications", category: "UI Kit" },
];

export default function MediaGallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setOpenIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setOpenIndex(null);
      setIsAnimating(false);
      document.body.style.overflow = '';
    }, 300);
  }, []);

  const navigate = useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => {
      const next = direction === 'next' 
        ? (prev + 1) % mediaItems.length 
        : (prev - 1 + mediaItems.length) % mediaItems.length;
      return next;
    });
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!openIndex && openIndex !== 0) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openIndex, closeLightbox, navigate]);

  if (openIndex !== null && openIndex !== undefined) {
    const item = mediaItems[currentIndex];
    return (
      <div 
        className={`lightbox-overlay ${isAnimating ? 'animating' : ''}`}
        onClick={closeLightbox}
        role="dialog"
        aria-modal="true"
        aria-label={`Viewing ${item.title}`}
      >
        <button 
          className="lightbox-close" 
          onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <button 
          className="lightbox-nav lightbox-prev" 
          onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <div className="lightbox-image-wrapper">
            <img 
              src={item.src} 
              alt={item.alt}
              className="lightbox-image"
            />
          </div>
          <div className="lightbox-info">
            <span className="lightbox-category">{item.category}</span>
            <h3 className="lightbox-title">{item.title}</h3>
          </div>
        </div>

        <button 
          className="lightbox-nav lightbox-next" 
          onClick={(e) => { e.stopPropagation(); navigate('next'); }}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="lightbox-counter">
          {currentIndex + 1} / {mediaItems.length}
        </div>
      </div>
    );
  }

  return (
    <section className="media-gallery" aria-label="Media Gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">Media Gallery</h2>
        <p className="gallery-subtitle">Explore our product screenshots and interfaces</p>
      </div>
      
      <div className="gallery-grid" role="list">
        {mediaItems.map((item, index) => (
          <article 
            key={index} 
            className="gallery-item"
            role="listitem"
            onClick={() => openLightbox(index)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            style={{ '--item-index': index }}
          >
            <div className="item-image-wrapper">
              <img 
                src={item.src} 
                alt={item.alt}
                loading="lazy"
                className="item-image"
              />
              <div className="item-overlay">
                <span className="view-text">View Fullscreen</span>
                <svg className="expand-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </div>
            </div>
            <div className="item-info">
              <span className="item-category">{item.category}</span>
              <h3 className="item-title">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .gallery-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .gallery-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .gallery-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .gallery-item {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
          cursor: pointer;
        }
        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
        }
        .gallery-item:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        .item-image-wrapper {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .gallery-item:hover .item-image {
          transform: scale(1.05);
        }
        .item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.7) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .item-overlay {
          opacity: 1;
        }
        .view-text {
          color: #fff;
          font-weight: 500;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        .expand-icon {
          color: #fff;
          opacity: 0.9;
        }
        .item-info {
          padding: 1.25rem 1.5rem;
        }
        .item-category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          margin-bottom: 0.5rem;
        }
        .item-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
        }
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .lightbox-overlay.animating {
          opacity: 0;
        }
        .lightbox-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          z-index: 10;
        }
        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          z-index: 10;
        }
        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-50%) scale(1.1);
        }
        .lightbox-prev { left: 1.5rem; }
        .lightbox-next { right: 1.5rem; }
        .lightbox-content {
          max-width: 90vw;
          max-height: 85vh;
        }
        .lightbox-image-wrapper {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          display: block;
        }
        .lightbox-info {
          text-align: center;
          margin-top: 1.5rem;
          color: #fff;
        }
        .lightbox-category {
          font-size: 0.875rem;
          font-weight: 500;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .lightbox-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0.5rem 0 0;
        }
        .lightbox-counter {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
        }
        @media (max-width: 640px) {
          .lightbox-nav { width: 44px; height: 44px; }
          .lightbox-prev { left: 0.75rem; }
          .lightbox-next { right: 0.75rem; }
          .lightbox-close { top: 0.75rem; right: 0.75rem; width: 40px; height: 40px; }
        }
      `}</style>
    </section>
  );
}