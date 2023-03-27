import React from 'react';

export default function index() {
  return (
    <div className="flex h-screen flex-col bg-red-500">
      <div className="flex flex-1 bg-pink-400">
        <aside className="w-full max-w-xs bg-orange-400">Siderbar</aside>
        <main className="flex-1 bg-blue-500">Main</main>
      </div>
      <footer className="h-20 bg-green-500">Player</footer>
    </div>
  );
}
