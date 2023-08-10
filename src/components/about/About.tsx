
import CardPrint from "../useable/CardPrint";
import RoadMap from "./RoadMap";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


const About = () => {

    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef(null);
    const cards = useRef(null)

    

    useLayoutEffect(() => {


        const ctx = gsap.context(() => {

            // or we can use refs
            tl.current = gsap.timeline().from(cards.current, { translateY: '40', opacity: '0', delay: 0.5 })
            



        }, cards); // <- IMPORTANT! Scopes selector text

        return () => ctx.revert(); // cleanup

    }, []); // <- empty dependency Array so it doesn't re-run on every render
    return (
        <>
            <div className="flex-col gap-4  flex justify-center items-center mt-16">
                <div>
                    <h1 className="text-white text-5xl"><span className="text-[#269afe]">Zek</span>pto Token Features</h1>
                </div>
                <div ref={cards} className=" items-stretch flex flex-row  gap-10  select-none mt-10" >
                    <CardPrint src="pg1.png" imgHeight="100%" imgWidth="100%"
              
                        img={true}
                        heading="Working"
                        body="The dev team will be looking into develop amazing use cases for Einpunk token and the Community e.g Einpunk Exchange"
                        animateBox={true}
                        animateContent={true}
                        boxWidth="64"
                    />
                    <CardPrint src="pg2.png" imgHeight="100%" imgWidth="100%"
           
                        img={true}
                        heading="Working"
                        body="We will be exploring the NTFs ecosystem, we will have a marketspace for Einpunk Community as well as the Einpunk Holders."
                        animateBox={true}
                        animateContent={true}
                        boxWidth="64"
                    />
                    <CardPrint src="pg3.png" imgHeight="100%" imgWidth="100%"
              
                        img={true}
                        heading="Working"
                        body="Einpunk will be a token for our DeFi Protocol"
                        animateBox={true}
                        animateContent={true}
                        boxWidth="64"

                    />
                    <CardPrint src="pg4.png" imgHeight="100%" imgWidth="100%"
                  
                        img={true}
                        heading="Working"
                        body="We will be Airdropping some Einpunk token for the Community we will release some tasks needed to claim the Airdrop"
                        animateBox={true}
                        animateContent={true}
                        boxWidth="64"
                    />
                </div>
                <RoadMap />
            </div>
        </>
    );
}

export default About;