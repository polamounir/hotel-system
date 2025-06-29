import "./App.css";
import { useAppSelector } from "./app/hooks";

function App() {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div>
      {!user && (
        <div>
          <h2 className="text-red-500 text-5xl">No UserFound</h2>
        </div>
      )}
    </div>
  );
}

export default App;
