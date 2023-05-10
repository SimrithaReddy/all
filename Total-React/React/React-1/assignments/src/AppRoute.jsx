import { BrowserRouter, Routes, Route } from "react-router-dom"
import InstaClone from "./ass_12/postview";
import Landingpage from "./ass_13/landing-page";

const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landingpage/>}/>
                    <Route path="/InstaClone" element={<InstaClone/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default AppRoute;

/**
 * To use React Router dom 
 * we need to import BrowserRoute, Routes and Route from react-dom
 */