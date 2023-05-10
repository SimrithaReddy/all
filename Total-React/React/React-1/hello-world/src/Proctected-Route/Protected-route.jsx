import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ()=>{
    const isAuthenticated = false;
    return(
        <div>
            {isAuthenticated ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>}
        </div>
    )
}
export default ProtectedRoutes;