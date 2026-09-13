import { Bounce, toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/technology";

interface ITechnologyCardProps {
  technology: ITechnology;
  cart: ITechnology[];
  setCart: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  technology,
  cart,
  setCart,
}: ITechnologyCardProps) => {

  // Check if technology is already added
  const isAdded = cart.some(
    (item) => item.id === technology.id
  );

  // Add technology to stack
  const handleAddToCart = () => {

    // Prevent duplicate
    if (isAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`,
        {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        }
      );

      return;
    }

    // Add technology
    setCart([...cart, technology]);

    // Success message
    toast.success(
      `${technology.name} added to stack!`,
      {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      }
    );
  };

  return (
    <div className="
      bg-white
      border border-gray-100
      rounded-2xl
      p-4
      shadow-sm
      hover:shadow-md
      transition
      duration-300
    ">

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
      <div
        onClick={() => {
          if (isAdded) {
            toast.warning(
              `${technology.name} is already in your stack!`,
              {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
              }
            );
          }
        }}
        className="w-full"
      >
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`
            w-full
            mt-3
            text-white
            py-2
            rounded-lg
            text-xs
            font-medium
            transition
            duration-300
            ${
              isAdded
                ? "bg-gray-400 cursor-not-allowed pointer-events-none"
                : "bg-[#080d19] hover:bg-gray-800"
            }
          `}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>

    </div>
  );
};

export default TechnologyCard;