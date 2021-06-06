import { UserSoreProvider } from "../../stores/user/hook"
import UserCard from "./card"
import CreateUserForrm from "./create/form"
import Header from "./Header"



const User = () => {
    return (
        <UserSoreProvider>
            <Header />
            <UserCard />
            <CreateUserForrm />
        </UserSoreProvider>
    )
}

export default User