import { observer } from "mobx-react";
import { useUserStore } from "../../../stores/user/hook";





const UserCard = observer(() => {
    const store = useUserStore();
    return (
        <div>
            <p>{store.GetTemplateData.title}</p>
        </div>
    )
})

export default UserCard