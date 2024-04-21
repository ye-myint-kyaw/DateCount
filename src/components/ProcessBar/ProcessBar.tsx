import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const ProcessBar = () => {

    useGSAP(()=>{
        gsap.to(".process",{
            width: "100%", duration:6, ease:"none"
        })
    },{})
  return (
    <div className="bg-black w-full h-[1px] mt-10 rounded relative">
        <span className=" process inline-block w-0 h-full bg-yellow-400 absolute"></span>
    </div>
  )
}

export default ProcessBar