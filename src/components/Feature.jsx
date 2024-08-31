import { features } from "../constants/data"

const Feature = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]" id="features">
        <div className="text-center">
            <span className="bg-neutral-900 text-blue-700 rounded-full h-6 text-lg font-medium px-5 py-5 uppercase">
                Features
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl mt-10 lg:mt-20 tracking-wide">
                Easily build 
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                    {" "} your code
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature) => (
                <div key={feature.text} className="w-full sm:w-1/2 lg:w-1/3 ">
                    <div className="flex">
                        <div className="flex justify-center items-center rounded-full mx-6 p-2 h-10 w-10 bg-neutral-900 text-blue-700 ">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-xl ">{feature.text}</h5>
                            <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Feature