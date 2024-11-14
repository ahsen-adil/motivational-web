import { FaBrain, FaMountain, FaUnlock, FaClock, FaRedo, FaEye } from 'react-icons/fa'
import image from "../../images/motivation.png"
import image1 from "../../images/you-can-do-it.png"
import Image from 'next/image'

export default function Tips(){
    return(
        <>
      <section className="text-gray-600 body-font">
      <h1 className="text-4xl font-bold title-font text-gray-900 mt-8 text-center font-sans">
      6 Key Steps to Achieve Success and Growth    </h1>
  <div className="container px-5 py-2 mx-auto flex flex-wrap">
    
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">

        {/* Step 1 */}
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <FaBrain className="w-5 h-5" />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
              Step 1: Embrace Growth Over Perfection
            </h2>
            <p className="leading-relaxed">
              Strive to be better each day; growth is a journey, not a destination.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <FaMountain className="w-5 h-5" />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
              Step 2: Challenge Your Comfort Zone
            </h2>
            <p className="leading-relaxed">
              Greatness begins where comfort ends. Step into the unknown to unlock potential.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <FaUnlock className="w-5 h-5" />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
              Step 3: Believe in Possibilities, Not Limitations
            </h2>
            <p className="leading-relaxed">
              Shift from “I can’t” to “How can I?” to transform barriers into opportunities.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <FaClock className="w-5 h-5" />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
              Step 4: Focus on Consistency, Not Intensity
            </h2>
            <p className="leading-relaxed">
              Small, steady efforts create big changes. Show up daily, and let progress compound.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <FaRedo className="w-5 h-5" />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
              Step 5: Turn Failures into Fuel
            </h2>
            <p className="leading-relaxed">
              Every setback is a setup for a comeback. Learn, adapt, and return stronger.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <FaEye className="w-5 h-5" />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
              Step 6: Visualize Your Success Daily
            </h2>
            <p className="leading-relaxed">
              Imagine your goals as already achieved. Seeing is believing, and belief fuels action.
            </p>
          </div>
        </div>
      </div>
      <Image src={image1} alt='img' className="lg:ml-[100px] w-[500px] h-[700px]"
      />
    </div>
  </div>
</section>
        </>
    )
}