import { NotificationContext } from "../../context/notification-provider";
import { useContext } from "react";


const DeleteComment = (props)=>{
    const {notification, count} = useContext(NotificationContext)
    return(
        <div>
            I am Delete Comment
            <div>*{notification}*{count}</div>
        </div>

    )
}
export default DeleteComment;

