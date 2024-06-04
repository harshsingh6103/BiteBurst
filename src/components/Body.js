import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const[searchText,setSearchText] = useState("");


  // Fetching data using useEffect and then rendering it to setRestraunt using useState.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantList(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };



  // Logic for Top rated restraunt
  const filterTopRatedRestaurants = () => {
    const filtered = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setRestaurantList(filtered);
  };
 
  // SHIMMER UI
  return restaurantList.length===0 ? (
    <div class="card">
    <div class="shimmerBG media"></div>
    <div class="p-32">
      <div class="shimmerBG title-line"></div>
      <div class="shimmerBG title-line end"></div>

      <div class="shimmerBG content-line m-t-24"></div>
      <div class="shimmerBG content-line"></div>
      <div class="shimmerBG content-line"></div>
      <div class="shimmerBG content-line"></div>
      <div class="shimmerBG content-line end"></div>
    </div>
  </div>
  ) : (
    <div>

      
      <button
        className="btn btn-outline-success"
        onClick={filterTopRatedRestaurants}
      >
        Top Rated Restaurants
      </button>

    <div className="search">
       <input type="text" className="searchBox"
       value={searchText}
       onChange={(e)=>{
        setSearchText(e.target.value);
       }}
       />
       <button className="search-button" onClick={()=>{
        const filteredRestaurant = restaurantList.filter((res)=>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
       setFilteredRestaurant(filteredRestaurant);
       }}>Search</button>
        </div>

      <div className="body">
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
