import LuxuriousSectionImage from "../../../assets/images/LuxuriousSectionImage.webp";
import LuxuriousRoom1 from "../../../assets/images/LuxuriousRoom1.webp";
export default function LuxuriousSection() {
  const rooms = [
    {
      image: LuxuriousRoom1,
      alt: "Luxurious room with modern amenities",
      features: "Television set, Extra sheets and Breakfast",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Elegant hotel room with comfortable bedding",
      features: "Television set, Extra sheets and Breakfast",
    },
    {
      image: LuxuriousRoom1,
      alt: "Spacious luxurious room with city view",
      features: "Television set, Extra sheets and Breakfast",
    },
  ];
  return (
    <section
      style={{
        backgroundImage: `url(${LuxuriousSectionImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="flex items-center justify-center w-full "
    >
      <div className="flex flex-col items-center justify-between w-full h-full bg-black/50 px-4 py-30 sm:px-6 lg:px-8  ">
        <div className="flex flex-col items-center justify-between w-full lg:max-w-[100rem] h-full ">
          <div className="flex justify-center mb-10 ">
            <div className="flex flex-col gap-2 items-center text-white">
              <h2 className="text-4xl font-medium">Luxurious Rooms</h2>
              <div className="w-50 h-1 rounded-full m-auto bg-orange-600"></div>
              <p className="text-gray-100">All room are design for your comfort</p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-50 w-full px-4 place-items-center">
            {rooms.map((room, index) => (
              <li
                key={index}
                className="group relative bg-white dark:bg-gray-900 p-6 rounded-2xl w-full hover:scale-[1.03] transition-transform duration-500 shadow-xl max-w-100"
              >
                <div className="flex flex-col h-full relative">
                  <div>
                    <h2 className="absolute top-3 end-3 bg-orange-600 text-white px-3 py-1 font-medium rounded-xl z-10 ">
                      2 Rooms available
                    </h2>
                  </div>

                  <img
                    src={room.image}
                    alt={room.alt}
                    className="w-full aspect-square object-cover rounded-xl"
                    width={350}
                    height={350}
                    loading={index > 0 ? "lazy" : "eager"}
                  />

                  <p className="mt-4 text-gray-900 dark:text-white text-lg font-medium transition duration-300">
                    {room.features}
                  </p>
                </div>
                <div className="absolute bg-black/10 h-0 w-full top-0 left-0 group-hover:bottom-0 group-hover:h-full duration-1000"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
