import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const isClient = typeof window !== "undefined";

  const [value, setValue] = useState<T>(() => {
    if (isClient) {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue != null) return JSON.parse(jsonValue);
    }
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue as T;
    }
  });

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [isClient, key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}