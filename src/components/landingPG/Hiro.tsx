import ImgPrint from "../useable/ImgPrint";
import { FiCopy } from "react-icons/fi";
import { useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Themes } from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/light.css';
// import BuyNow from "../howtobuy/BuyNow";
import HowToBuy from "../howtobuy/HowToBuy";



const Hiro = () => {
    const handleToast = (theme) => {
        toast('Copied to clipboard', {
            theme,
            position: 'top-center',
        });
    };

    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef(null);
    const body = useRef(null);
    const word = useRef(null);
    const leftHiro = useRef(null);
    const rightHiro = useRef(null);

    const data: string = '0x89a081999249407C1153e135A2Af7d323419A66A'

    useLayoutEffect(() => {


        const ctx = gsap.context(() => {


            tl.current = gsap.timeline().from(leftHiro.current, { translateX: '40', opacity: '0', delay: 0.2 })
            tl.current = gsap.timeline().from(rightHiro.current, { translateY: '-40', opacity: '0', delay: 0.5 })
            tl.current = gsap.timeline().from(word.current, { opacity: '0', delay: 1 })

        }, body);

        return () => ctx.revert();

    }, []);



    return (
        <>
            <div ref={body} className="flex justify-center items-center flex-col select-none">
                <div className="flex flex-row justify-between py-20">
                    <div className="flex flex-1 justify-center items-start flex-col gap-8">
                        <h1 className="text-white text-left text-5xl">The World's Fastest Growing <br /> <span ref={word} className="text-[#269afe]">Zekpto Token</span> Protocol</h1>
                        <div ref={leftHiro}>
                            <p className="text-white text-left"><span className="text-[#269afe]">Zekpto Token</span> is a best decentralized application platform designed to make apps usable on the web.</p>
                            <p className="text-white text-left">The network runs on a Proof-of-Stake (POS) consensus mechanism called Nightsade, which aims to offer scalability and stable fees.</p>
                            <p className="text-white text-left leading-loose" ><span className="text-[#269afe]">ZekptoUSD</span> is the native utility token that is used for:<br />
                                Fees for processing transaction and storing data <br />
                                Running validator nodes on the network via staking <span className="text-[#269afe]">Zekpto token</span><br />
                                Used for governance votes to determine how network resources are allocated
                            </p>
                        </div>
                    </div>
                    <div ref={rightHiro} className=" flex-1 justify-center items-center hidden md:flex">
                        <ImgPrint src="hiro.png" width="100%" height="100%" />
                    </div>
                </div>
                <div className="flex flex-col justify-center  items-center gap-5">
                    <div className="flex flex-row justify-center items-center gap-">
                        <p className="text-white font-medium ">Einpunk Token Contract Address :</p>
                        <CopyToClipboard text={`${data}`}>
                            <div onClick={() => handleToast(Themes.LIGHT)} className="border-1 select-all bg-slate-800 p-2 rounded-md mx-2 flex justify-center items-center gap-2 text-white hover:text-sky-500 cursor-pointer">
                                <p className="">{data}</p>
                                <hr className="text-white w-2 rotate-90 " />
                                <FiCopy className='cursor-pointe ' />
                            </div>
                        </CopyToClipboard>
                    </div>
                    <div className="border-0 rounded-full p-2 px-20  cursor-pointer  bg-[#269afe] text-white font-bold hover:bg-white hover:text-[#269afe]">
                        <h2>Join</h2>
                    </div>
                </div>
                
                <div className="mt-20">
                    <HowToBuy />
                </div>
            </div>
        </>
    );
}

export default Hiro;