import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import PostUpload from "./upload";

const RoutePage=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/addphoto' element={<PostUpload/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutePage;