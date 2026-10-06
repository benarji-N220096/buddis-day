import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Film Grain Texture */}
      <div className="absolute inset-0 bg-grain opacity-80" />

      {/* Gentle ambient warm radial lighting */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[140px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(227, 214, 196, 0.6) 0%, rgba(245, 242, 236, 0) 70%)',
        }}
      />

      <div
        className="absolute top-[50%] -right-[15%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 155, 0.45) 0%, rgba(245, 242, 236, 0) 70%)',
        }}
      />

      <div
        className="absolute bottom-[-10%] -left-[10%] w-[700px] h-[700px] rounded-full blur-[150px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(220, 206, 187, 0.5) 0%, rgba(245, 242, 236, 0) 70%)',
        }}
      />
    </div>
  );
};
