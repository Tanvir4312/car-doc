import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";



export const AuthContext = createContext()

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [loader, setLoader] = useState(true)

    const creatUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        users,
        loader,
        creatUser,
        login
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;