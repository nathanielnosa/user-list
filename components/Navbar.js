import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h3>Users</h3>
            </div>
            <div>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/users"}>Users</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;