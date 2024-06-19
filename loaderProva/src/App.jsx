import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Login from "../components/Login"
import { loader as loaderFunction }  from "./loaderFunction"

const router= createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} loader={loaderFunction} />
    <Route path="login" element={<Login />} />
  </>
  
))



export default function App() {
  return(
      <RouterProvider router={router} />
  )
}