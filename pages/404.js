import Link from "next/link";
import style from "@/styles/Home.module.css"
const PageNotFound = () => {
    return ( 
        <section id="404">
            <h1>404: Page Not Found</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque fuga similique tempore blanditiis tempora, commodi soluta eius maiores reprehenderit voluptatum iusto unde fugiat voluptatem officia obcaecati laudantium perspiciatis! Sunt, eligendi.</p>

            <Link href={'/'} className={style.btn}>Go Back home</Link>
        </section>
     );
}
 
export default PageNotFound;