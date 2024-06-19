import { Link, useLoaderData } from "react-router-dom"
export default function About(){
    const data =useLoaderData();
    return( 
    <>
        <h1>{data}</h1>
        <Link to="/">home</Link>
    </>
    )
}