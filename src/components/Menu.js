import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Menu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams()
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
          const response = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId
          );
          const data = await response.json();
          console.log(data);

          // Safely access restaurant info using optional chaining
          const restaurantInfo = data?.data?.cards?.find(card => 
            card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )?.card?.card?.info;

          setResInfo(restaurantInfo);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    };

    if (!resInfo) return <Shimmer />;

    const {
        name,
        avgRating,
        cuisines,
        areaName,
        locality,
        restaurantId
    } = resInfo || {};

    return (
        <div>
            <h1>{name || "No Name Available"}</h1>
            <p><strong>Rating:</strong> {avgRating || "N/A"}</p>
            <p><strong>Area:</strong> {areaName || "N/A"}</p>
            <p><strong>Locality:</strong> {locality || "N/A"}</p>
            <h3>Menu</h3>
            <ul>
                {cuisines?.map((item) => (
                    <li key={restaurantId}>{item}</li>
                )) || "No Cuisines Available"}
            </ul>
        </div>
    );
};

export default Menu;