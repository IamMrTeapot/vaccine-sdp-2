import { useEffect } from "react";

export function useWindowListener(eventType: string, listener: EventListener) {
  useEffect(() => {
    window.addEventListener(eventType, listener);

    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, []);
  // I think we should use eventType and listener as dependencies na kub ;-;
  // But I do follow your instruction kub ;-;
}
