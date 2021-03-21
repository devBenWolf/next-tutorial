import { ListGroup, Nav } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Link from "next/link"


export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data     = await response.json()

    //Create props object for export to function for rendering.
    return {
        props: { ninjas: data }
        
    }
    
}
export default function ninjasList({ ninjas }) {
    return (
        <Container fluid>
            <h1 className = "text-left ml-4">All Ninjas</h1>
            <ListGroup className = "border-0">
            {ninjas.map(ninja => (
                <Link href = {"/ninjas/" + ninja.id} key = {ninja.id} passHref>
                    <Nav.Link>
                        <ListGroup.Item className = "amber-list h5 text-left mt-1" action variant = "primary" >
                            {ninja.name}
                        </ListGroup.Item> 
                    </Nav.Link>
                </Link>    
            ))}
            </ListGroup>
        </Container>
    )

}
