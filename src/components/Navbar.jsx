import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light">
			<div className="container ">
				 <Link to="/">
						<p>HOME</p>
					</Link>
				
					<Link to="/AddContact">
						<button className="btn bg-success">Add new contact</button>
					</Link>
				
			</div>
		</nav>
		</div>

	);
};

export default Navbar;