
import { createContext, useState, useContext } from 'react';

const TempContext = createContext();
const Setter = createContext();

export const useSetter = () => {
  return useContext(Setter);
}

export const useTempContext = () => {
  return useContext(TempContext);
}

export const ContextProvider = ({ children }) => {

  const [tempState, setTempState] = useState('inactive')

  return (
    <TempContext.Provider value={tempState}>
      <Setter.Provider value={setTempState}>
        {children}
      </Setter.Provider>
    </TempContext.Provider>
  );
};