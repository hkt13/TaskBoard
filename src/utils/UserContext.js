import { createContext } from "react";

const UserContext = createContext({
    showCreateTask: false,
    showEditTask: false,
    tasks:[]
})

export default UserContext;