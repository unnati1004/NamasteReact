import React,{useState} from "react";

import ItemList from "./ItemList";

const ResturantCategories = ({data,setShowIndex,showList,setShowList}) => {
  // console.log("res",data);
  const handleShowIndex = ()=>{
    setShowIndex()
    setShowList(!showList)
  }
  return (
    <div  >
      <div className="w-6/12 bg-blue-50 mx-auto my-4 p-4 text-center shadow-lg">
       <div className="flex justify-between" onClick={()=>handleShowIndex()} >
      {/* Header */}
       <span className="text-lg font-bold">{data.title} ({data.itemCards.length}) </span>
       <span>⬇️</span>
       </div>
      {/* Accordian Body */}
      {showList && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default ResturantCategories;
