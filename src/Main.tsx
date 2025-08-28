import { useState } from 'react';
import Buttons from './Buttons';
import Number from './Number';

function Main() {
  const [counter, setCounter] = useState(0);

  function plus() {
    setCounter(counter + 1);
  }
  function minus() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }

  return (
    <>
      <div>
        <Number counter={counter} />
        <Buttons plus={plus} minus={minus} reset={reset} />
      </div>
    </>
  );
}

export default Main;
