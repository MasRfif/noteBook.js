import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleDeleteUser = (userId) => {
    dispatch({ type: "DELETE_USER", payload: userId });
  };
  const handleEditUser = (userId, newName, newEmail) => {
    dispatch({
      type: "UPDATE_USER",
      payload: { userId, newName, newEmail },
    });
  };
  const handleAddUser = (name, email) => {
    dispatch({ type: "ADD_USER", payload: { name, email } });
  };
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button
              onClick={() =>
                handleEditUser(user.id, "New Name", "new@email.com")
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddUser("John Doe", "john@example.com")}>
        Add User
      </button>
    </div>
  );
};

export default Users;
