import { createContext, useEffect, useState } from "react";
import {PropTypes} from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [ user,  setUser ] = useState(null)

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UserSignOut = ( ) => {
        return signOut()
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            
        })
        return(()=>{
            unSubscribe()
        })
    },[])
    
    const authInfo = {
        user,
        CreateUser,
        LoginUser,
        UserSignOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
