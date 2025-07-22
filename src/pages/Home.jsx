import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Navbar from "../components/Navbar.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../view/AddContact.jsx";
import AddContact from "../view/ContactCard:.jsx";
import Edit from "../view/Edit.jsx";
<script src="https://kit.fontawesome.com/25ec0a22c8.js" crossorigin="anonymous"></script>


export const Home = () => {
    
  const {store, dispatch} =useGlobalReducer()
	return (
		<>
		<AddContact/>
		<ContactCard/>
		
		</>
	);

	
}; 
