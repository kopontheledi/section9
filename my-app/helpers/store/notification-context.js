import { createContext } from "react"

const NotificationContext = createContext({
    notication: null, //{title, message, status}
    showNotification: function() {},
    hideNotification: function() {}
});

export function NotificationContextProvider(props) {
    return (
        <NotificationContext.Provider>
            {this.props.children}
        </NotificationContext.Provider>
)}

export default NotificationContext;
 
