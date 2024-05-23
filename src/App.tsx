import { useLocation } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      <div className="flex w-full ">
        <div className="sticky  top-0 h-screen ">
          <Sidebar />
        </div>
        <div className="w-full flex-1 ">
          <h1 className=" w-full shadow-sm top-0 text-2xl font-bold p-4 bg-gray-100    start-0 border-b border-gray-200 dark:border-gray-600 text-blue-700">
            {currentRoute === "/"
              ? " Contact Management App"
              : "Charts and Maps"}
          </h1>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
