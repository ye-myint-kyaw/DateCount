import { useRef, useState } from "react"

const Valentine = () => {
  const noBtnRef = useRef<HTMLButtonElement>(null);
  const [page, setPage] = useState<number>(1);
  const handleMove = ()=>{
    if(noBtnRef.current){
      const x = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 120 + 100); // Ensures at least ±180px movement
      const y = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 60 + 50);   // Ensures at least ±40px movement
      
      noBtnRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
  const handlePage=(pageNumber:number)=>{
    setPage(pageNumber)
  }
  return (
    <div className="w-full bg-neutral-950 h-dvh flex items-center justify-center px-3">
      <div className="rounded-xl bg-white shadow-2xl shadow-pink-600 py-6 px-5 min-w-[300px] max-w-[500px]">
        {page===1?<>
          <h1 className="font-bold text-2xl capitalize text-center font-love text-pink-600 tracking-wider">Bae, will you be my valentine?</h1>
          <figure className="w-[50%] max-w-[300px] mx-auto mt-5 mb-6">
            <img src="/be-mine.png" width="512" height="512" alt="Love you" />
          </figure>
          <div className="flex justify-center items-center gap-2" >
            <button className="yes-btn flex items-center justify-center gap-1 rounded-md bg-pink-600 hover:bg-pink-400 transition-all text-white flex-1 py-2 font-love" onClick={handlePage.bind(null, 2)}>Yes</button>
            <button className="rounded-md bg-black text-white transition flex-1 py-2 font-love"  ref={noBtnRef} onClick={handleMove} onMouseEnter={handleMove}>No</button>
          </div>
        </>:page===2?<>
          <h1 className="font-bold text-2xl capitalize text-center font-love text-pink-600 tracking-wider">Yes? yayy~~ <br/>I love you so much, bae. </h1>
          <figure className="w-[40%] max-w-[300px] mx-auto mt-5 mb-6">
            <img src="/love-message.png" width="512" height="512" alt="Love you" />
          </figure>
          <div className="flex justify-center items-center gap-2" >
            <button className="flex items-center justify-center gap-1 rounded-md bg-pink-600 hover:bg-pink-400 transition-all text-white flex-1 py-2 font-love" onClick={handlePage.bind(null, 3)}>Open Letter</button>
          </div>
        </>:<>
          <figure className="w-[40%] max-w-[300px] mx-auto mt-5 mb-6">
            <img src="/love-letter.png" width="512" height="512" alt="Love you" />
          </figure>
          <p className="font-love tracking-wider">
            Nang, it's been a long time since we last met, <br/> and I miss you so much. <br/>
            Sometimes, when I dream about you, <br/> I wish I could stay in that dream forever. <br/> 
            I know you miss me just as much as I do, and <br/>
            I believe that one day, we’ll be together,<br/> with no mile between us. <br/>
            My love, I can't wait to hold you tight.<br/>
            Happy Valentine's day. 🍫<br/> <span className="font-myanmar">အများကြီးချစ်တယ် နန်း။ ❤️</span> 
          </p>
        </>}
        
      </div>
    </div>
  )
}

export default Valentine