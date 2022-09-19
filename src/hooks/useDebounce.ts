import { useRef } from 'react';
const useDebounce = () => {
  let timer = useRef(0);

  const debounce = (callback: () => void, delay: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      callback();
    }, delay);
  };

  return { debounce };
};
export default useDebounce;
