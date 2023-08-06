import Link from "next/link"
import style from "@/styles/User.module.css"
export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if(!res){
    alert('no connection to the userl')
  }else{

    const data = await res.json()
    return{
      props:{
        users:data
      }
    }
  }

}
const index = ({users}) => {
  return (
    <section id="list">
        
        <h3>List of Users</h3>
        {
          users.map((user)=>(
            <div key={user.id} className={style.single}>
              <Link href={'/users/'+user.id} ><h3>{user.name}</h3></Link>
            </div>
          ))
        }
    </section>
  )
}

export default index