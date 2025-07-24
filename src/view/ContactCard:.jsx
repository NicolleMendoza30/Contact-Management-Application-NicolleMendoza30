import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import getTodos from "../hooks/Accion";
const ContactCard = ({ name , id , email , phone, address}) => {
  const navigate = useNavigate()
  const {store , dispatch} = useGlobalReducer()
  const handleDelete = () => {
    fetch(`https://playground.4geeks.com/contact/agendas/Nicolle/contacts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        console.log("Contacto actualizado"); 
        getTodos(dispatch)
        navigate("/");
      })
      .catch(() => console.log("Error al actualizar"));
  };
    return (
             <ul class="list-group">
            <li className="list-group-item"  ><a><img src="https://randomuser.me/api/portraits/men/45.jpg" className="card-img-top imagen"/>
          <div className="name">
          <h1>{name}</h1>
          </div>
          <li className="information ">
          <h1>{address}</h1>
          <h1>{phone}</h1>
          <h1>{email}</h1>
          </li>
            <i className="fa-solid fa-location-dot"></i>   
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-envelope"></i>
            <Link to={`/Edit/${id}`}>
            <i className="fa-solid fa-pen"></i>
            </Link>
            <button onClick={()=> handleDelete()} className="fa-solid fa-trash "> </button>
            </a></li>
            </ul>
    );
};
export default ContactCard;