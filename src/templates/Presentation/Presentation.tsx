import * as React from 'react';

interface PresentationInterface {
  children: React.ReactNode,
}

export function Presentation({ children }: PresentationInterface) {
  return (
    <div>
      {children}
    </div>
  );
}