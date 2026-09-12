import { use, useState } from "react";
import type { ITechnology } from "../../types/technology";
import { Bounce, toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
interface ITechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {
  const[cart,setCart]=useState<ITechnology[]>([]);
  const data = use(technologiesPromise);

 

  return (
    <div className="my-20 max-w-6xl mx-auto px-4">

      {/* Section Title */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-800">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>

      </div>


      {/* Technology Cards + Your Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">


        {/* Technology Cards */}
        <div className="lg:col-span-9">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {data.map((technology) => 
            (

              <TechnologyCard
                key={technology.id} 
                technology={technology} 
                cart={cart}
                setCart={setCart}
              />

            ))}

          </div>

        </div>


        {/* Your Stack */}
        <div className="lg:col-span-3">

          <div className="
            bg-white
            border border-gray-100
            rounded-2xl
            p-4
            shadow-sm
          ">

            <h3 className="text-sm font-bold text-gray-800">
              Your Stack
            </h3>

            <p className="text-[10px] text-gray-400 mt-1">
              {cart.length} Technology Selected
            </p>

            {/* Empty State */}
            <div className="
              flex
              items-center
              justify-center
              min-h-[150px]
              text-center
            ">

              <p className="text-xs text-gray-400">
                No technologies selected yet.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Technologies;