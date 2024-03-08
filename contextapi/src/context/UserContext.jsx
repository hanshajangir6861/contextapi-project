import React  from "react";
import UserContext from "./UserContext";

const  UserContextProvider = ({childrn})=>{
const [user , setUser] = React.useState(null)


return(


    <UserContextProvider value={{user, setUser}}>
{childrn}


    </UserContextProvider>
)


}