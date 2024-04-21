import React from 'react'

const Lp = () => {
  return (
    <div className='w-full max-h-screen h-screen flex flex-col bg-slate-50'>
        <div className="flex-1">

        </div>
        <div className='flex flex-col  w-full bg-slate-400 '>
            <div className='flex-1'>Hello</div>
            <div className='flex overflow-hidden'>
                <figure className='img-scroll w-screen h-auto aspect-[1280/280]'>
                    <img src="./src/assets/img/img_scroll.jpg" className='h-full w-full object-contain object-' width={1280} height={280} loading='eager' alt="" />
                </figure>
                <figure className='img-scroll w-screen h-auto aspect-[1280/280]'>
                    <img src="./src/assets/img/img_scroll.jpg" className='h-full w-full object-contain object-' width={1280} height={280} loading='eager' alt="" />
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Lp