import "../App.css";
import React from "react";
import {CDN_URL} from "../utils/constant";

 const ResturantCard = (props) => {
  const { resData,key } = props;

  // console.log("resData",resData);

  const { cloudinaryImageId, sla, costForTwo, avgRating, cuisines, name } =
    resData?.info;

  return (
    <div className="res-card m-4 p-4 w-[250px] h-[440px]
      justify-center
      items-center
     bg-gray-100
      hover:bg-gray-200
     "  key={key}>
      <div className="res-logo">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
          className="image w-[200px] h-[200px] rounded-lg"
        />
      </div>
      <div className="res-body">
        <h3 className="font-bold py-2 text-lg"> {name} </h3>
        <h4> {cuisines} </h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

// Higher order function

 const withPromotedLabel = ()=>{
  return (props)=>{
    return (
      <div>
        <label className="font-bold absolute bg-black text-white px-2 py-0" >Promoted</label>
        <ResturantCard {...props}/>
      </div>
      )
  }
}

export {ResturantCard,withPromotedLabel}