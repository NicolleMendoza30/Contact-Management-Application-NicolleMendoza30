    const getTodos = (dispatch) => {
        console.log("fetching")
        fetch("https://playground.4geeks.com/contact/agendas/Nicolle", {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                dispatch({type: "AddContact", payload: data.contacts})
               
            })
            .catch((error) => console.log(error));
    };

export default getTodos;