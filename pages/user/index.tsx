import { useEffect } from "react"
import { UserSoreProvider } from "../../stores/user/hook"
import UserCard from "./card"
import CreateUserForrm from "./create/form"
import Header from "./Header"



const User = () => {
    useEffect(() => {
        
    }, [])
    return (
        <UserSoreProvider>
            <Header />
            <UserCard />
            <CreateUserForrm />
        </UserSoreProvider>
    )
}

export default User