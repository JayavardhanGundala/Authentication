
import { BrowserRouter as Router,Route,Routes,Navigate } from "react-router-dom"
import NavBar from "./components/navBar"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

function App() {
  const [user,setUser]=useState(null)
  const [error,setError]=useState(" ")

  useEffect(()=>{
    const fetchUser=async ()=>{
      const token=localStorage.getItem("token")
      if(token){
        try{
          const res=await axios.get("/api/user/me",{
            headers:{Authorization:`Bearer ${token}`},
          })
          setUser(res.data)

        }
        catch(error){
          setError(`Failed to fetch user data${error}`)
          localStorage.removeItem("token")

        }
      }
    }
    fetchUser()

  },[])


  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
