import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import getTodos from "../hooks/Accion";

const EditContact = () => {
  const navigate = useNavigate()
  const {store, dispatch} = useGlobalReducer()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone , setPhone] = useState("")
  const [address, setAddress] = useState("")
  const {id} = useParams()
useEffect(() => {
    if (store.contacts && id) {
      const filtered = store.contacts.filter(c => c.id === id);
      console.log("Contacto encontrado: ", filtered[0])
      if (filtered.length > 0) {
        setName(filtered[0].name || "");
        setEmail(filtered[0].email || "");
        setAddress(filtered[0].address || "");
        setPhone(filtered[0].phone || "");
      } else {
        setName("");
        setEmail("");
        setAddress("");
        setPhone("");
      }
    }
  }, []);
  const  handleEditContact = () => {
    fetch(`https://playground.4geeks.com/contact/agendas/Nicolle/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone,
        "address": address,
      
      }),
    })
      .then(() => {
        console.log("Contacto actualizado");
        getTodos(dispatch)
        navigate("/");
      })
      .catch(() => console.log("Error al actualizar"));
  };

  return (
    <div>
       <h1 className="text-center">Add a new contact</h1>
      <div className="list-group">
          <label htmlFor="Address">Nombre Completo</label>
      <input className="form-control"
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
        <label htmlFor="Address">Email</label>
      <input className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
        <label htmlFor="Address">Telefono</label>
      <input className="form-control"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      /><br />
        <label htmlFor="Address">Address</label>
      <input className="form-control"
        placeholder="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      /><br />
      <button onClick={handleEditContact} className="btn btn-primary">Save</button>
      </div>
    </div>
  );
};

export default EditContact;
