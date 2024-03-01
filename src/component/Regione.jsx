import {
    AREA_HOME,
    COLORE_BIANCO, ESPLORA_REGIONI, ITALIA, LISTA_AREE, NOMI_REGIONI,
    REGIONI, TESTO_REGIONI
} from "../utility/Costanti";
import {useEffect,useState} from "react";
import {Button} from "react-bootstrap";
import L from "leaflet";
import LayerControlComponent from "./LayerControlComponent";
import {MapContainer, TileLayer, useMapEvent} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



export default function Regione(){

    const [areaHome, setAreaHome] = useState();
    const [regioni,setRegioni] = useState();
    const [regioneSelezionata,setRegioneSelezionata] = useState("");
    const [listaAree,setListaAree] = useState()
    const [areaSelezionata,setAreaSelezionata] = useState()

    useEffect(()=>{
        window.scrollTo(0, 0);
        caricamento()
    },[])

    async function caricamento() {
        setAreaHome(AREA_HOME)
        setRegioneSelezionata(NOMI_REGIONI[0])
        setRegioni(NOMI_REGIONI)
        setListaAree(LISTA_AREE)
    }

    async function ricercaAreeRegione(regione){
        setAreaSelezionata()
        setRegioneSelezionata(regione)
        if(regione == ITALIA){
            setListaAree(LISTA_AREE)
        }else{
            let listaFiltrata = LISTA_AREE.filter(area =>
                area.regione.toUpperCase().includes(regione)
            )
            setListaAree(listaFiltrata)
        }
    }

    function filtraLista (codice){
        let areaFiltrata = listaAree.filter(e=>
            e.codice == codice)
        setListaAree(areaFiltrata)
        setAreaSelezionata(areaFiltrata[0])
    }
    return (
        <>
            <div className="container text-center">
                {areaHome && (
                    <>
                        <div className={"row p-0 bg-areaParco  d-flex flex-column justify-content-center "}>
                            <div className="col-12 text-center">
                                <p className="h4 my-5" style={{ color: COLORE_BIANCO }}>{areaHome.nome}</p>
                            </div>
                            <div className="col-10 mx-auto text-center">
                                <p className="h5 text-start my-5 " style={{ color: COLORE_BIANCO }}>
                                    {areaHome.descrizione}
                                </p>
                            </div>
                            <div className="col-12 text-center mt-1">
                                <Button className="border-0 mb-2" style={{ backgroundColor:"orange" }}>
                                    {"Leggi di più"}
                                </Button>
                            </div>
                        </div>
                    </>
                )}
                <div className={"row p-0 d-flex flex-row"} style={{backgroundColor:"orange"}}>
                    <div className={"col-6 d-flex justify-content-center"}>
                        <i style={{color:COLORE_BIANCO}} className="fa-regular fa-chess-rook fa-8x mt-5 mb-5"></i>
                    </div>
                    <div className={"col-6 d-flex justify-content-center align-items-center"}>
                        <p className={"h2 text-start btn-close-white"}>{TESTO_REGIONI}</p>
                    </div>
                </div>
                <div className={"row p-0 d-flex flex-row mt-3"}>
                    <div className={"col-6 d-flex flex-row"}>
                        <p style={{textDecoration:"none"}} className={"h5 mx-2 text-start"}>Home page</p>
                        <p className={"h5 mx-2 text-start fw-bold"}>/ {ESPLORA_REGIONI}</p>
                    </div>
                </div>
                <div className={"row p-0 mt-4"}>
                    {regioneSelezionata && <p className={"h2 text-start"}>{regioneSelezionata}</p>}
                </div>
                <div className={"row p-0 d-flex mt-4 mb-4"} >
                    <div className={"col-md-4 d-flex flex-column"}>
                        {regioni && regioni.map((regione,index)=>(
                            <>
                                <div key={index}  className={"row"}>
                                    {(regioneSelezionata && regioneSelezionata == regione)&&(
                                        <div className={"col-4"} style={{width:"13px",height:"30px",backgroundColor:"orange"}}></div>
                                    )}
                                    <div className={"col-8 d-flex"}>
                                        <p className={"h4 text start mb-3"} onClick={(e)=>ricercaAreeRegione(regione)} style={{cursor:"pointer",fontWeight:regioneSelezionata==regione ?"bold":"lighter"}} keys={index}>{regione}</p>
                                    </div>
                                </div>
                                {(regioneSelezionata == regione && regioneSelezionata != ITALIA) && listaAree.map((area,index)=>(
                                        <div key={index} className={"row d-flex"}>
                                            <div className={"col-12 d-flex"}>
                                                <ul >
                                                    <li className={"text-start"} style={{cursor:"pointer",fontWeight:(areaSelezionata && areaSelezionata.codice == area.codice) ? "bold":""}} onClick={()=> filtraLista(area.codice)} >{area.nome}</li>
                                                </ul>
                                            </div>
                                        </div>
                                ))}
                            </>
                        ))}
                    </div>
                    <div className={"col-md-8"} >
                        <MapContainer style={{height:"1000px"}}  center={[REGIONI[ITALIA].coordinate[0],REGIONI[ITALIA].coordinate[1]]} zoom={REGIONI[ITALIA].zoom}>
                            <TileLayer url={"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"} />
                            <LayerControlComponent regione={regioneSelezionata} aree = {listaAree} areaSelezionata = {areaSelezionata} filtraLista = {filtraLista} ricercaAreeRegione={ricercaAreeRegione} />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )

}

