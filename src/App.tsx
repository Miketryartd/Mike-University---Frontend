import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function App(){
   
  const nav = useNavigate();
  useEffect(() => {
    nav('/Home');
  })
  return (
    <>
    <h1>Redirecting...</h1>
    </>
  )
}