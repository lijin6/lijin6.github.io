import React from 'react';

const paths = {
  network: 'M12 4v6m-6 4v-2h12v2M10 2h4v4h-4zM4 14h4v5H4zM16 14h4v5h-4z',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16',
  paper: 'M6 3h9l4 4v14H6zM14 3v5h5M9 12h7m-7 4h7',
  globe: 'M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c-4 4-4 14 0 18 4-4 4-14 0-18Z',
  sun: 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1m-7 1a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z',
  moon: 'M20 15a8 8 0 0 1-11-11 8 8 0 1 0 11 11Z',
  link: 'M7 17 17 7M7 7h10v10',
  layers: 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 4 9 5 9-5',
  scan: 'M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4M4 12h16',
};

export default function Icon({ name }) {
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}
