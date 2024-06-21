import {useState} from "react"
import { redirect, Form } from "react-router-dom";

export async function loginAction({ request }){
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    console.log({password, username})
    if(username === "aaa" && password ==="aaa"){
        return redirect("page1");
    }else {return null;}
}

export default function LoginForm(){


    return(
    <>
        <Form method="post">
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Login</button>

        </Form>
    </>
    )
}