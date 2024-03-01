//HOMEPAGE
import geoAbruzzo from "./geoJson/geoAbruzzo";
import geoCalabria from "./geoJson/geoCalabria";
import geoCampania from "./geoJson/geoCampania";
import geoFriuliVeneziaGiulia from "./geoJson/geoFriuliVeneziaGiulia";
import geoLazio from "./geoJson/geoLazio";
import geoLiguria from "./geoJson/geoLiguria";
import geoMarche from "./geoJson/geoMarche";
import geoMolise from "./geoJson/geoMolise";
import geoPiemonte from "./geoJson/geoPiemonte";
import geoPuglia from "./geoJson/geoPuglia";
import geoSardegna from "./geoJson/geoSardegna";
import geoSicilia from "./geoJson/geoSicilia";
import geoToscana from "./geoJson/geoToscana";
import geoTrentino from "./geoJson/geoTrentino";
import geoUmbria from "./geoJson/geoUmbria";
import geoValleDaosta from "./geoJson/geoValleDaosta";
import geoVeneto from "./geoJson/geoVeneto";
import geoItaly from "./geoJson/geoItaly";
import GeoBasilicata from "./geoJson/geoBasilicata";
import GeoEmiliaRomagna from "./geoJson/geoEmiliaRomagna";
import geoLombardia from "./geoJson/geoLombardia";

export const COLORE_BLUE="#13638c";
export const COLORE_BIANCO="white";
export const AREA_PARCO="PN";
export const IT = "it"
export const EN = "en"
export const TESTO_REGIONI ="ESPLORA LE AREE NATURALI NELLE DIVERSE REGIONI ITALIANE"
export const ESPLORA_REGIONI ="Esplora regioni"
export const ITALIA = "TUTTE LE REGIONI"
export const REGIONI = {
    "TUTTE LE REGIONI": {
        coordinate:[41.5165,12.5266],
        geoJson: geoItaly,
        zoom:6
    },
    "ABRUZZO": {
        coordinate:[42.22571954158349, 13.796202762152735],
        geoJson: geoAbruzzo,
        zoom:8
    },
    "BASILICATA": {
        coordinate:[40.20, 16.120123398782233],
        geoJson: GeoBasilicata,
        zoom:8
    },
    "CALABRIA": {
        coordinate:[39.0181473558676, 16.444836477604966],
        geoJson: geoCalabria,
        zoom:8
    },
    "CAMPANIA": {
        coordinate:[40.80, 14.877480994440681],
        geoJson: geoCampania,
        zoom:8
    },
    "EMILIA ROMAGNA": {
        coordinate:[44.55899245085473, 10.921685685653873],
        geoJson: GeoEmiliaRomagna,
        zoom:8
    },
    "FRIULI VENEZIA GIULIA": {
        coordinate:[46.205727871478345, 13.042787345990664],
        geoJson: geoFriuliVeneziaGiulia,
        zoom:8
    },
    "LAZIO": {
        coordinate:[41.90647204961068, 12.666409535755914],
        geoJson: geoLazio,
        zoom:8
    },
    "LIGURIA": {
        coordinate:[44.060435320413276, 8.791095633441596],
        geoJson: geoLiguria,
        zoom:8
    },
    "MARCHE": {
        coordinate:[43.380554728053596, 13.160601230758328],
        geoJson: geoMarche,
        zoom:8
    },
    "MOLISE": {
        coordinate:[41.65591707400936, 14.603426653717305],
        geoJson: geoMolise,
        zoom:8
    },
    "PIEMONTE": {
        coordinate:[45.30, 7.974787744909789],
        geoJson: geoPiemonte,
        zoom:8
    },
    "PUGLIA": {
        coordinate:[40.9632592324267, 16.600191059982922],
        geoJson: geoPuglia,
        zoom:8
    },
    "SARDEGNA": {
        coordinate:[40.159179532488245, 9.110036858124616],
        geoJson: geoSardegna,
        zoom:8
    },
    "SICILIA": {
        coordinate:[37.10, 13.55],
        geoJson: geoSicilia,
        zoom:8
    },
    "TOSCANA": {
        coordinate:[43.4234515290394, 11.083302404027277],
        geoJson: geoToscana,
        zoom:8
    },
    "TRENTINO ALTO ADIGE": {
        coordinate:[46.43555796657502, 11.234713758884986],
        geoJson: geoTrentino,
        zoom:8
    },
    "UMBRIA": {
        coordinate:[42.982979056013505, 12.487219631870929],
        geoJson: geoUmbria,
        zoom:8
    },
    "VALLE D'AOSTA": {
        coordinate:[45.706677911823824, 7.4044557465046426],
        geoJson: geoValleDaosta,
        zoom:8
    },
    "VENETO": {
        coordinate:[45.63610019842861, 11.756971874758925],
        geoJson: geoVeneto,
        zoom:8
    },
    "LOMBARDIA": {
        coordinate:[45.59611578016372, 9.632560736998181],
        geoJson: geoLombardia,
        zoom:8
    }
}


export const AREA_HOME = {
    nome:"Parco Nazionale Abruzzo, Lazio e Molise",
    descrizione:"Il Parco Nazionale d’Abruzzo, Lazio e Molise è stato istituito nel 1923 e si estende per circa 50.000 ettari tra le province di Frosinone, Isernia e L'Aquila.Si tratta del più antico parco d'Italia il cui patrimonio, tutelato anche grazie all'aiuto del Corpo forestale dello Stato, rende questa area protetta una tra le più rilevanti sul versante della biodiversità e della conservazioni di importati specie faunistiche.",
    tipoArea:"PN",
}

export const NOMI_REGIONI = ["TUTTE LE REGIONI","ABRUZZO", "BASILICATA","CALABRIA","CAMPANIA","EMILIA ROMAGNA","FRIULI VENEZIA GIULIA","LAZIO","LIGURIA","MARCHE","MOLISE","PIEMONTE","LOMBARDIA","PUGLIA","SARDEGNA","SICILIA","TOSCANA","TRENTINO ALTO ADIGE","UMBRIA","VALLE D'AOSTA","VENETO"]

export const LISTA_AREE = [
    {
        "id": "6489d894931f8e01cb16848e",
        "codice": "EUAP0001",
        "location": {
            "type": "Point",
            "coordinates": [
                41.850128,
                13.740921
            ]
        },
        "regione": "Abruzzo, Lazio, Molise",
        "type": "PN",
        "nome": "Parco Nazionale Abruzzo, Lazio e Molise"
    },
    {
        "id": "6489d894931f8e01cb168492",
        "codice": "EUAP0852",
        "location": {
            "type": "Point",
            "coordinates": [
                40.999593,
                16.308975
            ]
        },
        "regione": "Puglia",
        "type": "PN",
        "nome": "Parco Nazionale dell'Alta Murgia it"
    },
    {
        "id": "6489d894931f8e01cb168496",
        "codice": "EUAP0851",
        "location": {
            "type": "Point",
            "coordinates": [
                40.34193,
                15.7342
            ]
        },
        "regione": "Basilicata",
        "type": "PN",
        "nome": "Parco Nazionale dell'Appennino Lucano-Val d'Agri-Lagonegrese"
    },
    {
        "id": "6489d894931f8e01cb16849a",
        "codice": "EUAP1158",
        "location": {
            "type": "Point",
            "coordinates": [
                44.33716,
                10.21732
            ]
        },
        "regione": "Toscana",
        "type": "PN",
        "nome": "Parco Nazionale dell'Appennino Tosco-Emiliano"
    },
    {
        "id": "6489d894931f8e01cb16849e",
        "codice": "EUAP0010",
        "location": {
            "type": "Point",
            "coordinates": [
                42.77774,
                10.21462
            ]
        },
        "regione": "Toscana",
        "type": "PN",
        "nome": "Parco Nazionale dell'Arcipelago Toscano"
    },
    {
        "id": "6489d894931f8e01cb1684a2",
        "codice": "EUAP0945",
        "location": {
            "type": "Point",
            "coordinates": [
                41.05213,
                8.25608
            ]
        },
        "regione": "Sardegna",
        "type": "PN",
        "nome": "Parco Nazionale dell'Asinara"
    },
    {
        "id": "6489d894931f8e01cb1684a6",
        "codice": "EUAP0011",
        "location": {
            "type": "Point",
            "coordinates": [
                38.19877,
                16.0118
            ]
        },
        "regione": "Calabria",
        "type": "PN",
        "nome": "Parco Nazionale dell'Aspromonte"
    },
    {
        "id": "6489d894931f8e01cb1684aa",
        "codice": "EUAP0003",
        "location": {
            "type": "Point",
            "coordinates": [
                40.499181,
                15.179901
            ]
        },
        "regione": "Campania",
        "type": "PN",
        "nome": "Parco Nazionale del Cilento, Vallo di Diano e Alburni"
    },
    {
        "id": "6489d894931f8e01cb1684ae",
        "codice": "EUAP1067",
        "location": {
            "type": "Point",
            "coordinates": [
                44.12498,
                9.71163
            ]
        },
        "regione": "Liguria",
        "type": "PN",
        "nome": "Parco Nazionale delle Cinque Terre"
    },
    {
        "id": "6489d894931f8e01cb1684b2",
        "codice": "EUAP0004",
        "location": {
            "type": "Point",
            "coordinates": [
                41.31647,
                13.04098
            ]
        },
        "regione": "Lazio",
        "type": "PN",
        "nome": "Parco Nazionale del Circeo"
    },
    {
        "id": "6489d894931f8e01cb1684b6",
        "codice": "EUAP0015",
        "location": {
            "type": "Point",
            "coordinates": [
                46.220702,
                12.032661
            ]
        },
        "regione": "Veneto",
        "type": "PN",
        "nome": "Parco Nazionale delle Dolomiti Bellunesi"
    },
    {
        "id": "6489d894931f8e01cb1684ba",
        "codice": "EUAP0016",
        "location": {
            "type": "Point",
            "coordinates": [
                43.87119,
                11.78868
            ]
        },
        "regione": "Toscana, Emilia Romagna",
        "type": "PN",
        "nome": "Parco Nazionale delle Foreste Casentinesi, Monte Falterona e Campigna"
    },
    {
        "id": "6489d894931f8e01cb1684be",
        "codice": "EUAP0005",
        "location": {
            "type": "Point",
            "coordinates": [
                41.88312,
                15.71315
            ]
        },
        "regione": "Puglia",
        "type": "PN",
        "nome": "Parco Nazionale del Gargano"
    },
    {
        "id": "6489d894931f8e01cb1684c2",
        "codice": "EUAP0006",
        "location": {
            "type": "Point",
            "coordinates": [
                45.54248,
                7.32243
            ]
        },
        "regione": "Piemonte, Valle d'Aosta",
        "type": "PN",
        "nome": "Parco Nazionale del Gran Paradiso"
    },
    {
        "id": "6489d894931f8e01cb1684c6",
        "codice": "EUAP0007",
        "location": {
            "type": "Point",
            "coordinates": [
                42.50484,
                13.57526
            ]
        },
        "regione": "Abruzzo, Lazio, Marche",
        "type": "PN",
        "nome": "Parco Nazionale del Gran Sasso e Monti della Laga"
    },
    {
        "id": "6489d894931f8e01cb1684ca",
        "codice": "EUAP0018",
        "location": {
            "type": "Point",
            "coordinates": [
                41.23919,
                9.41088
            ]
        },
        "regione": "Sardegna",
        "type": "PN",
        "nome": "Parco Nazionale dell'Arcipelago di La Maddalena"
    },
    {
        "id": "6489d894931f8e01cb1684ce",
        "codice": "EUAP0013",
        "location": {
            "type": "Point",
            "coordinates": [
                42.0484,
                14.04073
            ]
        },
        "regione": "Abruzzo",
        "type": "PN",
        "nome": "Parco Nazionale della Maiella"
    },
    {
        "id": "6489d894931f8e01cb1684d2",
        "codice": "EUAP0008",
        "location": {
            "type": "Point",
            "coordinates": [
                40.085427,
                16.14006
            ]
        },
        "regione": "Basilicata, Calabria",
        "type": "PN",
        "nome": "Parco Nazionale del Pollino"
    },
    {
        "id": "6489d894931f8e01cb1684d6",
        "codice": "EUAP0002",
        "location": {
            "type": "Point",
            "coordinates": [
                42.91427,
                13.19919
            ]
        },
        "regione": "Marche, Umbria",
        "type": "PN",
        "nome": "Parco Nazionale dei Monti Sibillini"
    },
    {
        "id": "6489d894931f8e01cb1684da",
        "codice": "EUAP0550",
        "location": {
            "type": "Point",
            "coordinates": [
                39.2601,
                16.57496
            ]
        },
        "regione": "Calabria",
        "type": "PN",
        "nome": "Parco Nazionale della Sila"
    },
    {
        "id": "6489d894931f8e01cb1684de",
        "codice": "EUAP0017",
        "location": {
            "type": "Point",
            "coordinates": [
                46.46444,
                10.48496
            ]
        },
        "regione": "Lombardia, Trentino Alto Adige",
        "type": "PN",
        "nome": "Parco Nazionale dello Stelvio"
    },
    {
        "id": "6489d894931f8e01cb1684e2",
        "codice": "EUAP0014",
        "location": {
            "type": "Point",
            "coordinates": [
                46.04749,
                8.45566
            ]
        },
        "regione": "Piemonte",
        "type": "PN",
        "nome": "Parco Nazionale della Val Grande"
    },
    {
        "id": "6489d894931f8e01cb1684e6",
        "codice": "EUAP0009",
        "location": {
            "type": "Point",
            "coordinates": [
                40.82346,
                14.43258
            ]
        },
        "regione": "Campania",
        "type": "PN",
        "nome": "Parco Nazionale del Vesuvio"
    },
    {
        "id": "6489d894931f8e01cb1684ea",
        "codice": "EUAP0552",
        "location": {
            "type": "Point",
            "coordinates": [
                41.05383,
                8.28275
            ]
        },
        "regione": "Sardegna",
        "type": "AMP",
        "nome": "Area marina protetta dell'Asinara"
    },
    {
        "id": "6489d894931f8e01cb1684ee",
        "codice": "EUAP0911",
        "location": {
            "type": "Point",
            "coordinates": [
                44.23654,
                8.4468
            ]
        },
        "regione": "Liguria",
        "type": "AMP",
        "nome": "Area marina protetta Isola di Bergeggi"
    },
    {
        "id": "6489d894931f8e01cb1684f2",
        "codice": "EUAP0554",
        "location": {
            "type": "Point",
            "coordinates": [
                40.618383,
                8.186817
            ]
        },
        "regione": "Sardegna",
        "type": "AMP",
        "nome": "Area marina protetta Capo Caccia - Isola Piana"
    },
    {
        "id": "6489d894931f8e01cb1684f8",
        "codice": "EUAP0953",
        "location": {
            "type": "Point",
            "coordinates": [
                39.0,
                9.0
            ]
        },
        "regione": "Sardegna",
        "type": "AMP",
        "nome": "Area marina protetta Capo Carbonara"
    },
    {
        "id": "6489d894931f8e01cb1684fc",
        "codice": "EUAP0555",
        "location": {
            "type": "Point",
            "coordinates": [
                38.21421,
                13.27094
            ]
        },
        "regione": "Sicilia",
        "type": "AMP",
        "nome": "Area marina protetta Capo Gallo - Isola delle Femmine"
    },
    {
        "id": "6489d894931f8e01cb168500",
        "codice": "EUAP0166",
        "location": {
            "type": "Point",
            "coordinates": [
                38.970354,
                17.124395
            ]
        },
        "regione": "Calabria",
        "type": "AMP",
        "nome": "Area marina protetta Capo Rizzuto"
    },
    {
        "id": "6489d894931f8e01cb168504",
        "codice": "EUAP0948",
        "location": {
            "type": "Point",
            "coordinates": [
                44.10486,
                9.68283
            ]
        },
        "regione": "Liguria",
        "type": "AMP",
        "nome": "Area marina protetta Cinque Terre"
    },
    {
        "id": "6489d894931f8e01cb168508",
        "codice": "EUAP1228",
        "location": {
            "type": "Point",
            "coordinates": [
                40.00763,
                15.44253
            ]
        },
        "regione": "Campania",
        "type": "AMP",
        "nome": "Area marina protetta Costa degli Infreschi e della Masseta"
    },
    {
        "id": "6489d894931f8e01cb16850c",
        "codice": "EUAP0172",
        "location": {
            "type": "Point",
            "coordinates": [
                37.94937,
                12.22105
            ]
        },
        "regione": "Sicilia",
        "type": "AMP",
        "nome": "Area marina protetta Isole Egadi"
    },
    {
        "id": "6489d894931f8e01cb168510",
        "codice": "EUAP0170",
        "location": {
            "type": "Point",
            "coordinates": [
                38.70657,
                13.12387
            ]
        },
        "regione": "Sicilia",
        "type": "AMP",
        "nome": "Area marina protetta Isola di Ustica"
    },
    {
        "id": "6489d894931f8e01cb168514",
        "codice": "EUAP0171",
        "location": {
            "type": "Point",
            "coordinates": [
                37.55734,
                15.16267
            ]
        },
        "regione": "Sicilia",
        "type": "AMP",
        "nome": "Area marina protetta Isole Ciclopi"
    },
    {
        "id": "6489d894931f8e01cb168518",
        "codice": "EUAP0168",
        "location": {
            "type": "Point",
            "coordinates": [
                42.11727,
                15.50017
            ]
        },
        "regione": "Puglia",
        "type": "AMP",
        "nome": "Area marina protetta Isole Tremiti"
    },
    {
        "id": "6489d894931f8e01cb16851c",
        "codice": "EUAP0167",
        "location": {
            "type": "Point",
            "coordinates": [
                45.70286,
                13.70992
            ]
        },
        "regione": "Friuli Venezia Giulia",
        "type": "AMP",
        "nome": "Area marina protetta di Miramare"
    },
    {
        "id": "6489d894931f8e01cb168520",
        "codice": "EUAP0553",
        "location": {
            "type": "Point",
            "coordinates": [
                35.54396,
                12.546959
            ]
        },
        "regione": "Sicilia",
        "type": "AMP",
        "nome": "Area marina protetta Isole Pelagie"
    },
    {
        "id": "6489d894931f8e01cb168524",
        "codice": "EUAP0951",
        "location": {
            "type": "Point",
            "coordinates": [
                39.92109,
                8.36179
            ]
        },
        "regione": "Sardegna",
        "type": "AMP",
        "nome": "Area marina protetta Penisola del Sinis - Isola Mal di Ventre"
    },
    {
        "id": "6489d894931f8e01cb168528",
        "codice": "EUAP0512",
        "location": {
            "type": "Point",
            "coordinates": [
                37.022086,
                15.327287
            ]
        },
        "regione": "Sicilia",
        "type": "AMP",
        "nome": "Area marina protetta Plemmirio"
    },
    {
        "id": "6489d894931f8e01cb16852c",
        "codice": "EUAP0950",
        "location": {
            "type": "Point",
            "coordinates": [
                40.22939,
                17.82692
            ]
        },
        "regione": "Puglia",
        "type": "AMP",
        "nome": "Area marina protetta Porto Cesareo"
    },
    {
        "id": "6489d894931f8e01cb168530",
        "codice": "EUAP0949",
        "location": {
            "type": "Point",
            "coordinates": [
                44.30542,
                9.19349
            ]
        },
        "regione": "Liguria",
        "type": "AMP",
        "nome": "Area marina protetta Portofino"
    },
    {
        "id": "6489d894931f8e01cb168534",
        "codice": "EUAP0946",
        "location": {
            "type": "Point",
            "coordinates": [
                40.60341,
                14.32482
            ]
        },
        "regione": "Campania",
        "type": "AMP",
        "nome": "Area marina protetta Punta Campanella"
    },
    {
        "id": "6489d894931f8e01cb168538",
        "codice": "EUAP0917",
        "location": {
            "type": "Point",
            "coordinates": [
                40.819525,
                13.866005
            ]
        },
        "regione": "Campania",
        "type": "AMP",
        "nome": "Area marina protetta Regno di Nettuno"
    },
    {
        "id": "6489d894931f8e01cb16853c",
        "codice": "EUAP1225",
        "location": {
            "type": "Point",
            "coordinates": [
                40.27671,
                14.92685
            ]
        },
        "regione": "Campania",
        "type": "AMP",
        "nome": "Area marina protetta Santa Maria di Castellabate"
    },
    {
        "id": "6489d894931f8e01cb168540",
        "codice": "EUAP1227",
        "location": {
            "type": "Point",
            "coordinates": [
                43.5623,
                10.17737
            ]
        },
        "regione": "Toscana",
        "type": "AMP",
        "nome": "Area marina protetta Secche della Meloria"
    },
    {
        "id": "6489d894931f8e01cb168544",
        "codice": "EUAP1172",
        "location": {
            "type": "Point",
            "coordinates": [
                41.59736,
                12.33154
            ]
        },
        "regione": "Lazio",
        "type": "AMP",
        "nome": "Area marina protetta Secche di Tor Paterno"
    },
    {
        "id": "6489d894931f8e01cb168548",
        "codice": "EUAP0952",
        "location": {
            "type": "Point",
            "coordinates": [
                40.85365,
                9.71123
            ]
        },
        "regione": "Sardegna",
        "type": "AMP",
        "nome": "Area marina protetta Tavolara - Punta Coda Cavallo"
    },
    {
        "id": "6489d894931f8e01cb16854c",
        "codice": "EUAP1226",
        "location": {
            "type": "Point",
            "coordinates": [
                42.59298,
                14.11485
            ]
        },
        "regione": "Abruzzo",
        "type": "AMP",
        "nome": "Area Marina Protetta Torre Del Cerrano"
    },
    {
        "id": "6489d894931f8e01cb168550",
        "codice": "EUAP0169",
        "location": {
            "type": "Point",
            "coordinates": [
                40.72615,
                17.80601
            ]
        },
        "regione": "Puglia",
        "type": "AMP",
        "nome": "Area marina protetta Torre Guaceto"
    },
    {
        "id": "6489d894931f8e01cb168554",
        "codice": "EUAP0947",
        "location": {
            "type": "Point",
            "coordinates": [
                40.79586,
                13.44969
            ]
        },
        "regione": "Lazio",
        "type": "AMP",
        "nome": "Area marina protetta Isole di Ventotene e Santo Stefano"
    },
    {
        "id": "6489d894931f8e01cb168558",
        "codice": "EUAP0849",
        "location": {
            "type": "Point",
            "coordinates": [
                40.82368,
                14.08433
            ]
        },
        "regione": "Campania",
        "type": "AMP",
        "nome": "Parco sommerso di Baia"
    },
    {
        "id": "6489d894931f8e01cb16855c",
        "codice": "EUAP0850",
        "location": {
            "type": "Point",
            "coordinates": [
                40.79096,
                14.18603
            ]
        },
        "regione": "Campania",
        "type": "AMP",
        "nome": "Parco sommerso di Gaiola"
    },
    {
        "id": "6489d894931f8e01cb168560",
        "codice": "EUAP1292",
        "location": {
            "type": "Point",
            "coordinates": [
                36.83129,
                11.93832
            ]
        },
        "regione": "Sicilia",
        "type": "PN",
        "nome": "Parco Nazionale Isola di Pantelleria"
    },
    {
        "id": "6489d894931f8e01cb168564",
        "codice": "EUAPXXXX",
        "location": {
            "type": "Point",
            "coordinates": [
                38.26527,
                15.24434
            ]
        },
        "regione": "Sicilia",
        "type": "AMP",
        "nome": "Area marina protetta Capo Milazzo"
    },
    {
        "id": "6489d895931f8e01cb168568",
        "codice": "EUAPYYYY",
        "location": {
            "type": "Point",
            "coordinates": [
                41.250984,
                9.18416
            ]
        },
        "regione": "Sardegna",
        "type": "AMP",
        "nome": "Area marina protetta Capo Testa Punta Falcone"
    }
]
