import { useState } from "react";
import CounterWithClass from "./Components/CounterWithClassComponent";
import CounterWithFuncCompnent from "./Components/CounterWithFuncCompnent";
import UserInfoWithUserState from "./Components/userInfoWithUserState";
import UserInfoWithUseReducer from "./Components/UserInfoWithUseReducer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CounterWithClass />
      <CounterWithFuncCompnent count={count} setCount={setCount} />
      <UserInfoWithUseReducer />
    </>
  );
}

export default App;
