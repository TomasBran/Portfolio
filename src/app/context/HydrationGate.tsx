"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

export function HydrationGate({ children }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <LoadingScreen />;

  return children;
}
