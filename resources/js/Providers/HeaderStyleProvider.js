import { createContext, useState } from 'react';

export const HeaderStyleContext = createContext({
  height: 0,
  setHeight: () => {},
  show: true,
  setShow: () => {},
});

export const HeaderStyleProvider = ({ children }) => {
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <HeaderStyleContext.Provider
      value={{
        height,
        setHeight,
        show,
        setShow,
      }}
    >
      {children}
    </HeaderStyleContext.Provider>
  );
};
