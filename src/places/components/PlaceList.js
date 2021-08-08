import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

function PlaceList(props) {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>No places found. Try creating one :)</Card>
        <button>Share Place</button>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
