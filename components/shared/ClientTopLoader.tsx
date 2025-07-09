'use client';

import NextTopLoader from 'nextjs-toploader';

export default function ClientTopLoader() {
  return (
    <NextTopLoader
      color="#0a63ad"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #000000,0 0 5px #000000"
    />
  );
}
