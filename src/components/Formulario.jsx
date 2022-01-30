import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';


const Boton = styled.input`
        margin-top: 20px;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        background-color: #66a2fe;
        border: none;
        width: 100%;
        border-radius: 10px;
        color: #fff;
        transition: .3s ease;
`;

const Formulario = ({setMonedas}) => {

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de los Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' } 
    ]

    // State lista de criptomonedas
    const [ listacripto, guardarCriptomoneda ] = useState([]);
    // State manejo de error
    const [ error, guardarError ] = useState(false);

    // Utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS);
      
    // Utilizar hook useCripto 
    const[criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto);

    // Llamado a la API
    // UseEffect se ejecuta cuando se ejecuta este componente
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const response = await axios.get(url);
        // console.log(`response API ${JSON.stringify(response)}`);     
            guardarCriptomoneda(response.data.Data);                                                             
        }
        consultarAPI();  

    }, []); // Dependencia vacia para que se ejecute una sola vez


    // Cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar si los campos tienen informacion
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }
        // Cotiza
        guardarError(false);

        setMonedas({
            moneda,
            criptomoneda
        })

    }

    return (  
        <form
            onSubmit={cotizarMoneda}
        >
            {/* Valida si hay error */}

            { error? <Error mensaje="Todos los campos son obligatorios"/> : null }
            {/* Selecciona la moneda */}
            <SelectMonedas />
            {/* Selecciona la crypto */}
            <SelectCripto />



            <Boton
                type="submit"
                value="Calcular"
            />
        </form>

    )
}



export default Formulario;
