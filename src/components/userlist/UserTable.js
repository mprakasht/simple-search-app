const UserTable = ({ users }) => {
  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>SL No</th>
          <th>Id</th>
          <th>Name</th>
          <th>Gender</th>
        </tr>
      </thead>
    );
  };
  const renderTbody = (users) => {
    console.log(users);
    return (
      <tbody>
        {users.map((user, i) => {
          const { _id, name, gender } = user;
          return (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td>{_id}</td>
              <td>{name}</td>
              <td>{gender}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };
  return (
    <div className="ui container">
      <table className="ui basic table">
        {renderTableHeader()}
        {renderTbody(users)}
      </table>
    </div>
  );
};

export default UserTable;
