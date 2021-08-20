import UserTable from "./UserTable";

const UserList = ({ users }) => {
  return (
    <div className="ui ">
      {users.length !== 0 ? (
        <UserTable users={users} />
      ) : (
        <div className="ui message">
          <div className="header">Sorry No Matches found.</div>
        </div>
      )}
    </div>
  );
};

export default UserList;
