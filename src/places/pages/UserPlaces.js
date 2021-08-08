import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers",
    imageUrl:
      "https://images.pexels.com/photos/755050/pexels-photo-755050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers",
    imageUrl:
      "https://images.pexels.com/photos/755050/pexels-photo-755050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

function UserPlaces() {
  return <PlaceList items={DUMMY_PLACES} />;
}

export default UserPlaces;
