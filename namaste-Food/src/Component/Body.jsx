import { ResturantCard } from "./ResturantCard"
import resList from "../utils/mockdata"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

export const Body = ()=>{

  const [listOfResturant,setListOfResturant] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.287084&lng=83.113483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const  json = await data.json();
    // console.log("json",json.data.cards[0].card.card);

    // Optional chaining 
    setListOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

  if(listOfResturant.length == 0){
    <h1>
      Loading ..
    </h1>
  }
          return(
            listOfResturant.length == 0?
              <Shimmer/>
            :
             <>
             <div className="body">
                <div className="search">
                    <h4>
                      Search Bar
                    </h4>
                </div>     
                <button
                 onClick={()=>{
                  const filterData = listOfResturant.filter(
                    (res)=> res.info.avgRating > 4
                  )
                  setListOfResturant(filterData);
                 }}
                >Top Rated Resturants</button>
                <div className="res-container">
                  {listOfResturant.map((resObj)=>
                   <ResturantCard
                    key ={resObj.id} 
                    resData = {resObj}
                   />
                  )}
                   
                </div>
             </div>
             </>
          )
}