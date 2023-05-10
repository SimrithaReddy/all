import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppAssignment10 from "../ass_10/APPas";
import AppClassAssignment from "../ass_11/ass11";
import InstaClone from "../ass_12/postview";
import ASs2 from "../ass_2/ass_2";
import Para from "../ass_3/project";
import App from "../ass_4/ass_4";
import AppWelcome from "../ass_5/App";
import App7 from "../ass_7/App";
import FormValidationASsignment8 from "../ass_8/ass_8(form Validation)";
import Assignment9 from "../ass_9/To-do-list";
import Landingpage from "../ass_13/landing-page";
import Content from "../Route-link/content";

export const RouteApp = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Content/>}/>
            <Route path="/InstaClone" element={<InstaClone/>}/>
            <Route path="/Todo" element={<Assignment9/>}/>
            <Route path="/Ass2" element={<ASs2></ASs2>}></Route>
            <Route path="/Ass3" element={<Para></Para>}></Route>
            <Route path="/Ass4" element={<App></App>}></Route>
            <Route path="/Ass5" element={<AppWelcome></AppWelcome>}></Route>
            <Route path="/Ass7" element={<App7></App7>}></Route>
            <Route path="/Ass8" element={<FormValidationASsignment8></FormValidationASsignment8>}></Route>
            <Route path="/Ass10" element={<AppAssignment10></AppAssignment10>}></Route>
            <Route path="/Ass13" element={<Landingpage></Landingpage>}></Route>
            <Route path="/AppClassAssignment" element={<AppClassAssignment/>}/>
        </Routes>
        </BrowserRouter>
    )
}