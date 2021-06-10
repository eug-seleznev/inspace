
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import {useUserStore} from '../stores/user/hook'



const Test = observer(()  => {
    const store = useUserStore();

    useEffect(() => {
        store.Test();
        // store.Login();
    }, [])

    
    return (
        <div>
            {store.HelloWorld}
        </div>
    )
})


export default Test