
import Footer from './Footer'
import Navigation from './Navigation'
import Card from "react-bootstrap/Card"
import styles from "../styles/Layout.module.css"
import Container from "react-bootstrap/Container"

export default function Layout({ children }) {
    return (
        <Container className = "mt-4" fluid>
            <Navigation />
            <Card className = "text-center border-0">
                <Card.Body className = {styles.pageBody}>
                    {children}
                </Card.Body>
            </Card>
            <Footer />
        </Container>
    )
}
