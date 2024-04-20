import "../App.css";
import CDN_URL from "../utils/constant";

export const ResturantCard =(props)=>{
   const {resData} = props;
   const {cloudinaryImageId,sla,costForTwo,avgRating,cuisines,name} = resData?.info;
   
   return(
       
          <div className="res-card">
             <div className="res-logo">
               <img src={CDN_URL + cloudinaryImageId} alt="res-logo" className="image"/>       
             </div>
             <div className="res-body">
              <h3> {name} </h3>
              <h4> {cuisines.join(', ')} </h4>
              <h4>{avgRating} stars</h4>  
              <h4>{costForTwo}</h4>
              <h4>{sla.deliveryTime} minutes</h4>  
             </div>
          </div>
      
   )       
}