'use client'; // This marks the file as a client component.

import React from 'react';
import TimerControls from '@/components/timer/TimerControls';

/**
 * Home Page Component
 * This serves as the main container for the Focus Timer application.
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
      {/* App Title */}
      <h1 className="text-3xl font-bold text-white mb-8">
        Focus Timer
      </h1>

      {/* Timer Controls Component */}
      <div className="w-full max-w-md">
        <TimerControls />
      </div>
    </div>
  );
}
