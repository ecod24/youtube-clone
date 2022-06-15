import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<header>
			<article>
				<h3>
					<Link to="/">Home</Link>
				</h3>
				<h3>
					<Link to="/about/">About</Link>
				</h3>
			</article>
		</header>
	);
};

export default NavBar;
