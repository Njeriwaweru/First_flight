import { USERS } from "../../data/Users";
import List from "../list/List";
import "./UserList.css";

const UserList = () => {
  return (
    <div className="userList">
      <List title="User List" items={USERS}>
        {(user) => (
          <div className="userCard">
            <img src={user.avatar} alt={user.name} />
            <div className="userInfo">
              <div>Name: {user.name}</div>
              <div>Role: {user.role}</div>
              <div>Email: {user.email}</div>
            </div>
          </div>
        )}
      </List>
    </div>
  );
};

export default UserList;
