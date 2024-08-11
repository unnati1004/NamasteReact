import { useEffect, useState } from "react";
// import { MENU_URL } from "./constant";

const useResturantMenu =(resId)=>{
  //  console.log("resId",resId);
  const [resInfo,setResInfo] = useState(null);
  
  useEffect(()=>{
   fetchData();       
  },[]);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.287084&lng=83.113483&restaurantId=190851&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    
    setResInfo(json.data.card);
  }
   
   return resInfo;     
}

export default useResturantMenu;