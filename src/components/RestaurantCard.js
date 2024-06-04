import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, avgRating, cuisines, cloudinaryImageId, delivery } = resData?.info;

  // Construct the image URL
  const imageURL = CDN_URL + cloudinaryImageId;

  return (
    <div className="heightfix">
      <div className="cards">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageURL} className="card-img-top" alt="Restaurant" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>{delivery}</p>
            <p>{cuisines.join(" , ")}</p>
            <p>Rating: {avgRating}</p>
            <br />
            {/* Provide a meaningful link */}
            <a href={`#/${name}`} className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
