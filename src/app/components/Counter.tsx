"use client";

import { useCounterStore } from "../store";

export const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  // const { count } = useCounterStore((state) => ({ count: state.count }));
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  // const { isLoaded, isSignedIn } = useUser();

  // if (!isLoaded || !isSignedIn) {
  //   return null;
  // }

  return <button onClick={() => increment()}>Clicked {count} times</button>;
};
