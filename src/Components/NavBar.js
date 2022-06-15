
import { Link } from "react-router-dom";


export const NavBar = () => {
	return (
		<header>

			Youtube &nbsp;
			<Link to='/'>Home</Link> &nbsp;
			<Link to='/about'>About</Link>

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
