import { useState } from "react";

const UserInfoWithUserState = () => {
  const [user, setUser] = useState({ name: "", age: "0", hobbies: [] });
  console.log(user);
  return (
    <form className="gap-2">
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="border border-primary m-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        className="border border-primary m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      {/* <input
        className="border border-primary m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      /> */}
      <input
        onBlur={(e) =>
          setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        }
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

export default UserInfoWithUserState;
