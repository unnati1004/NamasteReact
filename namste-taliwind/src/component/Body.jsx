import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { ResturantCard,withPromotedLabel } from "./ResturantCard";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import UserContext from "../utils/userContext";
export const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(resList);
  const onlineStatus = useOnlineStatus();

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);
  
  const {setUserName,LoggedInUser} = useContext(UserContext);
  // useEffect(()=>{
  //   fetchData();
  // },[])

  // const fetchData=async ()=>{
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.287084&lng=83.113483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const  json = await data.json();
  //   // console.log("json",json.data.cards[0].card.card);

  //   // Optional chaining
  //   setListOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  // }

  // if (onlineStatus == false) {
  //   return (
  //     <h3>
  //       Looks like you're offline !! Please check your internet connection
  //     </h3>
  //   );
  // }

  // if (listOfResturant.length == 0) {
  //   <h1>Loading ..</h1>;
  // }
  // console.log(listOfResturant);  
  return listOfResturant.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
      <div className="filter flex  items-center">
        <div className="m-4 p-4">
          <input className="border border-solid border-black"/>
          <button className="px-4 py-2 m-4 bg-green-200 rounded-xl">Search Bar</button>
        </div>
        <button className="search px-4 py-2 bg-green-100 rounded-lg"
          onClick={() => {
            const filterData = listOfResturant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturant(filterData);
          }}
          >
          Top Rated Resturants
        </button>
        <div>
          <label>User Name: </label>
          <input type="text" className="p-2 border-2"
          value={LoggedInUser}
          onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
      </div>

        <div className="res-container flex flex-wrap ">
          {listOfResturant.map((resObj,index) => {
            
            return (
              <Link to={`/resturants/${resObj.id}`}>
                {
                  index < 3?
                  <ResturantCardPromoted key={resObj.id} resData={resObj}/> :
                  <ResturantCard key={resObj.id} resData={resObj} />
                  
                }
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
