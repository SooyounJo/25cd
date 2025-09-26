import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const AboutContent = dynamic(() => import('../components/about/AboutContent'), {
  ssr: false,
  loading: () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '18px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      Three.js 로딩 중...
    </div>
  )
});

export default function About() {
  return (
    <>
      <Head>
        <title>Three.js Waving Rings – Scroll Interaction</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <AboutContent />
    </>
  );
}