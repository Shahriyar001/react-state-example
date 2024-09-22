type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFuncCompnent = ({ count, setCount }: TProps) => {
  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>;
};

export default CounterWithFuncCompnent;
