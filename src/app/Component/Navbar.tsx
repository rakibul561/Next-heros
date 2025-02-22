'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session);
    

    const links = [
        { title: 'About', path: '/about' },
        { title: 'Blogs', path: '/blogs' },
        { title: 'Services', path: '/services' },
        { title: 'Contact', path: '/contact' },
        { title: 'Cetagory', path: '/cetagory' },
        { title: 'Post', path: '/post' },
        { title: 'Meals', path: '/meals' },
        // { title: 'Dashboard', path: '/deashboards' }
    ];

    const Handelar = () =>{
        router.push('api/auth/signin')
    }
   
   
    if(pathName.includes('deashboards'))
      return <div className="bg-red-500 px-6 py-6 text-white">
         Deashboard layout 
      </div>


    return (
        <div>
            <nav className="bg-rose-700 px-6 py-6 flex justify-between items-center text-white">
                <h6 className="text-3xl">Next <span className="text-cyan-400">Hero</span> </h6>
                <ul className="flex justify-between items-center space-x-4">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`${pathName === link.path ? 'text-cyan-400' : ''}`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </ul>
               { session.status === "authenticated" ? <button 
                onClick={Handelar}
                className="bg-white text-cyan-400 p-4">Login</button>
            : 
            <button 
           
            className="bg-white text-cyan-400 p-4">Logout</button>
            }
            </nav>
        </div>
    );
};

export default Navbar;
