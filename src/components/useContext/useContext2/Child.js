import Grandchild from './Grandchild'
import { useSetter, useTempContext } from '../ContextProviderTemplate'

const Child = () => {
  const temp = useTempContext();
  const setter = useSetter();

  return (
    <>
      <h2 onClick={() => { setter('active') }}>This is the child: {temp}</h2>
      <Grandchild />
    </>
  );
}

export default Child;