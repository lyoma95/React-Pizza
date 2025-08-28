interface Props {
  plus: () => void;
  minus: () => void;
  reset: () => void;
}

const Buttons = (props: Props) => {
  return (
    <>
      <button onClick={props.plus}>plus</button>
      <button onClick={props.minus}>minus</button>
      <button onClick={props.reset}>reset</button>
    </>
  );
};

export default Buttons;
