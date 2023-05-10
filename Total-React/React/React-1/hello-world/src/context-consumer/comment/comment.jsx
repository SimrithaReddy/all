import EditComment from "./edit-comment";
import DeleteComment from "./delete-comment";
import { ThemeContext } from "../../context/notification-provider";
import { useContext } from "react";

const Comment = ()=>{
    const {theme} = useContext(ThemeContext);
    return(
        <div>
            I am Comment(Parent Comment)
            <EditComment theme1={theme}></EditComment>
            <DeleteComment theme1={theme}></DeleteComment>
            
        </div>
    )
}
export default Comment;