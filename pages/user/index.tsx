import { useEffect } from "react"
import Auth from "../../components/auth/auth"
import { UserStoreProvider, useUserStore } from "../../stores/user/hook"
import UserCard from "./card"
import CreateUserForrm from "./create/form"

import Header from "./Header"


const User = () => {
    const userStore = useUserStore();
    useEffect(() => {
        
        userStore.GetTemplate();
    }, [])
    return (
     <Auth>
            <Header />
            <UserCard />
            <CreateUserForrm />
     </Auth>
    )
}

export default User