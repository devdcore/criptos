import React from 'react';
import styled from '@emotion/styled';

import useMoneda from '../hooks/useMoneda';

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

const Formulario = () => {

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de los Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ]



    // Utilizar useMoneda
    const [moneda, SelectMonedas, actualizarState] = useMoneda('Elige tu moneda', '', MONEDAS);
      
    return (  
        <form>
            <SelectMonedas />

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>

    )
}



export default Formulario;
