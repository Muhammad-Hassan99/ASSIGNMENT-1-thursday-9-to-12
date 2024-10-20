export default function Card (){

    return  <>
  
 <div className="flex  flex-col justify-center items-center h-screen">
<h1 className="text-3xl text-center mb-8 font-extrabold">COURSES</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="border-4 border-blue-500 w-64 p-4 rounded-lg">
          <img src="/card2" alt="Image 1" className="w-full h-40 object-cover rounded-t-lg" />
          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ipsum adipisci dicta libero id esse est.
          </p>
        </div>
        {/* Card 2 */}
        <div className="border-4 border-blue-500 w-64 p-4 rounded-lg">
          <img src="/card3" alt="Image 2" className="w-full h-40 object-cover rounded-t-lg" />
          <p className="mt-4 text-center">
            Provident quam ullam culpa dolores repudiandae quas aperiam odit quibusdam!
          </p>
        </div>
        {/* Card 3 */}
        <div className="border-4 border-blue-500 w-64 p-4 rounded-lg">
          <img src="/card1" alt="Image 3" className="w-full h-40 object-cover rounded-t-lg" />
          <p className="mt-4 text-center">
            Maxime repellendus optio vero accusamus est veritatis mollitia aperiam.
          </p>
        </div>
      </div>
    </div>
    </>
}