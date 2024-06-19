import { Link, useSearchParams } from "react-router-dom"
export default function Login(){
    const [searchParams, setSearchParams] = useSearchParams();
    const message = searchParams.get("message");
    return (
    <>
    <h1>Login Page</h1>
    <h2>{message}</h2>
    <Link to="/">home</Link>
    </>
    )
}