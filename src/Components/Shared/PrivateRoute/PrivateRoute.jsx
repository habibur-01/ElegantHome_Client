import { Navigate } from "react-router-dom";

import {PropTypes} from "prop-types"
import useAuth from "../../../hooks/useAuth";
const PrivateRoute = ({children}) => {
    const {user, loading} =useAuth()

// console.log(user)
    if (loading){
        return (<div className="w-full h-screen flex justify-center items-center">
            <span className="loading loading-ball loading-lg"></span>
        </div>)
    }

    if(user){
        return children
    }
    return (
        <Navigate to="/login" ></Navigate>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;