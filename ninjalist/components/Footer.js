
import Card from "react-bootstrap/Card";

export default function Footer() {
    return (
        <div>
            <Card.Footer className = "text-center border-0 bg-primary text-light">Copyright {new Date().getFullYear()}</Card.Footer>
        </div>
    )
}
