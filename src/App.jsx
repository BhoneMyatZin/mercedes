import { Fragment, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import './App.css';
// import { ReactComponent as Logo } from './img/mercedes_logo.svg';
// import carVideo from "./video/car_video.mp4";
import carVideo from "./video/mercedes_video.mp4";
import logoAnimation from './video/Mercedes_animation.mp4';
import videoPic from './img/videoPic.jpeg';
import cardImg1 from './img/bodyImg1.jpg';
import cardImg2 from './img/bodyImg2.jpg';
import cardImg3 from './img/bodyImg3.jpg';
import cardImg4 from './img/bodyImg4.jpg';
import cardImg5 from './img/bodyImg5.jpg';
import desertImg from './img/desertImg.jpg';

function App() {

  const windowHeight = window.innerHeight;

  const [isRendered, setIsRendered] = useState(false);

  const [scrollState, setScrollState] = useState(true);

  const [scrollState2, setScrollState2] = useState(true);

  const [videoText, setVideoText] = useState({});

  const [videoTextHide2, setVideoTextHide2] = useState({});

  const [oneTimeCurtain, setOneTimeCurtain] = useState({});

  const [blackCurtain, setBlackCurtain] = useState({});

  const [imgText, setImgText] = useState({
    transform: "translateY(200%)",
  });

  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  })

  const [fixedPosition, setFixedPosition] = useState({
    transform: 'translateY(0)',
  })
  const [fixedPosition2, setFixedPosition2] = useState({
    transform: 'translateY(0)',
  })
  const [fixedPosition3, setFixedPosition3] = useState({
    transform: 'translateY(0)',
  })
  const [fixedPosition4, setFixedPosition4] = useState({
    transform: 'translateY(0)',
  })
  const [fixedPosition5, setFixedPosition5] = useState({
    transform: 'translateY(0)',
  })

  const scrollHide = {
    transition: 'transform 6s cubic-bezier(0.1, 0.02, 0.08, 0.89) 0.1s',
    transform: "translateY(-280px)",
  }

  const scrollShow = {
    transition: 'transform 3s cubic-bezier(0.1, 0.01, 0.08, 0.9)',
    transform: "translateY(0px)",
    transitionDelay: isRendered? '0.4s' : '2.3s'
  }

  const videoTextHide = {
    transition: 'transform 1s',
    transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.98)',
    transform: "translateY(-300px)",
  }

  const videoTextShow = {
    transition: 'transform 1.8s',
    transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.98)',
    transitionDelay: isRendered? '0.4s' : '4.5s',
    transform: "translateY(0px)",
  } 

  const whiteCurtain = useRef(null);
  const whiteCurtainInView = useInView(whiteCurtain);

  const whiteCurtain2 = useRef(null);
  const whiteCurtainInView2 = useInView(whiteCurtain2);

  const whiteCurtain3 = useRef(null);
  const whiteCurtainInView3 = useInView(whiteCurtain3);

  const whiteCurtain4 = useRef(null);
  const whiteCurtainInView4 = useInView(whiteCurtain4);

  const whiteCurtain5 = useRef(null);
  const whiteCurtainInView5 = useInView(whiteCurtain5);
  
  const menuMouseOver = () => {
    setScrollState(false);
  }

  const menuMouseLeave = () => {
    if(scrollData.y > scrollData.lastY) {
      setScrollState(
        true
      )
    } else {
      setScrollState(
        false
      )
    }
  }

  useEffect(() => {
    // Set the state to true after the component mounts to trigger the transition
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 0); // Immediate effect after mount

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (whiteCurtainInView) {
      setFixedPosition({
        transition: 'transform 4s',
        transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.98)',
        // transitionDelay: '0.1s',
        transform: "translateY(-200%)",
      })
    }
  }, [whiteCurtainInView])
  useEffect(() => {
    if (whiteCurtainInView2) {
      setFixedPosition2({
        transition: 'transform 4s',
        transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.98)',
        // transitionDelay: '0.1s',
        transform: "translateY(-200%)",
      })
    }
  }, [ whiteCurtainInView2])
  useEffect(() => {
    if (whiteCurtainInView3) {
      setFixedPosition3({
        transition: 'transform 4s',
        transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.98)',
        // transitionDelay: '0.1s',
        transform: "translateY(-200%)",
      })
    }
  }, [ whiteCurtainInView3])
  useEffect(() => {
    if (whiteCurtainInView4) {
      setFixedPosition4({
        transition: 'transform 4s',
        transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.98)',
        // transitionDelay: '0.1s',
        transform: "translateY(-200%)",
      })
    }
  }, [ whiteCurtainInView4])
  useEffect(() => {
    if (whiteCurtainInView5)
    setFixedPosition5({
      transition: 'transform 4s',
      transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.98)',
      // transitionDelay: '0.1s',
      transform: "translateY(-200%)",
    })
  }, [ whiteCurtainInView5])

  useEffect(() => {
    const handleScroll = () => {
      setScrollData(prevState => {
        return {
          y: window.scrollY,
          lastY: prevState.y
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    
  }, [])

  useEffect(() => {
    setOneTimeCurtain ({
      transition: 'transform 4s',
      transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.6, 0.88)',
      transform: "translateY(-200%)",
      transitionDelay: '2.2s',
    })
    if(scrollData.y > scrollData.lastY) {
      setScrollState(
        true
      )
      setScrollState2(
        true
      )
    } else {
      setScrollState(
        false
      )
      setScrollState2(
        false
      )
    }
  }, [scrollData]);

  window.onscroll = function() {
    for (let i = 0; i <= 450; i += 10) {
      if ((window.scrollY >= i && window.scrollY <= (i+=10)) && (scrollData.y > scrollData.lastY)) {
      return (
        window.scrollTo({
          top: windowHeight,
          behavior: 'smooth',
        }),
        setVideoText({
          transition: 'transform 1s',
          transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.98)',
          transform: "translateY(-300px)",
        }),
        setVideoTextHide2({
          transition: 'transform 1s',
          transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.98)',
          transform: "translateY(400px)",
          transitionDelay: '0.4s'
        }),
        setBlackCurtain({
          transition: 'transform 2s',
          transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.6, 0.88)',
          transform: "translateY(-200%)",
          transitionDelay: '0.4s'
        }),
        setImgText({
          transition: 'transform 3s',
          transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.6, 0.88)',
          transform: "translateY(0)",
          transitionDelay: '0.4s'
        })
        )
      }
    } 

    if (((window.scrollY > 550 && window.scrollY <= 650) ||
    (window.scrollY > 450 && window.scrollY <= 550) ||
    (window.scrollY > 650 && window.scrollY <= 750))
      // (window.scrollY > 750 && window.scrollY <= 850))
      && (scrollData.y < scrollData.lastY)) { 
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setVideoText({
        transition: 'transform 6s cubic-bezier(0.12, 0.01, 0.0.8, 0.98) 0.2s',
        transform: "translateY(0)",
      })
      setVideoTextHide2({
        transition: 'transform 4s cubic-bezier(0.12, 0.01, 0.0.9, 0.90)',
        transform: "translateY(0)",
        transitionDelay: '1.5s',
      })
      setBlackCurtain({
        // transition: 'transform 4s',
        // transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.78)',
        transform: "translateY(0)",
        transitionDelay: '0.6s'
      })
      setImgText({
        transition: 'transform 0.4s',
        transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.78)',
        transform: "translateY(200%)",
        // transitionDelay: '1s'
      })
    }
    if (window.scrollY <= 300 && (scrollData.lastY > scrollData.y)) {
      setVideoText({
        transition: 'transform 6s cubic-bezier(0.12, 0.01, 0.0.8, 0.98) 0.2s',
        transform: "translateY(0)",
      })
      setVideoTextHide2({
        transition: 'transform 4s cubic-bezier(0.12, 0.01, 0.0.9, 0.90)',
        transform: "translateY(0)",
        transitionDelay: '1.5s',
      })
    }
    if (window.scrollY > windowHeight) {
      setImgText({
        transition: 'transform 0.4s',
        transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.8, 0.78)',
        transform: "translateY(200%)",
        transitionDelay: '1s'
      })
      setBlackCurtain ({
        transition: 'transform 2s',
        transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.6, 0.88)',
        transform: "translateY(-200%)",
        transitionDelay: '0.4s'
      })
      setImgText({
        transition: 'transform 3s',
        transitionTimingFunction: 'cubic-bezier(0.12, 0.01, 0.0.6, 0.88)',
        transform: "translateY(0)",
        transitionDelay: '0.4s'
      })
    } 
  }

  return (
    <Fragment>
      <div className=''>
        <div className='fixed top-0 w-full scroll-smooth nav z-30 bg-black text-neutral-50'>
          <div className='bg-black inline-block w-full' onMouseOver={ menuMouseOver } onMouseLeave={ menuMouseLeave }>
            <div className='md:block hidden invisibleWall h-36 fixed z-30 w-full opacity-0'> </div>
            <div className='flex justify-between items-center'>
              <ul className='ml-2 md:ml-8 text-[0.5rem] sm:text-xs inline-flex navScroll z-50' style={scrollState ? scrollHide : scrollShow}>
                <li className='px-2 hover:text-neutral-50 text-neutral-300'><a href="./">Deutsh</a></li>
                <li className='px-2 hover:text-neutral-50 text-neutral-300'><a href="./">English</a></li>
              </ul>
              <div className='bg-black inline-flex m-auto w-full z-50 top-0 items-center md:py-2'>
                {/* <Logo className='w-[2.45rem] m-auto'/> */}
                <div className='md:w-60 sm:h-16 h-12 m-auto overflow-hidden items-center justify-center flex'>
                  <a href="./">
                    <video className='md:h-32 h-16' src={logoAnimation} autoPlay muted></video>
                  </a>
                </div>
              </div>
              <ul className='mr-2 md:mr-8 sm:text-xs text-[0.5rem] inline-flex navScroll z-50' style={scrollState ? scrollHide : scrollShow} >
                <li className='px-2 hover:text-neutral-50 text-neutral-300'><a href="./">Search</a> </li>                                                                                                                                                                             
                <li className='px-2 hover:text-neutral-50 text-neutral-300'><a href="./">Login</a></li>
              </ul>
            </div>
          </div>
          <div onMouseOver={ menuMouseOver } onMouseLeave={ menuMouseLeave } className='hidden md:block bg-black py-3 opacity-80 absolute w-full z-40' style={scrollState ? scrollHide : scrollShow}>
            <ul className='flex space-x-16 text-xs md:text-[0.8rem] justify-center items-center z-40'>
              <li><a href="./">Art & Culture</a></li>
              <li><a href="./">Sustainability</a></li>
              <li><a href="./">Design</a></li>
              <li><a href="./">Innovation</a></li>
              <li><a href="./">Exclusive</a> </li>
              <li><a href="./">Vehicles</a></li>
            </ul>
          </div>
        </div>

        <div className='w-full firstContainer overflow-hidden '>
          <div className='firstSection h-[100dvh]'>
            <video className='object-cover w-full h-[100dvh]' src={carVideo} autoPlay loop muted></video>
            <div className='w-full absolute top-0 z-[1] h-[100dvh] bg-black' style={oneTimeCurtain}></div>
            <div className='vignette w-full h-[110dvh]'></div>
            <div className='md:hidden block absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 overflow-hidden text-neutral-200'>
              <div className='text-3xl font-[400] font-videoText text-nowrap' style={scrollState2 ? videoTextHide : videoTextShow}>The Geländewagen. Electrified.</div>
              <div className='flex flex-col'>
                <div className='mt-8 text-base text-nowrap m-auto' style={videoText}>The all-new electric G-Class.</div>
                <div className='m-auto'>
                  <button className='bg-neutral-50 hover:bg-blue-900 text-neutral-950 hover:text-neutral-50 px-4 py-2 mt-4 rounded-2xl text-xs' style={videoText}>Discover more ﹥</button>  
                </div>
              </div>
            </div>
            <div className='md:block hidden absolute top-[13rem] left-14 overflow-hidden text-neutral-200'>
              <div className='text-5xl font-[300] font-videoText' style={scrollState2 ? videoTextHide : videoTextShow}>The Geländewagen. Electrified.</div>
              <div className='mt-10 text-xl' style={videoText}>The all-new electric G-Class.</div>
              <button className='bg-neutral-900 hover:bg-blue-900 px-4 py-2 mt-4 rounded-2xl text-xs' style={videoText}>Discover more ﹥</button>          
            </div>
            <div className='absolute bottom-[3dvh] md:left-14 left-0 overflow-hidden text-neutral-200'>
              <div className='md:text-sm font-light font-videoText text-xs text-center' style={videoTextHide2}>Mercedes-Benz G 580 mit EQ Technologie: Energieverbauch kombiniert: 30,3-27,7 kWh/100 kmCO₂-Emissionen kombiniert: 0 g/kmCO₂-Klasse(n): A</div>
            </div>
          </div> 
          <div className='secondSection h-[110dvh]'>
            <div className='relative overflow-hidden'>
              <div className='w-full absolute top-0 z-20 h-[100dvh] opacity-95 bg-black' style={blackCurtain}></div> 
              <img className='w-full h-[110dvh] object-cover' src={videoPic} alt="" />
              <div className='absolute top-[17rem] left-28 overflow-hidden text-neutral-200 z-20 hidden md:block'>
                <div className='text-[2.5rem] font-videoText font-light' style={imgText}>The Geländewagen</div>
                <a href="./"><button className='bg-neutral-900 hover:bg-blue-900 px-4 py-2 mt-4 rounded-2xl text-xs' style={imgText}>Discover more ﹥</button></a>
              </div>
              <div className='md:hidden absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 overflow-hidden text-neutral-200 z-20'>
                <div className='text-[2rem] md:text-3xl font-videoText font-light text-center' style={imgText}>The Geländewagen</div>
                <div className='m-auto w-full flex justify-center'>
                  <a href="./"><button className='bg-neutral-50 hover:bg-blue-900 text-neutral-950 hover:text-neutral-50 px-4 py-1 mt-4 rounded-2xl text-xs ' style={imgText}>Discover more ﹥</button></a>
                </div>
              </div>
              <div className='absolute text-sm align-center px-28 bottom-[12dvh] overflow-hidden text-neutral-200'>
                <div className='hidden md:block text-md font-videoText font-light' style={imgText}>Mercedes-Benz G 450 d: Energieverbauch kombiniert: 10‒8,7 l/100 kmCO₂-Emissionen kombiniert: 261‒227 g/kmCO₂-Klasse(n): G¹Mercedes-AMG G 63: Energieverbauch kombiniert: 15,7‒14,7 l/100 kmCO₂-Emissionen kombiniert: 358‒335 g/kmCO₂-Klasse(n): G¹Mercedes-Benz G 500: Energieverbauch kombiniert: 12,3‒10,9 l/100 kmCO₂-Emissionen kombiniert: 347‒334 g/km¹CO₂-Klasse(n): G¹</div>
              </div>
              <div className='vignette w-full h-[110dvh]'></div>
            </div>
          </div>
        </div>
        <div className='mainBody bg-neutral-50 text-zinc-900 font-cardText'>
          <div className='mainCard md:w-[82%] lg:w-[70%] md:h-[1700px] h-[2700px] w-[90%] m-auto'>
            <div className='card1 md:mb-32 float-left md:w-[35%] w-[50%] min-w-[300px] overflow-hidden relative'>
              <div className='mt-28 mb-4 md:text-3xl font-normal stretchText text-2xl'>
              <div className='text-xs mb-4 font-[500] md:hidden font-sans'>Art</div>
                <div>MayBach X</div>
                <div>David LaCHapelle</div>
              </div>
              <div ref={whiteCurtain} className='overflow-hidden relative'>
                <div className='absolute w-full z-1 bg-neutral-50 h-[150vh]' style={ fixedPosition} ></div>
                <img className='w-full object-cover aspect-[3/4]' src={cardImg1} alt=''/>
              </div>
            </div>
            <div className='clear-both md:hidden'></div>
            <div className='card2 md:mb-32 float-right md:w-[46%] w-[50%] min-w-[300px] overflow-hidden relative'>
              <div className='md:mt-[95%] mt-[20%] mb-4 md:text-3xl font-normal stretchText text-2xl'>
                <div className='text-xs mb-4 font-[500] md:hidden font-sans'>Vehicles</div>
                <div>Freedom Drives Us.</div> 
              </div>
              <div ref={whiteCurtain2} className='overflow-hidden relative'>
                <div className='absolute w-full z-1 bg-neutral-50 h-[150vh]' style={fixedPosition2}></div>
                <img className='w-full object-cover aspect-[1.777]' src={cardImg2} alt="" />
              </div>
            </div>
            <div className='clear'></div>
            <div className='card3 mb-12 float-left md:w-[35%] w-[50%] min-w-[300px] overflow-hidden relative'>
              <div className='md:mt-8 mt-20 mb-4 md:text-3xl text-2xl font-normal stretchText'>
                <div className='text-xs mb-4 font-[500] md:hidden font-sans'>Zeitgeist</div>  
                <div>DefiningClass since 1886.</div>
              </div>
              <div ref={whiteCurtain3} className='overflow-hidden relative'>
                <div className='absolute w-full z-1 bg-neutral-50 h-[150vh]' style={ fixedPosition3}></div>
                <img className='w-full object-cover aspect-[1.777]' src={cardImg3} alt="" />
              </div>
            </div>
            <div className='clear-both md:hidden'></div>
            <div className='card4 mb-12 float-right md:w-[45%] w-[60%] min-w-[300px] overflow-hidden relative'>
              <div className='mt-8 mb-4 md:text-3xl font-normal stretchText text-2xl'>
                <div className='text-xs mb-4 font-[500] md:hidden font-sans'>Innovation</div>
                <div>VISION EQXX – the most efficient Mercedes‑Benz ever built.</div>
              </div>
              <div ref={whiteCurtain4} className='overflow-hidden relative'>
                <div className='absolute w-full z-1 bg-neutral-50 h-[150vh]' style={fixedPosition4}></div>
                <img className='w-full object-cover aspect-[3/4]' src={cardImg4} alt="" />
              </div>
            </div>
            <div className='md:clear-left clear-both'></div>
            <div className='card5 mb-12 float-left md:w-[35%] w-[50%] min-w-[300px] overflow-hidden'>
              <div className='mt-8 mb-4 md:text-3xl text-2xl font-normal stretchText'>
                <div className='text-xs mb-4 font-[500] md:hidden font-sans'>Responsibility</div>
                Inclusion is unstoppable.
              </div>
              <div ref={whiteCurtain5} className='overflow-hidden relative'>
                <div className='absolute w-full z-1 bg-neutral-50 h-[150vh]' style={fixedPosition5}></div>
                <img className='w-full object-cover aspect-[3/4]' src={cardImg5} alt="" />
              </div>
            </div>
            <div className='clear-both'></div>
          </div>
        </div>
        <div className='sm:grid grid-cols-3 md:p-24 p-10 m-auto desertContainer bg-neutral-950 text-neutral-50 block w-full'>
          <div className='sm:w-[65%] w-full'>
            <div className='md:mb-28 sm:mb-16 mb-10'>
              <div className='mb-8 lg:text-sm text-xs'>Inspired by the sense of freedom.</div>
              <div className='font-cardText md:text-6xl text-3xl stretchText'>Masterpiece in the desert.</div>
            </div>
            <div>
              <div className='md:text-sm text-xs'>Interior designer John Vugrin has dedicated his career to a house that is making architectural history. A journey through the California desert.</div>
              <button className='bg-neutral-100 hover:bg-blue-900 px-4 py-2 mt-10 rounded-2xl text-xs text-gray-900 hover:text-neutral-100 sm:mb-0 mb-10'>Discover more ﹥</button>
            </div>
          </div>
          <div className='w-[100%]'>
            <img className='w-full object-cover' src={desertImg} alt="" />
          </div>
        </div>
        <div className='footer w-full bg-neutral-950 text-neutral-400 text-xs'>
          <div className='h-[1px] bg-neutral-600 w-[90%] m-auto'></div>
          <ul className='flex flex-wrap md:gap-x-6 gap-x-4 py-[2rem] mt-[0.5rem] m-auto justify-center md:px-[3rem] px-[1.6rem] text-[0.7rem] gap-y-3'>
            <a href='./'><li className='hover:text-neutral-50'>Provider</li></a>
            <a href='./'><li className='hover:text-neutral-50'>Legal Notice</li></a>
            <a href='./'><li className='hover:text-neutral-50'>Settings</li></a>
            <a href='./'><li className='hover:text-neutral-50'>Privacy</li></a>
            <a href='./'><li className='hover:text-neutral-50'>Contact</li></a>
            <a href='./'><li className='hover:text-neutral-50'>Third Party License Notices</li></a>
            <a href='./'><li className='hover:text-neutral-50'>Don't Sell My Personal Information (CCPA)</li></a>
          </ul>
          <ul className='flex space-x-2 py-[1rem] w-full m-auto justify-center'>
            <li className='px-2 hover:text-neutral-50 text-neutral-400'><a href="./">Deutsh</a></li>
            <div className='text-neutral-300'>|</div>
            <li className='px-2 hover:text-neutral-50 text-neutral-400'><a href="./">English</a></li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default App;