import React from 'react';
import { Bounce, toast } from 'react-toastify';
import type { ITechnology } from '../../types/technology';

interface ITechnologyCardProps {
    technology: ITechnology;
    cart: ITechnology[];
    setCart: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({ technology, cart, setCart }: ITechnologyCardProps) => {
    const handleAddToCart = (technology: ITechnology) => {
        setCart([...cart, technology]);
        toast.success(`${technology.name} added to cart!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    };

    return (
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
                onClick={() => handleAddToCart(technology)}
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
    );
};

export default TechnologyCard;