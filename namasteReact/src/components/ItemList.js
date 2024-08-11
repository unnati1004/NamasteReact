import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/createSlice";
const ItemList = ({ items }) => {
  //   console.log(data);

  const dispatch = useDispatch();

 const handleAddItem = (item)=>{
  // Dispatch an action
  dispatch(addItem(item));
 }


  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 text-left flex justify-between"
        >
          <div className="m-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className=" absolute shadow-lg">
              <button className="mx-auto bg-black rounded-lg text-white px-2" 
              onClick={()=>handleAddItem(item)}
              > Add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-36" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
