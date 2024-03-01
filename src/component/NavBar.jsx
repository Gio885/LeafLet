import logoM from "../utility/image/logoM.png"
import icona4 from "../utility/image/Icona4.png"
import iconItaly from "../utility/image/italy.png"
import iconEnglish from "../utility/image/united-kingdom.png"
import {IT, EN, COLORE_BIANCO, COLORE_BLUE} from "../utility/Costanti";
import {useState} from "react";


export default function NavBar() {

    const [language,setLanguage] = useState()
    const handleLanguage = (language) => {
        setLanguage(language)
    }

    return (
        <>
            <div className={"row d-flex m-0"} style={{backgroundColor:COLORE_BLUE}}>
                <div className={"col-3 d-flex flex-row align-items-center p-0"}>
                    <img className={"mx-5"} style={{width:"100px",height:"100px"}} src={logoM} />
                    <p className={"h5"} style={{color:COLORE_BIANCO}}> Ministero dell'Ambiente e della Sicurezza Energetica</p>
                </div>
                <div className={"col-9 d-flex flex-row align-items-center justify-content-end p-0"}>
                    <select className={"me-3"} value={language} onChange={(e)=>handleLanguage(e.target.value)}  style={{width:"70px",fontSize:"20px",backgroundColor:"transparent",border:"none",color:COLORE_BIANCO}}>
                        <option style={{backgroundColor:"transparent",display:"none"}}>{language}</option>
                        <option value={language == IT ? EN : IT} style={{backgroundColor:"transparent",color:"blue"}}>
                            {language == IT ? EN.toUpperCase() : IT.toUpperCase()}
                        </option>
                    </select>
                    <img className={"me-5"} style={{width:"40px",height:"40px"}} src={language == IT ? iconItaly : iconEnglish}></img>
                </div>
            </div>
            <div className={"row my-3 mx-0"}>
                <div className={"col-6 d-flex flex-row justify-content-center align-items-center p-0"} >
                    <img style={{height:"120px",cursor:"pointer"}} src={icona4} alt="Icona" />
                    <h1 className={"text-start mx-2"} style={{color:COLORE_BLUE}} >Natura<br/> Italia</h1>
                </div>
                <div className={"col-6 d-flex flex-row justify-content-center p-0"}>
                    <div className={"col-sm-6"} />
                    <div className={"col-6 d-flex flex-column text-start justify-content-center p-0"}>
                        <p className={"h5 fw-bold"} style={{color:COLORE_BLUE}} >{("Seguici su")}</p>
                        <div className={"d-flex flex-row flex-wrap"}>
                            <i style={{color:COLORE_BLUE}} className="fa-brands fa-square-instagram fa-3x"></i>
                            <i style={{color:COLORE_BLUE}} className="fa-brands fa-facebook fa-3x"></i>
                            <i style={{color:COLORE_BLUE}} className="fa-brands fa-linkedin fa-3x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}