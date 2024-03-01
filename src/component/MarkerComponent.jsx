import {Marker, Popup, Tooltip, useMap, useMapEvent, useMapEvents} from "react-leaflet";
import {useEffect} from "react";
import L from "leaflet";
import {AREA_PARCO, REGIONI} from "../utility/Costanti";


export default function MarkerComponent({regione,aree,areaSelezionata,filtraLista}){

    const map = useMap()

    useEffect(()=>{
        if(aree){
            if(areaSelezionata){
                map.flyTo(areaSelezionata.location.coordinates,13)
            }else{
                map.flyTo(REGIONI[regione].coordinate,REGIONI[regione].zoom)
            }
        }
    },[aree])


/*
    useMapEvent('zoom', () => {
        console.log("livello di zoom cambiato")
    })

    useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            map.flyTo(e.latlng, 13)
        },
    });


*/

    const iconaLocationParcoNazionale = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/685/685022.png',
        iconSize: [25, 25]
    });
    const iconaLocationAreaMarina = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/10873/10873773.png',
        iconSize: [25, 25]
    });

    return (
        <>
            {aree && aree.map((area,index)=>(
                <Marker key={index} position={area.location.coordinates} icon={area.type === AREA_PARCO ? iconaLocationParcoNazionale :iconaLocationAreaMarina}
                        eventHandlers={{ click:()=> filtraLista(area.codice) }}>
                    <Popup>{area.nome}</Popup>
                    <Tooltip>{area.nome}</Tooltip>
                </Marker>
                )
            )}
        </>
    )
}