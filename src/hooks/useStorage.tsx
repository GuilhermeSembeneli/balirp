import React from "react";



export function useStorage(key: string, inicial: string) {
  const [storage, setStorage] = React.useState(() => {
    const getStorage = localStorage.getItem(key);

    return getStorage ? getStorage : inicial;
  });

  React.useEffect(() => {
    localStorage.setItem(key, storage);
  }, [storage, key]);

  return {storage, setStorage};
}
