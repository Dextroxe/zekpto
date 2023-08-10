interface ImgPrintProps{
    src : string,
    width? : string,
    height? : string
}

const ImgPrint:React.FC<ImgPrintProps> = ({
    src,
    width,
    height
}) => {
    return ( 
        <>
        <img src={`./${src}`} alt="img" style={{width:`${width}px`, height: `${height}`}} className={`${src? '':'animate-pulse'}`}/>
        </>
     );
}
 
export default ImgPrint;