import { observer } from "mobx-react";
import { useStore } from "../../stores/user/hook"




const Header = observer(() => {
    const store = useStore();
    return (
        <div>
        {store.HelloWorld}
        <p> {store.getGura} </p>
        </div>
    )
})


export default Header