import styled from "@emotion/styled";


const Contenedor = styled.div `
   color: #FFF;
   font-family: 'Lato', sans-serif;
   display: flex;
   align-items: start;
   gap: 1rem;
   margin-top: 20px;
`;

const Imagen = styled.img`
   display: block;
   width: 120px;
`;

const Texto = styled.p`

`;

const Precio = styled.p `
  font-size: 24px;
  span{
    font-weight: 700;
  }
`;

const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

   console.log(IMAGEURL);

  return (
  <Contenedor>
      <Imagen src={`https://cryptocompare.com${IMAGEURL}`} alt="imagencripto" />
      
      <div>
      <Precio>El precio es de:<span>{PRICE}</span></Precio>
      <Texto>El precio más alto del dia:<span>{HIGHDAY}</span></Texto>
      <Texto>El precio más bajo del dia:<span>{LOWDAY}</span></Texto>
      <Texto> Variación últimas 24 horas:<span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Última actualización:<span>{LASTUPDATE}</span></Texto>
      </div>
  </Contenedor>
  )
};

export default Resultado;
