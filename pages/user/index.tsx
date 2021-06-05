import { UserSoreProvider } from "../../stores/user/hook"
import Header from "./Header"



const User = () => {
    return (
        <UserSoreProvider>
            
            <Header />
            <h2> new user</h2>

        </UserSoreProvider>
    )
}

export default User