import { Toaster } from "sonner";
import "./App.css";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <>
      <Toaster
        position="top-left"
        richColors={true}
        closeButton={true}
        visibleToasts={2}
        offset={{ top: "50px", left: "16px" }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
