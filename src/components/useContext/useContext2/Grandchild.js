import { useContext } from 'react'
import { ShapeContext, ChangeShape } from "./Parent";
import { useSetter, useTempContext } from '../ContextProviderTemplate'

const Grandchild = () => {

  // const shape = useContext(ShapeContext);
  // const setShape = useContext(ChangeShape)
  const setTemp = useSetter();
  const tempContext = useTempContext();

  return (
    <h2
      onClick={() => { console.log('shoud be:', tempContext) }}>
      Hi again! Here is my second context!: hold plz
    </h2>
  );
}

export default Grandchild;