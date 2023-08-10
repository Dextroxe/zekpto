import { Link } from "react-router-dom";




const Navbar = () => {

    const element = 'font-semibold p-2 cursor-pointer underline underline-offset-4 decoration-1 transition   ease-in-out hover:-translate-y-1  hover:decoration-wavy hover:decoration-1 hover:text-sky-200 hover:shadow'

    const items_ = ["About","Buy Now"]

    return ( 
        <>
        <div className="flex  flex-row justify-between text-white justify-items-center  border-b-4 border-zinc-950 shadow-2xl pb-4">
            <h1 className="flex justify-center cursor-pointer items-center w-10 h-10"><Link to={`/`}><img src="/logo.png" alt="logo"/></Link></h1>
            <div className="flex flew-row gap-2">
            <p  className={element} ><Link to={`/`}>Home</Link></p>
            {items_.map((ele) => {
                return(
                    <p key={ele} className={element} ><Link to={`/${ele.toLowerCase().split(" ").join("")}`}>{ele}</Link></p>
                  
                
                )
            })}
            <div className="border-0 rounded-full p-2 px-10  cursor-pointer  bg-gray-800 text-[#2593f3]">
                <h2>Connect Wallet</h2>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;