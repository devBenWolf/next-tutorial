//Must be async to generate dynamic routes. Outside data needed to determine number of routes
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
    return {
        paths,
        fallback: false
    }
}
//id will be attached to a context object.
export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const data = await response.json()

    return {
        props: {ninja: data}
    }
}

export default function Details({ ninja }) {
    return (
    <div>
      <h1>{ ninja.name }</h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
    </div>
    )
}