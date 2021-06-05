import { observer } from 'mobx-react'
import React, { FormEvent, FormEventHandler, useState } from 'react'
import { useStore } from '../hooks/Context'

 const FriendsMaker = observer(() => {
  const store = useStore()

  const [formData, setFormData] = useState({
      name: ''
  })
  const onSubmit = (e: any) => {
    e.preventDefault();
    store.makeFriend(formData.name, true, false)
  }

  return (
    <form onSubmit={onSubmit}>
      Total friends: {store.friends.length}
      <input type="text" id="name" onChange={(e) => setFormData({name: e.target.value})} />
      <input type="checkbox" id="favorite" />
      <input type="checkbox" id="single" />
    </form>
  )
})



export default FriendsMaker