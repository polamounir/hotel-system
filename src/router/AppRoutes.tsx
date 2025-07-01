import { Suspense } from "react";
import { Route, Routes } from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import HomePage from "../pages/public/HomePage";
import { toast } from "sonner";

const AppRoutes = () => {
    toast.success("ALLLLLLL DONE")
    
   return (
    <Suspense
      fallback={
        <div>
          <h2>Loading ...</h2>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/ss" element={<HomePage />} />
          <Route path="/aa" element={<HomePage />} />

        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
