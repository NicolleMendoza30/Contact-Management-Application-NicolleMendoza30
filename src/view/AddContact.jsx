import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import getTodos from "../hooks/Accion";
import useGlobalReducer from "../hooks/useGlobalReducer";


const AddContact = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const { store, dispatch } = useGlobalReducer()
    

       const createUser = () => {
        fetch("https://playground.4geeks.com/contact/agendas/Nicolle", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                if (!response.ok) {
                    console.log("El usuario ya existe o error al crearlo");
                }
                getTodos();
            })
            .catch((error) => console.log(error));
    };
    const createContact = () =>{
       fetch("https://playground.4geeks.com/contact/agendas/Nicolle/contacts", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body:{
                "name": name,
               "phone": phone,
               "email": email,
              "address": address
            }
        })
         .then((response) => {
                if (!response.ok) {
                    console.log("El usuario ya existe o error al crearlo");
                }
                getTodos();
            })
            return 
    }
    return(
        

    <div className="list-group">
        <h1 className="text-center">Add a new contact</h1>
        
        <label htmlFor="Full Name">Full Name</label>
        <input className="form-control"   
        type="text" 
        name="Full Name" 
        value={name}
        placeholder="Full Name"
        onChange={(e)=> setName(e.target.value)}> 
        </input> <br></br>
        
        <label htmlFor="Email">Email</label>
         <input className="form-control" 
         type="text" 
         name="Email" 
         value={email}
         placeholder="Enter email"
         onChange={(e)=> setEmail(e.target.value)}
        ></input><br></br>
       
        <label htmlFor="Phone">Phone</label>
         <input className="form-control" 
         type="tel" 
         name="Phone" 
         value={phone}
         placeholder="Enter phone"
         onChange={(e)=> setPhone(e.target.value)}
         ></input><br></br>
        
        <label htmlFor="Address">Address</label>
        <input className="form-control" 
        type="text" 
        name="Address" 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address"></input><br></br>
        
        
         <button onClick={()=>createContact()} className="btn btn-primary">Save</button>
  
         { <p><a className="link-opacity-100" href="">or get back to contacts</a></p> }
    </div>
    
          
    

    );
}


export default AddContact;