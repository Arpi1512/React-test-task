import Nav from "../default/navbar/Nav";
import { Link } from "react-router-dom"


export default function AuthLayout({children}) {
    return (
        <div>
            <ul >
                <li ><Link to="/login" > Login	</Link> </li>
            </ul>
            <div>
                <Nav/>
                {children}
            </div>
        </div>
    )
}

