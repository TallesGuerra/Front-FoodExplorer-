import { Container } from "./styles"
import LogoImage from "../../assets/titleFrame.svg";
import LogoAdm from "../../assets/logoAdm.svg"

export function Logo({ src, alt }){
    return(
        <Container>
      {/*    <img src={LogoImage} alt="Logo" display="block"/> */}
            <img src={LogoAdm} alt="Logo Admin"/>
            
        </Container>
    )
}