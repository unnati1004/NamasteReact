import { useEffect, useState } from "react";
import ResturantCardData from "../utils/ResturantCardData";

const ResturantMenuPage = ()=>{

  const [menuData,setMenuData] = useState(ResturantCardData);        
          
  return(
    <div>
      <h1>Name of Resturant</h1>
      <h2>Menu</h2> 
      <ul>
          <li>Biryani</li>
          <li>Burgers</li>
          <li>Diet Coke</li>
      </ul>   
    </div>      
  )        
}

export default ResturantMenuPage;