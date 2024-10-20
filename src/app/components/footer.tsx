export default function Footer(){

    return <>
    <div className="bg-blue-400 h-60 flex justify-center text-2xl space-x-14 ">
        <div className="">
            <ul className="font-semibold space-y-6 text-white">
                <li>
                    HOME
                </li>
                <li>
                    ABOUT
                </li>
                <li>
                    CONTACT
                </li>
                <li>
                    COURSES
                </li>
            </ul>
        </div>
        <div className="font-semibold space-y-6 text-white" >
            <h1>Privay Policy</h1>
            <h1>Terms and Conditions</h1>
        </div>
     <div className="mt-14 ">       
             <input type="text" />
             <button className="border-2 border-orange-600 font-semibold">SUBSCRIBE</button>
     </div>

    </div>
    </>
}