interface CardPrintProps {
    img?: boolean,
    src?: string,
    heading: string,
    body: string,
    imgHeight?: string,
    imgWidth?: string,
    boxWidth?: string,
    boxHeight?: string,
    animateBox?: boolean,
    animateContent?: boolean,

}




const CardPrint: React.FC<CardPrintProps> = ({
    img,
    src,
    heading,
    body,
    imgWidth,
    imgHeight,
    animateBox,
    animateContent,
    boxHeight,
    boxWidth,

}) => {
    return (
        <>
            <div className={`w-${boxWidth} h-${boxHeight} flex flex-col justify-center items-center bg-black p-4 border-[1px] border-slate-800 rounded-xl ${animateBox? 'transition duration-1000 ease-in-out hover:translate-y-5 hover:translate-x-5' : null} cursor-pointer`}>
                <div className={`${animateContent? 'transition duration-700 ease-in-out hover:-translate-y-5 hover:translate-x-5': null}`}>
                    {img? (<div className="flex justify-center items-center w-40 h-40 translate-x-8">
                    <img src={src} alt="img" style={{width:`${imgWidth}`, height: `${imgHeight}`}} />
                </div>) : null}
                
                <div className="flex flex-col gap-2 p-2">
                    <h2 className="text-white text-center font-bold">{heading}</h2>
                    <p className="text-white text-left ">{body}</p>
                </div>
                </div>
            </div>
        </>
    );
}

export default CardPrint;