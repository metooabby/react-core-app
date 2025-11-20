import { useRef } from "react";

function UseRefExp() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default UseRefExp;
