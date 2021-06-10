import { observer } from "mobx-react";
import { useUserStore } from "../../stores/user/hook";




const Header = observer(() => {
    const store = useUserStore();
    return (
        <div>
        <p>header</p>
        </div>
    )
})


export default Header