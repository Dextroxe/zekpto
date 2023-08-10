import SrcBtn from "../useable/SrcBtn";
import { useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


const BuyNow = () => {

    const cardCont = 'flex flex-col md:flex-row gap-10 justify-between'

    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef(null);
    const body = useRef(null);
    const up = useRef(null);
    const down = useRef(null);
    const word = useRef(null);

    useLayoutEffect(() => {


        const ctx = gsap.context(() => {


            tl.current = gsap.timeline().from(word.current, { translateX: '40', opacity: '0'})
            tl.current = gsap.timeline().from(up.current, { translateX: '-40', opacity: '0', delay: 0.8 })
            tl.current = gsap.timeline().from(down.current, { translateY: '-40', opacity: '0', delay: 0.5 })

        }, body);

        return () => ctx.revert();

    }, []);

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-12 mt-16" ref={body}>
                    <h1 className="text-white text-5xl" ref={word}>Buy Now</h1>
                <div className={cardCont} ref={up}>
                    <SrcBtn
                        for_="ETH/EinpunkUSD"
                        button="Uniswap"
                        animateBox={true}
                        animateContent={true}
                        src="uniswap.png"
                        link="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x89a081999249407c1153e135a2af7d323419a66a"
                        boxWidth="64"
                        boxHeight="64"
                        imgWidth="2"
                        imgHeight="2"
                        img={true}
                    />
                    <SrcBtn
                        for_="ETH/EinpunkUSD"
                        button="Pancakeswap"
                        animateBox={true}
                        animateContent={true}
                        src="pancakeswap.png"
                        link="https://pancakeswap.finance/swap?chain=eth&outputCurrency=0x89a081999249407C1153e135A2Af7d323419A66A"
                        boxWidth="64"
                        boxHeight="64"
                        imgWidth="2"
                        imgHeight="2"
                        img={true}
                    />
                </div>
                <div className={cardCont} ref={down}>
                    <SrcBtn
                        for_="BUSD/EinpunkUSD"
                        button="Pancakeswap"
                        animateBox={true}
                        animateContent={true}
                        src="pancakeswap.png"
                        link="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xE933f2ea66764af369B3D5Ee7295a0B976387c0c&outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
                        boxWidth="64"
                        boxHeight="64"
                        imgWidth="2"
                        imgHeight="2"
                        img={true}
                    /><SrcBtn
                        for_="Cake/EinpunkUSD"
                        button="Pancakeswap"
                        animateBox={true}
                        animateContent={true}
                        src="pancakeswap.png"
                        link="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xE933f2ea66764af369B3D5Ee7295a0B976387c0c&outputCurrency=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
                        boxWidth="64"
                        boxHeight="64"
                        imgWidth="2"
                        imgHeight="2"
                        img={true}
                    /><SrcBtn
                        for_="BNB/EinpunkUSD"
                        button="Pancakeswap"
                        animateBox={true}
                        animateContent={true}
                        src="pancakeswap.png"
                        link="https://pancakeswap.finance/swap?inputCurrency=0xE933f2ea66764af369B3D5Ee7295a0B976387c0c&outputCurrency=BNB"
                        boxWidth="64"
                        boxHeight="64"
                        imgWidth="2"
                        imgHeight="2"
                        img={true}
                    />
                </div>
            </div>
        </>
    );
}

export default BuyNow;