import { use } from "react";
import type { ITechnology } from "../../types/technology";
interface ITechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {

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

            {data.map((technology) => (

              <div
                key={technology.id}
                className="
                  bg-white
                  border border-gray-100
                  rounded-2xl
                  p-4
                  shadow-sm
                  hover:shadow-md
                  transition
                  duration-300
                "
              >

                {/* Icon + Badge */}
                <div className="flex justify-between items-start">

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-9 h-9 object-contain"
                  />

                  <span className="
                    bg-blue-50
                    text-blue-500
                    px-2.5
                    py-1
                    rounded-full
                    text-[10px]
                    font-medium
                  ">
                    {technology.badge}
                  </span>

                </div>


                {/* Technology Name */}
                <h3 className="
                  text-base
                  font-bold
                  text-gray-800
                  mt-3
                ">
                  {technology.name}
                </h3>


                {/* Description */}
                <p className="
                  text-xs
                  text-gray-400
                  leading-5
                  mt-1
                  min-h-[40px]
                ">
                  {technology.description}
                </p>


                {/* Category + Difficulty + Rating */}
                <div className="
                  flex
                  justify-between
                  items-center
                  mt-4
                  text-[10px]
                ">

                  {/* Category */}
                  <span className="
                    bg-gray-100
                    text-gray-500
                    px-2
                    py-1
                    rounded
                  ">
                    {technology.category}
                  </span>


                  {/* Difficulty */}
                  <span className="text-gray-400">
                    {technology.difficulty}
                  </span>


                  {/* Rating */}
                  <span className="text-gray-500">
                    ⭐ {technology.rating}
                  </span>

                </div>


                {/* Add to Stack Button */}
                <button
                  className="
                    w-full
                    mt-3
                    bg-[#080d19]
                    text-white
                    py-2
                    rounded-lg
                    text-xs
                    font-medium
                    hover:bg-gray-800
                    transition
                    duration-300
                  "
                >
                  Add to Stack
                </button>

              </div>

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
              0 Technology Selected
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