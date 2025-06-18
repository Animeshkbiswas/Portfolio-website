import React from 'react';

const Hero3D = () => {
  // Temporarily disable 3D functionality for stability during migration
  return (
    <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-4">Portfolio</div>
        <div className="text-muted-foreground">Modern Portfolio Website</div>
      </div>
    </div>
  );
};

export default Hero3D;