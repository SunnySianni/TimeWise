// src/components/timer/TimerState.tsx
// Define the shape of the timer state

export interface TimerState {
    minutes: number;
    seconds: number;
    isActive: boolean;
    intervalId: NodeJS.Timeout | null;
  }
  