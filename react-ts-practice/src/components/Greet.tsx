type GreetProps = {
  name: string;
  messagesCount?: number; // optional prop
  status: "online" | "offline"; // only one of these values
  users: {
    fname: string;
    lname: string;
  }[];
};

function Greet(props: GreetProps) {
  const { messagesCount = 0 } = props; // default value for messagesCount
  return (
    <div>
      <p>Hello, {props.name}!</p>
      <p>Status: {props.status}</p>
      <p>Unread Message: {messagesCount}</p>
      <p>Users:</p>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.fname} {user.lname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Greet;
