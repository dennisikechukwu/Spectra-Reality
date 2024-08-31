import { Menu, X } from "lucide-react";
import { useState } from "react";


import { navItems } from "../constants/data"
import { Head } from "../assets"
const Navbar = () => {
    const [open, setopen] = useState(false)

   function toggleNavbar() {
    setopen(!open)
   }

  return ( 
   <nav className="fixed w-full z-20 p-6 max-md:p-2 top-0 bg-black border-b border-neutral-700/80 ">
        <div className="container px-4 py-2 mx-auto relative items-center">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={Head} alt="Logo"  className="mr-2 w-[30px] h-[35px]rounded-md" />
                    <span className="text-xl tracking-tight">Spectra Reality</span>
                </div>
                <ul className="hidden md:flex ml-14 space-x-12">
                    {navItems.map((item) => (
                       <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                       </li> 
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center gap-11 items-center px-9 ">
                    <a href="#" className="py-2 px-3 border rounded-md hidden lg:flex w-28 text-center">
                        Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md w-28 text-center">
                        Sign up
                    </a>
                </div>
                <div className="hidden max-md:flex flex-col ">
                    <button onClick={toggleNavbar} className="w-[4rem] h-[4rem]">
                    {open ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {open && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center md:hidden">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.label} className="py-4">
                                <a href={item.href} onClick={toggleNavbar}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md" onClick={toggleNavbar}>Sign In</a>
                        <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800" onClick={toggleNavbar}>Sign up</a>
                    </div>
                </div>
            )}
        </div>
   </nav>
  )
}

export default Navbar