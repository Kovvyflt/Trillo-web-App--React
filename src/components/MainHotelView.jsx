import Hotel1 from "../assets/hotel-1.jpg";
import Hotel2 from "../assets/hotel-2.jpg";
import Hotel3 from "../assets/hotel-3.jpg";


import Galllery from "./Gallery";
import Overview from "./OverView";
import Detail from "./Detail";
import Cta from "./Cta";

import "../index.css";

export default function MainHotelView() {
  
  return (
    <main className="hotel-view">
      <div className="gallery">
        <Galllery hotel= {Hotel1}/>
        <Galllery hotel= {Hotel2}/>
        <Galllery hotel= {Hotel3}/>
      </div>

     <Overview/>

     <Detail />

     <Cta />
    </main>
  );
}
