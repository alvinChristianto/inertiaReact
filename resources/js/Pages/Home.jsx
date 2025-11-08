import React from 'react';

// Props passed from your Laravel controller are automatically received here
export default function Home({ username }) {
  return (
    <div>
      <h1>Welcome to your Inertia + React app!</h1>
      <p>Hello, {username}. This content is rendered via React.</p>
      {/* You can use Inertia's Link component for SPA navigation */}
      <a href="/about">Go to About Page (Full Page Load)</a>
      <p>OR</p>
      <Link href="/about">Go to About Page (Inertia Visit)</Link>
    </div>
  );
}