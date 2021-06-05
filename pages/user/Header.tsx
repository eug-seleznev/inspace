import { useStore } from "../../stores/user/hook"




const Header = () => {
    const store = useStore();
    return (
        <div>
        {store.HelloWorld}
        </div>
    )
}


export default Header