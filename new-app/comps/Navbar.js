import Link from "next/link";
import Image from "next/image";
export default function Navbar(){


    return(
     <nav>
        <div className="logo">
            <Image src="/Friends.jpeg" width={200} height={80} alt="logo"/>
            </div>
            <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/friends/">Friends listing</Link>
        </div>
     </nav>
    );
}