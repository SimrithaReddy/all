import { NotificationContext } from "../../context/notification-provider";
import { useContext } from "react";

const Chat = ()=>{
    const {notification, count} = useContext(NotificationContext)
    return(
        <div>
            I am Chat Component {count}

        </div>
    )
}
export default Chat;