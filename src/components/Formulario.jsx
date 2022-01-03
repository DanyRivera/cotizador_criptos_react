import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #7a7dfe;
    }
`

const Formulario = () => {
    
    const [ selectMonedas ] = useSelectMonedas();

    selectMonedas();

    return (
        <form>
            <InputSubmit type="submit" value="Cotizar"/>
        </form>
    )
}

export default Formulario