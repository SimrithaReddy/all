import { BrowserRouter, Routes, Route } from "react-router-dom";

import InstaClone from "../postview/postview";
import PostUpload from "../postview/uploadpost";
import Landingpage from "../landingpage/landing-page";


const RoutePage = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landingpage></Landingpage>}></Route>
            <Route path="/uploads" element={<PostUpload></PostUpload>}></Route>
            <Route path="/instaclone" element={<InstaClone></InstaClone>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RoutePage;

//await mongoose.connect('mongodb+srv://Simritha_Reddy_k04:simritha123@cluster0.ppxra6j.mongodb.net/?retryWrites=true&w=majority');