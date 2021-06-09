import axios from "axios"
import { User } from "../../../shared/types"
import { innerBackend } from "../../components/auth/helper"
import {LoginData} from '../../interfaces/auth'




  export function userStore() {
    // note the use of this which refers to observable instance of the store
    return {
      user: {
        firstname: '',
        lastname: '',
        fullname: '',
        username: '',
        email: '',
        phone: '',
        password: ''
      } as User,
      test: '',


      async registerUser(id: string) {

      },

      async Login(LoginData:LoginData){

      },

      async Auth(token: string) {

      },
     async Test(){
   
        try {
          console.log('start')
          const res = await innerBackend.get('/')
          return this.test = res.data
        } catch (err) {
          return 'lol'
        }
        
        
        
      
      },

      get User () {
        return this.user
      },

      get HelloWorld (){
        return <p> {this.test}</p>
      }

    }
  }
  
  export type TUserStore = ReturnType<typeof userStore>