import { BrowserRouter, Routes, Route } from "react-router-dom"
// import NotFound from "../404/404-notfound";
import LoginForm from "../authentication/sign-in";
import RegistrationForm from "../authentication/sign-up";
import { CounterClass } from "../class-comonent/counter-class";
import LoadingExample from "../loading-example/loading-example";
import LoginPage from "../Login/Login";
import Magicaldiv from "../magical-div/magical-div";
import OrderPage from "../Order/Order";
import ProtectedRoutes from "../Proctected-Route/Protected-route";
import Content from "./content";

const RouteAppContent = ()=>{
    return(
    
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Content></Content>}/>
            <Route path="/magicaldiv" element={<Magicaldiv></Magicaldiv>}/>
            <Route path="/loading" element={<LoadingExample></LoadingExample>}/>
            <Route path="/loing" element={<LoadingExample></LoadingExample>}/>
            <Route path="/counter-class" element={<CounterClass/>}/>
            <Route path="/*" element={<div>I am Not Found</div>}/>
            <Route path="/login" element={<LoginPage></LoginPage>}/>
            <Route path="/signup" element={<RegistrationForm></RegistrationForm>}/>
            <Route path="/signin" element={<LoginForm></LoginForm>}/>
            <Route element={<ProtectedRoutes></ProtectedRoutes>}>
                <Route path="/Order" element={<OrderPage></OrderPage>}/>
                <Route path="/Account" element={<div>I am Account Page</div>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default RouteAppContent;