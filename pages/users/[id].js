export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    const paths = data.map(user=>{
        return {
            params :{id:user.id.toString()}
        }
    })
    return {
        // paths: data.map(user=>`/users/${user.id}`),
        paths,
        fallback: false
    }
}
export const getStaticProps = async(context)=>{
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    return{
        props:{user:data}
    }
}
const Details = ({user}) => {
    return ( 
        <section id="test">
            <h4>Details Page</h4>
            <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
                <p>{user.website}</p>
            </div>
        </section>
     );
}
 
export default Details;