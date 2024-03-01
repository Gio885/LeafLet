import icona4 from "../utility/image/Icona4.png"
import {COLORE_BIANCO, COLORE_BLUE} from "../utility/Costanti";


export default function Footer(){

    return (
        <>
            <div className={"row m-0"}>
                <div className={"col-6 m-3  d-flex flex-row justify-content-center align-items-center p-0"} >
                    <img style={{height:"120px"}} src={icona4} />
                    <h1 className={"text-start mx-2"}  style={{color:COLORE_BLUE}}>Natura<br/> Italia</h1>
                </div>
                <div className={"col-xl-5 d-flex flex-row justify-content-center align-items-center p-0 flex-wrap"}>
                    <h3 style={{color:COLORE_BLUE}}>{"PRIVACY"} |</h3>
                    <h3 style={{color:COLORE_BLUE,marginLeft:10}}>{"RESPONSABILITA"} |</h3>
                    <h3 style={{color:COLORE_BLUE,marginLeft:10}}>{"ACCESSIBILITA"} |</h3>
                    <h3 style={{color:COLORE_BLUE,marginLeft:10}}>{"CONTATTI"}</h3>
                </div>
            </div>
            <div className={"row d-flex  align-items-center m-0"} style={{backgroundColor:COLORE_BLUE,height:"100px"}}>
                <p className={"h4 mx-auto text-start w-auto"} style={{color:COLORE_BIANCO}}>Ministero dell'Ambiente e della Sicurezza Energetica</p>
            </div>

        </>
    )

}