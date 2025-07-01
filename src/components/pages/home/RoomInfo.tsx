import { useState } from "react";
import { MapPin, Users, Bed, Calendar } from "lucide-react";

const locations = ["Cairo", "Alex", "Aswan", "Gouna"] as const;
const roomTypes = ["Standard", "Deluxe", "Suite"] as const;
const guestOptions = [1, 2, 3, 4, 5] as const;

type Location = (typeof locations)[number];
type RoomType = (typeof roomTypes)[number];
type Guests = (typeof guestOptions)[number];

interface FormData {
  location: Location;
  roomType: RoomType;
  guests: Guests;
  checkInDate: string;
  checkOutDate: string;
}

interface FormErrors {
  checkInDate?: string;
  checkOutDate?: string;
}

export default function RoomInfo() {
  const [formData, setFormData] = useState<FormData>({
    location: locations[0],
    roomType: roomTypes[0],
    guests: guestOptions[0],
    checkInDate: "",
    checkOutDate: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.checkInDate)
      newErrors.checkInDate = "Check-in date is required";
    if (!formData.checkOutDate)
      newErrors.checkOutDate = "Check-out date is required";
    if (formData.checkInDate && formData.checkOutDate) {
      if (new Date(formData.checkInDate) >= new Date(formData.checkOutDate)) {
        newErrors.checkOutDate = "Check-out must be after check-in";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Submit logic here
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="hidden lg:flex absolute bottom-20 left-0 right-0 z-10 bg-white dark:bg-gray-800 shadow-lg p-4 md:p-6">
      <form onSubmit={handleSubmit} className="container mx-auto" noValidate>
        <div className="flex flex-wrap items-end gap-4 justify-between">
          {/* Location */}
          <div className="flex items-start gap-3 min-w-20 max-w-30 flex-1">
            <MapPin className="text-gray-500 w-5 h-5" aria-hidden="true" />
            <div className="w-full">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Location
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md  dark:border-gray-600 bg-white dark:bg-gray-700/50 p-1 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              >
                {locations.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Room Type */}
          <div className="flex items-start gap-3 min-w-20 max-w-30 flex-1">
            <Bed className="text-gray-500 w-5 h-5" aria-hidden="true" />
            <div className="w-full">
              <label
                htmlFor="roomType"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md  dark:border-gray-600 bg-white dark:bg-gray-700/50 p-1 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              >
                {roomTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-start gap-3 min-w-20 max-w-30 flex-1">
            <Users className="text-gray-500 w-5 h-5" aria-hidden="true" />
            <div className="w-full">
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md  dark:border-gray-600 bg-white dark:bg-gray-700/50 p-1 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              >
                {guestOptions.map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Check-in */}
          <div className="flex items-start gap-3 min-w-20 max-w-30 flex-1">
            <Calendar className="text-gray-500 w-5 h-5" aria-hidden="true" />
            <div className="w-full">
              <label
                htmlFor="checkInDate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Check-in
              </label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                min={today}
                className={`mt-1 block w-full rounded-md  ${
                  errors.checkInDate ? "border-red-500" : ""
                } bg-white dark:bg-gray-700/50 p-1 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
              />
              {errors.checkInDate && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.checkInDate}
                </p>
              )}
            </div>
          </div>

          {/* Check-out */}
          <div className="flex items-start gap-3 min-w-20 max-w-30 flex-1">
            <Calendar className="text-gray-500 w-5 h-5" aria-hidden="true" />
            <div className="w-full">
              <label
                htmlFor="checkOutDate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Check-out
              </label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                min={formData.checkInDate || today}
                className={`mt-1 block w-full rounded-md  ${
                  errors.checkOutDate ? "border-red-500" : ""
                } bg-white dark:bg-gray-700/50 p-1 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
              />
              {errors.checkOutDate && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.checkOutDate}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="flex-1 sm:flex-none self-center">
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              aria-label="Book your room"
            >
              Book Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
