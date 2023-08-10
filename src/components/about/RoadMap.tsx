import CardPrint from "../useable/CardPrint";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const RoadMap = () => {

    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef(null);
    const card1 = useRef(null);
    const card2 = useRef(null);
    const heading = useRef(null);
    const lines = useRef(null);
    useLayoutEffect(() => {

        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        const ctx = gsap.context(() => {

            // or we can use refs
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: heading.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 2,

                }
            }).from(card1.current, { translateY: '40', opacity: '0', delay: 1 })

            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: heading.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 3,

                }
            }).from(card2.current, { translateY: '40', opacity: '0', delay: 1 })
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: heading.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 4,

                }
            }).from(lines.current, { translateY: '40', opacity: '0', delay: 2 })



        }, card1); // <- IMPORTANT! Scopes selector text

        return () => ctx.revert(); // cleanup

    }, []); // <- empty dependency Array so it doesn't re-run on every render


    return (
        <>
            <div className="flex flex-col gap-10 justify-center items-center mt-24" >
                <h3 className="text-white text-4xl" ref={heading}>Road Map</h3>
                <div className="flex flex-col gap-20 relative ">
                    <div className="absolute invisible md:visible " ref={lines}>
                        <svg width="500" height="100" className=" md: absolute left-[10rem] top-[6rem] -z-50"><line x1="0" y1="0" x2="500" y2="0" stroke="white" className="absolute" /></svg>
                        <svg width="500" height="100" className="absolute left-[10rem] top-[12.2rem] -z-50"><line x1="500" y1="45" x2="500" y2="0" stroke="white" className="absolute" /></svg>
                        <svg width="500" height="100" className="absolute left-[10rem] top-[15rem] -z-50"><line x1="0" y1="0" x2="500" y2="0" stroke="white" className="absolute" /></svg>
                        <svg width="500" height="100" className="absolute left-[10rem] top-[15rem] -z-50"><line x1="0" y1="0" x2="0" y2="45" stroke="white" className="absolute" /></svg>
                        <svg width="500" height="100" className="absolute left-[10rem] top-[23.5rem] -z-50"><line x1="0" y1="0" x2="500" y2="0" stroke="white" className="absolute" /></svg>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around items-stretch " ref={card1} >
                        <CardPrint

                            heading="Phase 1"
                            body="Einpunk Token Launch Done

                            500 holders Ungoing
                            
                            2000 wallet Transactions Ungoing
                            
                            Website Launch Done
                            
                            Contract Auditing by solidity finance
                            
                            1000 organic telegram members
                            
                            Creation of Chinese community"
                            img={false}
                            animateBox={false}
                            animateContent={true}
                            boxWidth="96"
                            boxHeight="96"

                        />
                        <CardPrint
                            boxWidth="96"
                            boxHeight="96"
                            heading="Phase 2"
                            body="CoinMarketCap & Coin gecko listing

                            5000 telegram members
                            
                            2000 wallet Transactions
                            
                            2000 holders
                            
                            Listing on a centralised exchange"
                            img={false}
                            animateBox={false}
                            animateContent={true}
                        />
                    </div>
                    <div className="flex justify-evenly items-stretch w-full  md:flex-row flex-col gap-10 -translate-x-30" ref={card2}>
                        <CardPrint
                            boxWidth="96"
                            boxHeight="96"
                            heading="Phase 3"
                            body="20,000 telegram members

                            12,000 holders
                            
                            Large influencer marketing
                            
                            Project review
                            
                            Website redesign"
                            img={false}
                            animateBox={false}
                            animateContent={true}
                        />
                        <CardPrint
                            boxWidth="96"
                            boxHeight="96"
                            heading="Phase 4"
                            body="70,000 holders

                            100,000 telegram members
                            
                            Launch of Einpunk Market website
                            
                            Launch of Einpunk Dapp
                            
                            Increase marketing
                            
                            Partnership announcement
                            
                            Listing on more Major Top CEX"
                            img={false}
                            animateBox={false}
                            animateContent={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoadMap;