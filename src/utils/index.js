export const angle = (cx, cy, ex, ey) => {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return (deg + 270) % 360; // normalize
};

export const isBetween = (val, min, max) => {
  return val > min && val < max;
};

export const normalizeDeg = (deg) => (deg + 360) % 360;

export const repeat = (pattern, times) => Array(times).fill(pattern).flat();
