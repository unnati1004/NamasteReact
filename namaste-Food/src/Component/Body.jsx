import { ResturantCard } from "./ResturantCard"

export const Body = ()=>{
          return(
             <>
             <div className="body">
                <div className="search">
                    <h4>
                      Search Bar
                    </h4>
                </div>     
                <div className="res-container">
                  
                   <ResturantCard/>
                </div>
             </div>
             </>
          )
}