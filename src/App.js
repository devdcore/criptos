import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width:992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

    &::after {
      content: '';
      width: 100px;
      height: 6px;
      background-color: #66a2fe;
      display: block;
    }
`;

function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado ] = useState({});
  const [sppiner, setsppiner] = useState(false);
  
     
  useEffect(() => {
    if (Object.keys(monedas).length > 0 ) {

      const cotizarCripto = async () => {
        // Sppiner
        setsppiner(true);
        // Set vacio resultado mientras carga
        setResultado({});

        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const response = await fetch(url);
        const result = await response.json();

        // La respuesta viene con etiquetas dinamicas
        //https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTN&tsyms=USD

        setResultado(result.DISPLAY[criptomoneda][moneda]);
        // Spiner
        setsppiner(false);
      }
      cotizarCripto();
    }

    
    // Consultar API para obtener la cotizacion    
  }, [monedas])


  return (
    <Contenedor>
      <div>
        <Imagen
        src={imagen}
        alt="Imagen crypto"
        />
      </div> 
      <div>
        <Heading>
          Cotiza tus cryptomonedas
        </Heading> 
        <Formulario
        setMonedas={setMonedas}
        />        
        { sppiner && <Spinner /> }
        { resultado.PRICE && <Resultado resultado={resultado}/> }
      </div>
    </Contenedor>
  );
}

export default App;
