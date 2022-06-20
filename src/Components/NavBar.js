// import { Link } from "react-router-dom";

// export const NavBar = () => {
// 	return (
// 		<header>
// 			<div className="youtube">
// 				Youtube 
// 				<Link className="button blue" to="/">
// 					Home
// 				</Link>{" "}
				
// 				<Link className="button blue" to="/about">
// 					About
// 				</Link>
// 			</div>
// 		</header>
// 	);
// };

// export default NavBar;





import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt="youtube icon"
        style={{ height: "100px", width: "200px" }}
      />

      <Link className="button gray" to="/">
        Home
        </Link>{" "}
      <Link className="button gray" to="/about">
        About
        </Link>
    </nav>

  );
};

export default NavBar;