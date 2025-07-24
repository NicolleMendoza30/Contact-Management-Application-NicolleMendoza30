import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Navbar from "../components/Navbar.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../view/ContactCard:.jsx";
<script
  src="https://kit.fontawesome.com/25ec0a22c8.js"
  crossorigin="anonymous"
></script>;
import getTodos from "../hooks/Accion.jsx";
import { useEffect } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  useEffect(() => {
    getTodos(dispatch);
  }, []);

  return (
    <>
      {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
        store?.contacts.map((contact) => (
          <ContactCard name={contact.name}  email={contact.email} phone={contact.phone} address={contact.address} id={contact.id} key={contact.id} />
        ))
      ) : (
        <p className="HOME">No se encontraron contactos</p>
      )}
    </>
  );
};
