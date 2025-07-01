import { Play } from "lucide-react";
import RoomInfo from "./RoomInfo";

export default function LandingSection() {
  return (
    <div className="flex items-center justify-center h-[60svh] lg:h-[80svh] w-full bg-orange-50 dark:bg-gray-900 pt-10 px-4 py-4 sm:px-6 lg:px-8 ">
      <div className="relative flex flex-col items-center justify-between w-full lg:max-w-[100rem] h-full  ">
        <div className="flex items-center justify-between w-full h-full gap-20">
          <div className="h-full w-full flex flex-col justify-center gap-10 pb-50">
            <div className="flex flex-col gap-5 pe-20">
              <h1 className="text-7xl font-bold text-orange-500">
                HOTEL NAME HERE
              </h1>
              <h2 className="text-6xl font-bold dark:text-white ">
                Hotel for every moment rich in emotion
              </h2>
              <p className="text-gray-500 dark:text-gray-300">
                Every moment feels like the first time in paradise view
              </p>
            </div>
            <div className="flex items-center gap-10">
              <button className="px-8 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-500 transition-colors">
                Book Now
              </button>
              <div className="flex items-center gap-5">
                <button className="h-12 w-12 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-500 transition-colors flex items-center justify-center">
                  <Play />
                </button>
                <span className="text-md font-medium">Take a tour</span>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <img
              src={
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
              className="w-full h-full object-cover"
              width={600}
              height={800}
            />
          </div>
        </div>
        <RoomInfo />
      </div>
    </div>
  );
}
