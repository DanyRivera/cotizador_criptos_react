import styled from "@emotion/styled";

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

`;

const Imagen = styled.img`
    display: block;
    width: 200px;
    margin: 25px auto 0 auto;
`;

const Texto = styled.p`
    font-size: 18px;

    span {
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 30px;

    span {
        font-weight: 700;
    }
`;

const Resultado = ({ cotizacion }) => {

    const {
        PRICE,
        HIGHDAY,
        LOWDAY,
        IMAGEURL,
        CHANGEPCTHOUR,
        LASTUPDATE,
        MKTCAP,
        FROMSYMBOL
    } = cotizacion;

    return (
        <Contenedor>

            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Símbolo: <span>{FROMSYMBOL}</span></Texto>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación en una hora: <span>{CHANGEPCTHOUR}%</span></Texto>
                <Texto>Capitalización de Mercado: <span>{MKTCAP}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>

            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Imagen Crypto"
            />

        </Contenedor>
    )
}

export default Resultado
