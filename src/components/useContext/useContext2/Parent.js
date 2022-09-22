import { createContext, useState } from 'react'
import { ContextProvider } from '../ContextProviderTemplate'
import Child from './Child'

export const ShapeContext = createContext();
export const ChangeShape = createContext();

const Parent = () => {

  const [shape, setShape] = useState('circle');

  return (
    // <ShapeContext.Provider value={shape}>
    //   <ChangeShape.Provider value={setShape}>
    <ContextProvider>
      <Child />
    </ContextProvider>
    //   </ChangeShape.Provider>
    // </ShapeContext.Provider>
  );
}

export default Parent;