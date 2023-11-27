import React,{useEffect, useState,useContext} from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";


const Dashboard = () => {
    const [joke, setJoke] = useState("")
    const [name, setName] = useState("")
    const {token, setToken} = useContext(UserContext)

    useEffect(() => {
        getZuku()
    },[])

    function getZuku(){
          axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
              headers:{
                  Authorization: `Bearer ${token}`
              }
          })
          .then(response => {
            setJoke(response.data.data.message)
            setName(response.data.data.user.name)
        })
        .catch(error => console.log(error.response.data.message))
    }



    return(
        <div>
              <h1> Welcome {name} </h1>
              {
                joke && <p>{joke}</p>
              }
              

        </div>
    )
}

export default Dashboard;