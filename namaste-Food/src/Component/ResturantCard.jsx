import butterChicken from "../Image/butterchicken.jpg";
import "../App.css";
export const ResturantCard =()=>{
   return(
       <>
          <div className="res-card">
             <div className="res-logo">
               <img src={butterChicken} alt="res-logo" className="image"/>       
             </div>
             <div className="res-body">
              <h3> Meghna foods </h3>
              <h4>Biryani </h4>
              <h4>4.4 star</h4>  
              <h4>30 minutes</h4>  
             </div>
          </div>
      </>
   )       
}