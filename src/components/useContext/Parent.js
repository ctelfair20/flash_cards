// *** working with useContext ***
// import createContext into the component that will hold the context (Parent)
import { createContext, useState } from 'react';
import Child from './Child';

// *** context object ***
// export const context = {
//   theme1: 'dark',
//   theme2: 'light',
// }

// Provide createContext with a plain obj like the one above to give the context its initial values
// Make sure to export your context to be use in the component that requires it (Grandchild)
export const TestContext = createContext(/* plain obj like context on line 7 */);
export const ToggleContext = createContext();

const Parent = () => {
  // State to be give to Context.Provider's value prop to give the context its initial value
  const [theme, setTheme] = useState(true);

  // use a function to update the state to tigger re-rendering
  const toggleContextClick = () => {
    setTheme(preTheme => !preTheme);
  }

  return (
    // wrap all the components that require the context in context.provider. Don't forget about the value prop!!
    <TestContext.Provider value={theme /* Whatever is provided here is what needs to change in order to trigger re-rendering */}>
      {/* You can wrap components in multiple providers */}
      <ToggleContext.Provider value={toggleContextClick}>
        {/* The Child component and all its children will have access to the context it is wrapped in */}
        <Child />
      </ToggleContext.Provider>
    </TestContext.Provider>
  );
}

export default Parent;