import Link from 'next/link';
import logo from "@/assets/logo.png"
import Image from 'next/image';


const link = <>
      <li><Link href={"/workOuts"} className="text-white/80 hover:text-white px-4 py-2">Workouts</Link></li>
      <li><Link href={"/myPlan"} className="text-white/80 hover:text-white px-4 py-2">My Plan</Link></li>
</>

const Navbar = () => {
    return (
        <div className="navbar bg-neutral-950 border border-neutral-800 px-6 py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-neutral-900 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <div className='flex items-center gap-2'>
        <Image src={logo} alt='Nav Logo' className="h-6 w-6"/>
    <Link href={'/'} className="font-extrabold text-white px-2 py-0.5 text-sm tracking-wide">FITLOG</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end gap-4 text-white text-sm">
    <div className="flex items-center gap-2">
        <span>Plan</span>
        <span className="bg-lime-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
    </div>
    <div className="flex items-center gap-2">
        <span>Saved</span>
        <span className="border border-neutral-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
    </div>
  </div>
</div>
    );
};

export default Navbar;