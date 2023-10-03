"use client";
import React, { useState, useEffect } from "react";

interface DateInfo {
  year: string;
  wish: string;
}

export const useDate = (): DateInfo => {
  const [today, setDate] = useState<Date>(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a function to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const year: string = `${today.getFullYear()}`;

  const hour: number = today.getHours();
  const wish: string =
    `Good ${
      (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Ebening"
    } `;

  return {
    year,
    wish,
  };
};
