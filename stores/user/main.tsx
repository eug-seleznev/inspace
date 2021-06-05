import axios from "axios"

//interface
export type TUser = {
    name: string,
    getGura: any,
    HelloWorld: any
  }
  
  export function userStore() {
    // note the use of this which refers to observable instance of the store
    return {
      friends: [] as TUser[],
      makeFriend(name: any) {
           this.friends[0] = name
      },
      get getGura() {
        if(this.friends.some(friend => friend.name =='gura')) return 'gura here!!'
      },

      get HelloWorld() {
          return (
            <div>
              <h3>hello world oh no</h3>
            </div>
          )
      },

     async fetchData() {
       
     }
    }
  }
  
  export type TStore = ReturnType<typeof userStore>