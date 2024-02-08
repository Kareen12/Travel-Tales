import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"



const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
  const {user}=useContext(UserContext)

    
    
  return (
    <>
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 fixed top-0 w-full z-50 bg-transparent backdrop-filter backdrop-blur-md">
    <h1 className="text-lg md:text-xl font-extrabold bg-lime-200 p-3 rounded-full max-[640px]:text-[10px]
     max-[820px]:text-center"><Link to="/">Travel Tales</Link></h1>
    {path==="/" && <div className="flex justify-center items-center space-x-0">
   
    <input onChange={(e)=>setPrompt(e.target.value)}  onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(prompt?"?search="+prompt:navigate("/"))
        }
      }} className="outline-none px-3 bg-transparent text-white" placeholder="Search a post" type="text"/>
    <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer text-lime-300"><BsSearch/></p>
    </div>}
    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
      {user? <h3 className="bg-lime-200 p-3 rounded-full hover:bg-transparent hover:text-lime-500 font-semibold  max-[820px]:text-center"><Link to="/write">Create Post</Link></h3> :<h3 className="bg-lime-200 p-3 rounded-full hover:bg-transparent hover:text-lime-500"><Link to="/login">Login</Link></h3>}
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative text-lime-500"><FaBars/></p>
        {menu && <Menu/>}
      </div>:<h3 className="bg-lime-200 p-3 rounded-full hover:bg-transparent hover:text-lime-500"><Link to="/register">Register</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative text-gray-50"><FaBars/></p>
      {menu && <Menu/>}
    </div>

    </div>
    </>
  )
}

export default Navbar 
