const UserInfoWithUserState = () => {
  return (
    <form>
      <input
        className="border border-primary"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        className="border border-primary"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        className="border border-primary"
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
