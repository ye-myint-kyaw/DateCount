import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from 'react'
import ProcessBar from '../ProcessBar/ProcessBar';
import Loading01 from "../../assets/img/img_loading01.jpg"
import Loading02 from "../../assets/img/img_loading02.jpg"
import Loading03 from "../../assets/img/img_loading03.jpg"
import Loading04 from "../../assets/img/img_loading04.jpg"
import Arrow from "../../assets/img/img_arrow.png"

const LoadingPage = () => {
    useGSAP(() => {

        // images
        const images = gsap.utils.toArray(".image");
        gsap.from(images, {
          yPercent:100, stagger:.9, duration:3
        })
        
        // arrow
        const arrowTl = gsap.timeline();
        arrowTl.to(".arrow",{
          left: "calc(100% - 60px)",
          delay:.5,
          duration:5.5,
          ease:"none"
        })
        .to(".arrow",{
          rotate:155
        })
        .to(".arrow",{
          left:"calc(50% - 30px)",
          bottom:"-15vh",
        })
        .to(".arrow",{
          rotate:270,
        })
        .to(".arrow",{
          y:"-50",
          duration:3
        })
        .to(".loading",{
          y:"-100vh",
          duration:3
        },"<")

        // percentage
        gsap.to(".percentage",{
            textContent: "100%",
            duration: 6,
            roundProps: "textContent", // Ensure that the text is rounded to whole numbers
            ease: "none"
        })
      },{})
    
    useEffect(() => {

    },[])
    return (
        <div className="loading absolute top-0 z-20 w-full max-h-screen h-screen flex flex-col px-10 bg-slate-50">
            <div className="flex-1 flex items-end w-full max-w-[1350px] mx-auto">
                <div className="image-inner w-full flex items-end justify-between gap-14 overflow-hidden">
                    <figure className="image w-auto h-full max-h-[297px] aspect-[223/297] ">
                        <img src={Loading01} className="w-full h-full object-contain" width={223} height={297} loading="eager" alt="img one" />
                    </figure>
                    <figure className="image w-auto h-full max-h-[382px] aspect-[249/382]">
                        <img src={Loading02} className="w-full h-full object-contain" width={223} height={382} loading="eager" alt="img one" />
                    </figure>
                    <figure className="image w-auto h-full max-h-[257px] aspect-[309/257]">
                        <img src={Loading03} className="w-full h-full object-contain" width={223} height={257} loading="eager" alt="img one" />
                    </figure>
                    <figure className="image w-auto h-full max-h-[461px] aspect-[263/461]">
                        <img src={Loading04} className="w-full h-full object-contain" width={223} height={461} loading="eager" alt="img one" />
                    </figure>
                </div>
            </div>
            <div className="w-full h-[40vh] max-w-[1350px] mx-auto">
                <ProcessBar/>
                <div className="flex items-center relative gap-3 mt-3">
                    <p className="text-3xl percentage">0%</p>
                    <figure className=" arrow w-fit absolute left-[50px]">
                        <img src={Arrow} width={60} height={9.95} loading="eager" alt="arrow" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage