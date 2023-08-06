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
const Details = () => {
    return ( 
        <section id="test">
            <h4>Details Page</h4>
            <div>
                
            </div>
        </section>
     );
}
 
export default Details;