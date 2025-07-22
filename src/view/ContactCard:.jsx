import { Link } from "react-router-dom";
import Edit from "./Edit";

const ContactCard = () => {
    

    
    return (
        <ul className="list-group">
            <li className="list-group-item" ><a><img src="https://randomuser.me/api/portraits/men/45.jpg" className="card-img-top imagen"/>
            <i className="fa-solid fa-location-dot"></i> 
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-envelope"></i>
            <Link to="/Edit"><i class="fa-solid fa-pen"></i> </Link>
             
            <button className="fa-solid fa-trash "> </button>
            </a></li>

            <li className="list-group-item" ><a><img src="https://randomuser.me/api/portraits/women/44.jpg" className="card-img-top imagen" />
            <i className="fa-solid fa-location-dot"></i> 
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-envelope"></i>
              <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash"></i>
            
            </a></li>
            <li className="list-group-item" ><a><img src="https://randomuser.me/api/portraits/women/68.jpg" className="card-img-top imagen" />
            <i className="fa-solid fa-location-dot"></i> 
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-envelope"></i>
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash"></i>
            </a></li>
            <li className="list-group-item" ><a><img src="https://randomuser.me/api/portraits/men/12.jpg" className="card-img-top imagen" />
            <i className="fa-solid fa-location-dot"></i> 
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-envelope"></i>
             <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash"></i>
            </a></li>

            <li className="list-group-item" ><a><img src="https://randomuser.me/api/portraits/men/45.jpg" className="card-img-top imagen"/>
            <i className="fa-solid fa-location-dot"></i> 
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-envelope"></i>
            <i className="fa-solid fa-pen"></i>
             <i className="fa-solid fa-trash"></i>
           
            </a></li>
        </ul>
    );
};
export default ContactCard;