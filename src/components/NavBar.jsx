import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    // prettier-ignore
    <nav>
        <Link to= "/">Articles</Link>
        <Link to= "/users">Users</Link>
    </nav>
  );
}
