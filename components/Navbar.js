import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <img src="/flightlogo.png" /> */}
                {/* using image component */}
                <Image src={'/flightlogo.png'} width={250} height={100}/>
            </div>
            <div className="links">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/users"}>Users</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;
