import Grandchild from './Grandchild';

// This is a nested child component. This proves that with useContext, prop drilling is unnecessary
const Child = (/* the context is not passed down in props */) => {
  return (
    <Grandchild /* No props are giving to the grandchild component*/ />
  );
}

export default Child;