import { useState } from "react";
import CounterWithClass from "./Components/CounterWithClassComponent";
import CounterWithFuncCompnent from "./Components/CounterWithFuncCompnent";
import UserInfoWithUserState from "./Components/userInfoWithUserState";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CounterWithClass />
      <CounterWithFuncCompnent count={count} setCount={setCount} />
      <UserInfoWithUserState />
    </>
  );
}

export default App;
