import React, { useState } from "react";

const Form = () => {

      const [customer, setCustomer] = useState({
          name: '',
          address: '',
      })

      console.log(customer)
      const [show, setShow] = useState(false)
      const [err, setErr] = useState(false)

      const handleSubmit = (event) => {
          event.preventDefault()
          const numRegex = /[0-9]/
          if(customer.name.length >= 3 && customer.address.includes(' ') && numRegex.test(customer.address)){
            setShow(true)
            setErr(false)
          } else {
            setErr(true)
          }
      }

      


  return <div>
    <form onSubmit={handleSubmit}>
                <label >Ingresa tu Nombre: </label>
                <input type="text" onChange={(event) => setCustomer({...customer, name: event.target.value})}/>
                <label >Ingresa tu Pais Favorito</label>
                <input type="text" onChange={(event) => setCustomer({...customer, address: event.target.value})}/>
                <button>Enviar</button>
            </form>
            <>
                <h4>Gracias, {customer.name}!</h4>
                <h4> Verificar los datos ingresados {customer.address}.</h4>
            </>
        : <p>Coloque sus datos para enviar su pedido.</p>
  </div>;
};


export default Form