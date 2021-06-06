import { observer } from "mobx-react";
import { useState } from "react"
import { useStore } from "../../../stores/user/hook"



interface IUserForm  { 
    name: string,

}


const CreateUserForrm = observer(() => {
    const [formData, setFormData] = useState<IUserForm>()
    const store = useStore();
    const onSubmit = (e: any) => {
        e.preventDefault();
        //store call
        store.createUser(formData)
        console.log(store.makeFriend(), 'hey')


    }
   
    return (
        <form onSubmit={onSubmit}>
            <input type='text' id='name' onChange={(e) => setFormData(e.target.value)} />
        </form>
    )
})


export default CreateUserForrm