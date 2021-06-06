import { observer } from "mobx-react";
import { useStore } from "../../../stores/user/hook"





const UserCard = observer(() => {
    const store = useStore();
    return (
        <div>
            {store.Users}
        </div>
    )
})

export default UserCard