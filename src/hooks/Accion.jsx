   
   
   
   const getTodos = () => {
        fetch("https://playground.4geeks.com/contact/agendas/Nicolle", {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({type: "AddContact", payload: data.contacts})
               
            })
            .catch((error) => console.log(error));
    };

export default getTodos;