import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<header>
			Youtube &nbsp;
			<Link to="/">Home</Link> &nbsp;
			<Link to="/about">About</Link>
			
		</header>
	);
};

export default NavBar;
