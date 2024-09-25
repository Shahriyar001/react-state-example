import { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  hobbies: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: "Programing hero" };
    default:
      break;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <form className="gap-2">
      <input
        onChange={() => dispatch({ type: "addName" })}
        className="border border-primary m-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        className="border border-primary m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />

      <input
        className="border border-primary m-10"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default UserInfoWithUseReducer;
