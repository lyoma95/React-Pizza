interface Props {
  counter: number;
}
function Number(props: Props) {
  return <div>{props.counter}</div>;
}

export default Number;
