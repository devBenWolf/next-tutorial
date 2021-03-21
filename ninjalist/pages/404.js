import Link from "next/link"
import Nav from "react-bootstrap/Nav"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

export default function notFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>Ninja List | 404 Error</title>
            </Head>
            <div>
                <h1>Uh-oh. This isn't the page you're looking for.</h1>
                <Link href = "/" passHref><Nav.Link>Go back to the homepage</Nav.Link></Link>
            </div>
        </>
    )
}
