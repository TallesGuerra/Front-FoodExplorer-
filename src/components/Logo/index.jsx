import { Container } from "./styles"
import LogoImage from "../../assets/titleFrame.svg"

export function Logo({ src, alt }){
    return(
        <Container>
            <img src={LogoImage} alt="Logo"/>
        </Container>
    )
}