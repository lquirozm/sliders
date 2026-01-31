// Casa Abuila
import casaAbuila1 from "../assets/proyectos/1.CASA_ABULIA/img1.jpg";
import casaAbuila2 from "../assets/proyectos/1.CASA_ABULIA/img2.jpg";
import casaAbuila3 from "../assets/proyectos/1.CASA_ABULIA/img3.jpg";
// Casa Horizonte
import casaHorizonte1 from "../assets/proyectos/2.CASA_HORIZONTE/img1.jpg";
import casaHorizonte2 from "../assets/proyectos/2.CASA_HORIZONTE/img2.jpg";
import casaHorizonte3 from "../assets/proyectos/2.CASA_HORIZONTE/img3.jpg";
// Casa Lienzo
import casaLienzo1 from "../assets/proyectos/3.CASA_LIENZO/img1.jpg";
import casaLienzo2 from "../assets/proyectos/3.CASA_LIENZO/img2.png";
import casaLienzo3 from "../assets/proyectos/3.CASA_LIENZO/img3.png";
// Casa P
import casaP1 from "../assets/proyectos/4.CASA_P/img1.jpg";
import casaP2 from "../assets/proyectos/4.CASA_P/img2.jpg";
import casaP3 from "../assets/proyectos/4.CASA_P/img3.jpg";
import casaP4 from "../assets/proyectos/4.CASA_P/img4.jpg";
// Casa Sol
import casaSol1 from "../assets/proyectos/5.CASA_SOL/img1.jpg";
import casaSol2 from "../assets/proyectos/5.CASA_SOL/img2.jpg";
import casaSol3 from "../assets/proyectos/5.CASA_SOL/img3.jpg";
import casaSol4 from "../assets/proyectos/5.CASA_SOL/img4.jpg";
import casaSol5 from "../assets/proyectos/5.CASA_SOL/img5.jpg";
import casaSol6 from "../assets/proyectos/5.CASA_SOL/img6.jpg";
// Casa Hurtado
import casaHurtado1 from "../assets/proyectos/6.CASA_HURTADO/img1.jpg";
import casaHurtado2 from "../assets/proyectos/6.CASA_HURTADO/img2.jpg";
import thumbHurtado from "../assets/proyectos/6.CASA_HURTADO/video_thumb.png";
// Casa Timmermann
import casaTimmermann1 from "../assets/proyectos/7.CASA_TIMMERMANN/img1.jpg";
import casaTimmermann2 from "../assets/proyectos/7.CASA_TIMMERMANN/img2.jpg";
import thumbTimmermann from "../assets/proyectos/7.CASA_TIMMERMANN/video_thumb.png";


export const proyectos = [
  {
    id: "casa-p",
    nombre: "CASA P",
    imagenPrincipal: casaP1.src,
    galeria: [
      { src: casaP1.src, type: "image" },
      { src: casaP2.src, type: "image" },
      { src: casaP3.src, type: "image" },
      { src: casaP4.src, type: "image" },
    ],
  },
  {
    id: "casa-abuila",
    nombre: "CASA ABUILA",
    imagenPrincipal: casaAbuila1.src,
    galeria: [
      { src: casaAbuila1.src, type: "image" },
      { src: casaAbuila2.src, type: "image" },
      { src: casaAbuila3.src, type: "image" },
    ],
  },
  {
    id: "casa-sol",
    nombre: "CASA SOL",
    imagenPrincipal: casaSol1.src,
    galeria: [
      { src: casaSol1.src, type: "image" },
      { src: casaSol2.src, type: "image" },
      { src: casaSol3.src, type: "image" },
      { src: casaSol4.src, type: "image" },
      { src: casaSol5.src, type: "image" },
      { src: casaSol6.src, type: "image" },
    ],
  },
  {
    id: "casa-horizonte",
    nombre: "CASA HORIZONTE",
    imagenPrincipal: casaHorizonte1.src,
    galeria: [
      { src: casaHorizonte1.src, type: "image" },
      { src: casaHorizonte2.src, type: "image" },
      { src: casaHorizonte3.src, type: "image" },
    ],
  },
  {
    id: "casa-lienzo",
    nombre: "CASA LIENZO",
    imagenPrincipal: casaLienzo1.src,
    galeria: [
      { src: casaLienzo1.src, type: "image" },
      { src: casaLienzo2.src, type: "image" },
      { src: casaLienzo3.src, type: "image" },
    ],
  },
  {
    id: "casa-hurtado",
    nombre: "CASA HURTADO",
    imagenPrincipal: casaHurtado1.src,
    galeria: [
      { src: casaHurtado1.src, type: "image" },
      { src: casaHurtado2.src, type: "image" },
      { 
        src: "https://www.youtube.com/watch?v=-daI4ViMIyA", 
        type: "video",
        thumb: thumbHurtado.src 
      },
    ],
  },
  {
    id: "casa-timmermann",
    nombre: "CASA TIMMERMANN",
    imagenPrincipal: casaTimmermann1.src,
    galeria: [
      { src: casaTimmermann1.src, type: "image" },
      { src: casaTimmermann2.src, type: "image" },
      { 
        src: "https://www.youtube.com/watch?v=pyPTZadLCmU", 
        type: "video",
        thumb: thumbTimmermann.src 
      },
    ],
  },
];