import { redirect } from "react-router-dom"
export async function loader(){
    const isLogged=false;

    if (!isLogged){
        throw redirect("/login?message=You must log in first")
    }
    return null
}