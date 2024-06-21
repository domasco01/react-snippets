import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Form, { loginAction } from "../components/Form"
import Page1 from "../components/Page1"

const router= createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Form />} action={loginAction}/>
    <Route path="page1" element={<Page1 />} />
    
  </>
  
))



export default function App() {
  return(
      <RouterProvider router={router} />
  )
}