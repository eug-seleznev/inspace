import axios from "axios"

//interface
export type TUser = {
    name?: string,

  }
  
  export function userStore() {
    // note the use of this which refers to observable instance of the store
    return {
      users: [{
        name: 'hello'
      }] as TUser[],

      makeFriend() {
        return this.users.length
      },

      createUser(name: any) {

        const newUser = {
          name: name
        }
        console.log(newUser, 'user')
        this.users.push(newUser)
      },
      get getGura() {
        if(this.users.every(user => user.name !=='gura')) return 'gura not here!!'
      },

      get Users(){
       return this.users.map((user, index) => {
          return <p key={index}> {user.name}</p>
        })
      },

      get HelloWorld() {
          return (
            <div>
              <h3>hello world oh no</h3>
            </div>
          )
      },
      
    }
  }
  
  export type TStore = ReturnType<typeof userStore>