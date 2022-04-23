import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authcontext";


export function Navbar() {
    const { isauth, handleauth } = useContext(AuthContext);
    const [mydata, setdata] = useState();




    return (
        <div>
            <div>login status:{isauth}</div>
            <button onClick={() => {
                getdata()
                async function getdata() {
                    const res = await fetch("https://reqres.in/api/login");
                    const data = await res.json();
                    setdata(data.data[0].name);
                }
                handleauth(isauth);
            }
            }> login </button>
            <h1>{isauth === "false" ? "try to login " :<h>you are logde in:{mydata}</h>}</h1>
        </div>
    );
}