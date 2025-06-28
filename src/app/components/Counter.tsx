"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn } = useUser();

  const [counter, setCounter] = useState(0);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <button onClick={() => setCounter(counter + 1)}>Clicked {counter} times</button>;
};
