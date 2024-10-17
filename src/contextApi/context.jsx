import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    console.log('context', loggedInUser )
   
    //Remove the logged-in user from the local storage
    const logOut = () => {
        if (loggedInUser) {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            
            const updatedUsers = existingUsers.filter(user => user.email !== loggedInUser.email);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            
            setLoggedInUser(null);
        }
    };

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser, logOut }}>
            {children}
        </UserContext.Provider>
    );
};
