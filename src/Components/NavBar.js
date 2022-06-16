import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<header>
			<div className="youtube">
				Youtube &nbsp;
				<Link className="links" to="/">
					Home
				</Link>{" "}
				&nbsp;
				<Link className="links" to="/about">
					About
				</Link>
			</div>
		</header>
	);
};

export default NavBar;
