
import AnaSiEdi from "../assets/galerie/Ana-si-Edi/header.webp";

import facebookImage from "../assets/icons/facebook.svg";
import instagramImage from "../assets/icons/instagram.svg";
import tiktokImage from "../assets/icons/tiktok.svg";
import whatsappImage from "../assets/icons/whatsapp.svg";


let sociale = [
    {
        linkAdresa:"https://www.instagram.com/valentin.tapardea.photography/",
        image: instagramImage,
        alt: "iconita Instagram"
    },
   {
       linkAdresa : "https://www.facebook.com/ValentinTapardeaPhotography",
       image: facebookImage,
       alt: "iconita Facebook"
    },
   {
     linkAdresa: "https://www.tiktok.com/@valentintapardea",
     image: tiktokImage,
     alt: "iconita TikTok"
    },
    {
     linkAdresa: "https://api.whatsapp.com/send/?phone=%2B40762622150&text&type=phone_number&app_absent=0",
     image: whatsappImage,
     alt: "iconita WhatsApp"
    }
]
export let galerie = [
    {
        title: "Ana si Edi",
        tag: "Nunta",
        descriere: 
        [
            "În cadrul idilic lângǎ Restaurantul Hestia Hotel, Ana și Edi, într-un decor de vis, sub un apus de soare care părea să fie pensulat special  pentru ei. Această galerie foto își propune să vă poarte prin calatoria  lor magică, de la promisiunile șoptite sub razele ultime ale soarelui,  la strălucirea stelelor sub care s-a dansat până în zori.",
            "Fiecare fotografie din această colecție este o mărturie a atenției incredibile  la detalii. De la aranjamentele din flori naturale, care par să danseze  în lumina caldă a apusului, la zâmbetele sincere schimbate între  invitați, fiecare element contribuie la narațiunea unui început  fericit. "
        ],
        sociale,
        image: AnaSiEdi,
        adresaLink: "/galerie/ana-si-edie"
    }
]