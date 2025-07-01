import {
  Wifi,
  Bath,
  Utensils,
  Dumbbell,
  Gamepad,
  Lightbulb,
  Shirt,
  Car,
} from "lucide-react";

export default function FacilitiesSection() {
  const facilities = [
    {
      name: "Wifi",
      icon: <Wifi className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
    },
    {
      name: "Swimming Pool",
      icon: <Bath className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
    },
    {
      name: "Breakfast",
      icon: <Utensils className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
    },
    {
      name: "Gym",
      icon: <Dumbbell className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
    },
    {
      name: "Game Center",
      icon: <Gamepad className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
    },
    {
      name: "24/7 Light",
      icon: <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
    },
    {
      name: "Laundry",
      icon: <Shirt className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
    },
    {
      name: "Parking Space",
      icon: <Car className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
    },
  ];

  return (
    <section className="flex items-center justify-center  w-full dark:bg-gray-800 px-4 py-30 sm:px-6 lg:px-8 ">
      <div className="relative flex flex-col items-center justify-between w-full lg:max-w-[100rem] h-full  ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Facilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We offer modern 5-star hotel facilities for your comfort
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-30 content-between place-content-evenly w-full">
          {facilities.map((item) => (
            <li
              key={item.name}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-gray-500 transition-shadow duration-300 aspect-square"
            >
              <div className="mb-3 ">{item.icon}</div>
              <span className="text-sm lg:text-xl font-medium text-gray-900 dark:text-white text-center">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
