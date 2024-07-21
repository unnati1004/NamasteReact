import { useEffect, useState } from "react";
import {resCard} from "../utils/ResturantCardData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const ResturantMenuPage = ()=>{

  const [menuData,setMenuData] = useState(resCard[0].data.cards);        

  const params = useParams();    
          
  //     useEffect(()=>{
  //   fetchData();
  // },[])

  // const fetchData=async ()=>{
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.287084&lng=83.113483&restaurantId=190851&catalog_qa=undefined&submitAction=ENTER");
  //   const  json = await data.json();
  //   console.log("json",json.data.cards);
  //   setMenuData(json)
  //   // Optional chaining 
  //   // setListOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  // }

  const {name, cuisines, costForTwoMessage
  } = menuData[2].card.card.info

  const {itemCards} = menuData[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  // console.log(itemCards);
  return menuData === null? <Shimmer/>:
   ( <div>
       <h1>{name}</h1>
      <h2>{cuisines.join(",")} - {costForTwoMessage}</h2>  
      <h2>Menu</h2> 
      <ul>
          {itemCards.map((data)=>{   
              return <li key={data.card.info.id}>{data.card.info.name}-{data.card.info.price}</li>
          }) 
         }
      </ul>   
    </div> )
}    


export default ResturantMenuPage;