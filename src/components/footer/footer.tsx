import { Link } from "react-router-dom";

const Footer = () => {

    const text ='text-white text-md'
    return (
        <>
            <div className="w-full h-10 flex items-center justify-center mt-10" >
                
                        <div className="flex w-full justify-around flex-row items-center">
                            <p className={text}>Trademark Policy</p>
                            <p className={text}>Copyright © 2023 Zakpto Labs Inc.</p>
                           <Link to={'https://github.com/Dextroxe'}>
                           <p className={`${text} cursor-pointer`}>GitHub</p>
                           </Link>
                            
                        </div>
                        
               
            </div>
        </>
    );
}

export default Footer;