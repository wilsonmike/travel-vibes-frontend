import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Mike Dubxki",
      image:
        "https://images.pexels.com/photos/4816778/pexels-photo-4816778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
