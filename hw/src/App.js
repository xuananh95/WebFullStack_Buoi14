import "./App.css";
import UserForm from "./components/UserForm";
import { Divider } from "antd";
import { useState } from "react";
import ManagerUser from "./components/ManagerUser";

function App() {
    const [users, setUsers] = useState([]);
    return (
        <div className="App">
            <UserForm users={users} setUsers={setUsers} />
            <Divider />
            <ManagerUser users={users} setUsers={setUsers} />
        </div>
    );
}

export default App;
