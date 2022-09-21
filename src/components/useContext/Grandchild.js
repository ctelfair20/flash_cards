import { useContext } from 'react';
// Don't forget to import you context from where it was created
import { TestContext, ToggleContext } from './Parent';

const Grandchild = () => {
  // These are context  created in the Parent component. They were imported NOT passed as props
  // When 'theme' is changed, this component will re-render
  const theme = useContext(TestContext);
  // This context is a function use to change 'theme' also NOT passed in props
  const toggle = useContext(ToggleContext);

  const handleClick = () => {
    toggle();
  }
  return (
    <h1 onClick={handleClick}>hi is this my context: {theme.toString()/*Values like [true, false, undefined and null] need to be converted to strings inorder to be see on your webpage */}</h1>
  );
}

export default Grandchild;