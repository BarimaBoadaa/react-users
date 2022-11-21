import logo from "./logo.svg";
import { v4 as uuid } from "uuid";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Users from "./Components/Users";
import Userform from "./Components/Userform";

function App() {
  const [users, setUsers] = useState([
    { name: "Peter", email: "pet@gmail.com", gen: "22", id: uuid() },
    { name: "Sam", email: "sam@gmail.com", gen: "22", id: uuid() },
    { name: "Jane", email: "jane@gmail.com", gen: "23", id: uuid() },
  ]);
  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div className="container">
      <div className="row">
        <Userform addUser={addUser} />
        <div className="col-md-6">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
