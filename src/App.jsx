import Header from "./components/Header";
import SideBar from "./components/sideBar";
import MainHotelView from "./components/MainHotelView";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="content">
        <SideBar />
        <MainHotelView />
      </div>
    </div>
  );
}

export default App;
