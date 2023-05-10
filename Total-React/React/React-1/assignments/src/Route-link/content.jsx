import { Link } from "react-router-dom";

const Content = () => {
    const list = [{ key: "MainPage", path: "/" }, { key: "InstaPage", path: "/InstaClone" },
     {key: "ToDo", path:"/Todo"},{key: "ClassAssignment11", path:"/AppClassAssignment"}, 
      {key:"ASs2", path:"/Ass2"}, {key:"ASs3", path:"/Ass3"},
      {key:"ASs4", path:"/Ass4"}, {key:"ASs5", path:"/Ass5"}, {key:"ASs7", path:"/Ass7"},
      {key:"ASs8", path:"/Ass8"}, {key:"ASs10", path:"/Ass10"},
      {key:"ASs13", path:"/Ass13"}]
    return (
        <>
            {list.map((ele, i) => {
                return (
                    <li key={i}>
                        <Link to={ele.path}>{ele.key}</Link>
                    </li>
                )
            })}

        </>
    )
}
export default Content;