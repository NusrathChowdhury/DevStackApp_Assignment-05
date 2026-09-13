import { use, useState } from "react";
import { toast } from "react-toastify";

import type { ITechnology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";

interface ITechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {
  const [cart, setCart] = useState<ITechnology[]>([]);
  const data = use(technologiesPromise);

  // Remove one technology
  const handleRemove = (id: string) => {
  const removedTechnology = cart.find(
    (technology) => technology.id === id
  );

  setCart(cart.filter((technology) => technology.id !== id));

  if (removedTechnology) {
    toast.info(
      `${removedTechnology.name} removed from your stack!`,
      {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      }
    );
  }
};

  // Remove all technologies
  const handleRemoveAll = () => {
  setCart([]);

  toast.info("All technologies removed from your stack!", {
    position: "top-center",
    autoClose: 3000,
    theme: "colored",
  });
};

  return (
    <div className="my-20 max-w-6xl mx-auto px-4">

      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore{" "}
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

          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">

            {/* Your Stack Heading */}
            <h3 className="text-sm font-bold text-gray-800">
              Your Stack
            </h3>

            {/* Selected Count */}
            <p className="text-[10px] text-gray-400 mt-1">
              {cart.length} Technology Selected
            </p>

            {/* Empty State */}
            {cart.length === 0 ? (

              <div className="flex items-center justify-center min-h-[150px] text-center">
                <p className="text-xs text-gray-400">
                  No technologies selected yet.
                </p>
              </div>

            ) : (

              /* Selected Technologies */
              <div className="mt-4 space-y-3">

                {cart.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 border border-gray-100 rounded-lg p-2"
                  >

                    {/* Icon */}
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-8 h-8 object-contain"
                    />

                    {/* Name + Category */}
                    <div className="flex-1">
                      <h4 className="text-xs font-semibold">
                        {technology.name}
                      </h4>

                      <p className="text-[10px] text-gray-400">
                        {technology.category}
                      </p>
                    </div>

                    {/* Remove One */}
                    <button
                      onClick={() => handleRemove(technology.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      ✕
                    </button>

                  </div>
                ))}

                {/* Remove All */}
                <button
                  onClick={handleRemoveAll}
                  className="w-full mt-4 border border-red-200 text-red-500 py-2 rounded-lg text-xs font-medium hover:bg-red-50"
                >
                  Remove All
                </button>

              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Technologies;
