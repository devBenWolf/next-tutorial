
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Link from "next/Link"

export default function Navigation() {
    return (
        <div>
            <Navbar className = "bg-primary">
                <Navbar.Brand>
                    <img 
                        src = "/next.png"
                        width = "50"
                    />
                </Navbar.Brand>
                <Link href = "/" passHref><Nav.Link className = "text-light">Home</Nav.Link></Link>
                <Link href = "/about" passHref><Nav.Link className = "text-light">About</Nav.Link></Link>
                <Link href = "/ninjas" passHref><Nav.Link className = "text-light">Ninjas</Nav.Link></Link>
            </Navbar>
        </div>
    )
}
