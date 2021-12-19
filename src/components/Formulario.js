import React from 'react';
import styled from '@emotion/styled';

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
    return (  
        <form>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>

    )
}



export default Formulario;
