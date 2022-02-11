import {MdPhoneInTalk} from "react-icons/md"; 
import {BiConversation} from "react-icons/bi"; 
import {BsFillPersonFill} from "react-icons/bs"; 
import {GrGroup} from "react-icons/gr"; 
import {BiSlideshow} from "react-icons/bi"; 

export const tarieven = [
    {
      name: "Kennismakingsgesprek",
      price: "Gratis",
      info: "Telefonisch gesprek om kennis te maken.",
      icon: <MdPhoneInTalk size ={30}/>
    },
    {
      name: "Intakegesprek",
      price: "€35,-",
      info: "",
      icon: <BiConversation size ={30}/>
    },
    {
      name: "Sessie",
      price: "€55,-",
      info: "Dit bedrag wordt per sessie gerekend.",
      icon: <BsFillPersonFill size ={30}/>
    },
    {
      name: "Groepstraining Rots & Water",
      price: "€75,-",
      info: "Dit is ook mogelijk op locatie, het bedrag wordt per uur gerekend.", 
      icon: <GrGroup size ={30}/>
    },
    {
      name: "Rots & Water training",
      price: "€110,-",
      info: "Deze training vindt plaats in mijn praktijk en is inclusief intake, materialen, 6 lessen zonder ouders en 1 afsluitende les met ouders",
      icon: <BsFillPersonFill size ={30}/>
    },
    {
      name: "Presentatie",
      price: "€95,-",
      info: "Presentatie 'Mijn leven is een achtbaan'. Van dit bedrag wordt 40 euro aan KIKA geschonken",
      icon: <BiSlideshow size ={30}/>
    }
]