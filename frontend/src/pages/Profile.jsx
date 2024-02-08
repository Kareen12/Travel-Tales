import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProfilePosts from "../components/ProfilePosts"
import axios from "axios"
import { IF, URL } from "../url"
import { UserContext } from "../context/UserContext"
import { useNavigate, useParams } from "react-router-dom"
import { Link, useLocation } from "react-router-dom"
import Loader from '../components/Loader'


const Profile = () => {
  const param=useParams().id
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {user,setUser}=useContext(UserContext)
  const navigate=useNavigate()
  const [posts,setPosts]=useState([])
  const [updated,setUpdated]=useState(false)
  // console.log(user)

  const {search}=useLocation()
  // console.log(search)
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  // console.log(user)

  // const fetchPosts=async()=>{
  //   setLoader(true)
  //   try{
  //     const res=await axios.get(URL+"/api/posts/user/"+user._id)
  //     // console.log(res.data)
  //     setPosts(res.data)
  //     if(res.data.length===0){
  //       setNoResults(true)
  //     }
  //     else{
  //       setNoResults(false)
  //     }
  //     setLoader(false)
      
  //   }
  //   catch(err){
  //     console.log(err)
  //     setLoader(true)
  //   }
  // }

  // useEffect(()=>{
  //   fetchPosts()

  // },[search])


const fetchProfile=async ()=>{
  try{
     const res=await axios.get(URL+"/api/users/"+user._id)
     setUsername(res.data.username)
     setEmail(res.data.email)
     setPassword(res.data.password)
  }
  catch(err){
     console.log(err)
  }
}

const handleUserUpdate=async ()=>{
  setUpdated(false)
  try{
    const res=await axios.put(URL+"/api/users/"+user._id,{username,email,password},{withCredentials:true})
    // console.log(res.data)
    setUpdated(true)

  }
  catch(err){
    console.log(err)
    setUpdated(false)
  }

}

const handleUserDelete=async()=>{
  try{
    const res=await axios.delete(URL+"/api/users/"+user._id,{withCredentials:true})
    setUser(null)
    navigate("/")
    // console.log(res.data)

  }
  catch(err){
    console.log(err)
  }
}
// console.log(user)
const fetchUserPosts=async ()=>{
  try{
    const res=await axios.get(URL+"/api/posts/user/"+user._id)
    // console.log(res.data)
    setPosts(res.data)


  }
  catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  fetchProfile()

},[param])

useEffect(()=>{
  fetchUserPosts()

},[param])



  return (
    <div>
      <Navbar/>
      <div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start 
      ">
        <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0 max-[640px]:flex max-[640px]:items-center
       ">
          <h1 className="text-xl font-bold mb-4 pt-16">Your posts:</h1>
          {/* {posts?.map((p)=>(
            <ProfilePosts key={p._id} p={p}/>
          ))} */}

          {loader?<div className="h-[40vh] flex justify-center items-center "><Loader/></div>:!noResults?
        posts.map((p)=>(
          <>
          <Link to={user?`/posts/post/${p._id}`:"/login"}>
          <ProfilePosts key={p._id} p={p}/>
          </Link>
          </>
          
        )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
        </div>

        <div className="md:sticky md:top-12  flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end 
         ">
        <div className=" flex flex-col space-y-4 items-start max-[640px]:flex max-[640px]:items-center max-[640px]:w-full">
        <h1 className="text-xl font-bold mb-4 pt-16">Your Profile</h1>
          <input onChange={(e)=>setUsername(e.target.value)} value={username} className="outline px-4 py-2 text-gray-500" placeholder="Your username" type="text"/>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className="outline px-4 py-2 text-gray-500" placeholder="Your email" type="email"/>
          {/* <input onChange={(e)=>setPassword(e.target.value)} value={password} className="outline-none px-4 py-2 text-gray-500" placeholder="Your password" type="password"/> */}
          <div className="flex items-center space-x-4 mt-8">
            <button onClick={handleUserUpdate} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-lime-200 rounded-md">Update</button>
            <button onClick={handleUserDelete} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-lime-200 rounded-md">Delete</button>
          </div>
          {updated && <h3 className="text-green-500 text-sm text-center mt-4">User Updated Successfully!</h3>}
        </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile