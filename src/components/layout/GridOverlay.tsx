import React from 'react';

interface GridOverlayProps {
  variant?: 'default' | 'black';
}

export function GridOverlay({ variant = 'default' }: GridOverlayProps) {
  const lineClass = variant === 'black' ? ' black' : '';
  return (
    <div
      id="ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb"
      className="grid-overlay"
    >
      <div
        id="ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb"
        className={`line-overlay _01${lineClass}`}
      />
      <div
        id="ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb"
        className={`line-overlay _02${lineClass}`}
      />
      <div
        id="ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb"
        className={`line-overlay _03${lineClass}`}
      />
    </div>
  );
}
