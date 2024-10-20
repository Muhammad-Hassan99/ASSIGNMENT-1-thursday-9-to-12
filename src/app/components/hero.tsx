import Image from "next/image"
export default function Hero(){
    return <>
    <div className="bg-blue-400 h-[400px]">  
        <div className="  flex justify-center items-center  ">   
        <h1 className="text-4xl text-white font-bold font-">WELCOME TO HOME PAGE</h1> 
        <Image src="/nomial4.jpg" width={300} height={400} alt="ajkxnjkh" className="m-5 rounded-full"/>
    </div>
    
    </div>
  
    </>

}