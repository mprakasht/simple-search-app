import { useState } from "react";
import { SearchInput } from "./search";
import Loader from "./userlist/loader";
import UserList from "./userlist/UserList";
const data = require("../userData.json"); //(with path)

const SearchComponent = () => {
  const [userList, setUserList] = useState(data);
  const [show, setShow] = useState(false);
  const onChangeHandler = (e) => {
    setShow(true);
    const newuserList = data.filter((item) => {
      return (
        item._id.includes(e.target.value) ||
        item.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase()) ||
        item.gender
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
    });

    setUserList(newuserList);
    setShow(false);
  };
  return (
    <div className="ui">
      <h1 className="ui header">Search App</h1>
      <SearchInput onChangeHandler={onChangeHandler} />

      {show ? <Loader /> : <UserList users={userList} />}
    </div>
  );
};

export default SearchComponent;
