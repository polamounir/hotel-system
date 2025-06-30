import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";

export default function PublicLayout() {
  return (
    <div className="min-h-svh bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 duration-500">
      <Navbar />
      <Outlet />
    </div>
  );
}
