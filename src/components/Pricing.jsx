import { pricingOptions } from "../constants/data"
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-20" id="pricing">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
            Pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((options) => (
                <div key={options.price} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                   <div className="p-10 border border-neutral-700 rounded-xl">
                    <p className="text-4xl mb-8">
                        {options.title}
                        {options.title === "Pro" && (
                            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                (Most Popular)
                            </span>
                        )}
                    </p>
                    <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{options.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {options.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-500 border border-blue-700 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
                    </div> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing