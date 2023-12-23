import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";

const PriveRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>

};

export default PriveRoute;