import { Container } from "./styles";
import logoFooter from "../../assets/logoFooter.svg"


export function Footer(){
    return(
        <Container>
            <img src={logoFooter} alt="Logo Footer" />

            <p> 	
                &copy; 2024 - Todos os direitos reservados.
                
            </p>
        </Container>
    );
}