import { Link } from "react-router-dom";

interface SrcBtnProps {
    for_: string,
    img?: boolean,
    src?: string,
    button: string,
    link: string,
    imgHeight?: string,
    imgWidth?: string,
    boxWidth?: string,
    boxHeight?: string,
    animateBox?: boolean,
    animateContent?: boolean,

}




const SrcBtn: React.FC<SrcBtnProps> = ({
    img,
    src,
    button,
    imgWidth,
    imgHeight,
    animateBox,
    animateContent,
    boxHeight,
    boxWidth,
    link,
    for_,

}) => {
    return (
        <>
            <Link to={link}>
            <div className={`w-${boxWidth} h-${boxHeight} flex flex-col justify-center items-center bg-black p-4 border-[1px] border-slate-800 rounded-xl ${animateBox ? 'transition duration-1000 ease-in-out hover:translate-y-5 hover:translate-x-5' : null} cursor-pointer hover:bg-sky-600 group/edit group-hover/item:visible`}>
                <p className="text-[#269afe] uppercase group-hover/edit:text-black pb-11">{for_}</p>
                <div className={`${animateContent ? 'transition duration-700 ease-in-out hover:-translate-y-5 hover:translate-x-5' : null}`}>
                    {img ? (<div className="flex justify-center items-center w-40 h-40 translate-x-8">
                        <img src={src} alt="img" style={{ width: `${imgWidth}`, height: `${imgHeight}` }} />
                    </div>) : null}

                    <div className="flex flex-col gap-2 p-2 text-white">
                        <p>
                            {button}
                        </p>
                    </div>
                </div>
            </div>
            </Link>
        </>
    );
}

export default SrcBtn;