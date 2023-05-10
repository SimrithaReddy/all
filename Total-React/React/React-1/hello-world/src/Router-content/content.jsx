import { Link } from "react-router-dom";

const Content = ()=>{
    const list = [{key:"Loading Example", path:"/loading"}, {key:"Magical Div", path:"/magicaldiv"},
    {key:"Counter-Class", path:"/counter-class"},{key:"Div", path:"/m"},
    {key:"Sign-up", path:"/signup"}, {key:"Sign-in", path:"/signin"}];

    return(
        <div>
            {list.map((ele,i)=>{
                return(
                    <li key={i}>
                    <Link to={ele.path}>{ele.key}</Link>
                </li>
                )
            })}
        </div>
    )
}

export default Content;