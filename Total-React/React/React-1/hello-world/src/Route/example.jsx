import {BrowserRouter, Routes, Route} from  "react-router-dom"
import InstaClone from "../ass_12/postview";
import Landingpage from "../ass_13/landing-page";
// import LoadingExample from "../loading-example/loading-example";
// import Magicaldiv from "../magical-div/magical-div";
// import RouteContent from "./content";


const RouteExample = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landingpage></Landingpage>}></Route>
            <Route path="/InstaClone" element={<InstaClone></InstaClone>}></Route>
            {/* <Route path="/content" element={<LoadingExample></LoadingExample>}></Route> */}
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteExample;