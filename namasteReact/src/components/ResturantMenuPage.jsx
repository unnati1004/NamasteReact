import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { resCard } from "../utils/ResturantCardData";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategories from "./ResturantCategories";

const ResturantMenuPage = () => {
  const [menuData, setMenuData] = useState(resCard[0].data.cards);
  const [showList,setShowList] = useState(true);
  const [showIndex,setShowIndex] = useState(null);

  const categories = resCard[0].data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

  const params = useParams();
  const resInfo = useResturantMenu(1875);  
  //useEffect(()=>{
  //   fetchData();
  //},[])

  // const fetchData=async ()=>{
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.287084&lng=83.113483&restaurantId=190851&catalog_qa=undefined&submitAction=ENTER");
  //   const  json = await data.json();
  //   console.log("json",json.data.cards);
  //   setMenuData(json)
  //   Optional chaining
  //   setListOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  // }

  const { name, cuisines, costForTwoMessage } = menuData[2].card.card.info;

  // const { itemCards } = menuData[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
 
  return menuData === null ? (
    <Shimmer />
  ) : (
    <div className="text-center" >
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-xl">
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((data) => {
          return (
            <li key={data.card.info.id}>
              {data.card.info.name}-{data.card.info.price}
            </li>
          );
        })}
      </ul> */}

      {/* Categories accordions */}
        {categories.map((category,index)=>(
          // controlled component
          <ResturantCategories data={category.card.card} setShowIndex={()=>setShowIndex(index)} showList={index == showIndex && showList }
          setShowList={setShowList} 
          />
        ))}
    </div>
  );
};

export default ResturantMenuPage;