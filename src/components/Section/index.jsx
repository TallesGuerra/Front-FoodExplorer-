import { Button } from "../Button";
import { Container, Card } from "./styles";
import { Plus, Minus, Heart } from "@phosphor-icons/react";
import plate1 from "../../assets/img1.png"
import { ButtonText } from "../ButtonText";

export function Section({ title, children }){
    return (
      <Container>
        <h2>{title}</h2>

        <div className="CardAlign">
            <Card>
                <Heart />
                <img src={plate1} alt="Imagem do Prato"/>         

                <h3>Plate Name</h3>
                <p>Plate Description</p>
                <span>R$ 25,97</span>

                <div className="NumbeOfPlates"> 
                
                <Minus />
                <input type="number" name="" id=""/> 
                <Plus />
                
                <Button  title="Incluir"/>
                </div>
            </Card>


            <Card>
                <Heart />
                <img src={plate1} alt="Imagem do Prato"/>         

                <h3>Plate Name</h3>
                <p>Plate Description</p>
                <span>R$ 25,97</span>

                <div className="NumbeOfPlates"> 
                
                <Minus />
                <input type="number" name="" id=""/> 
                <Plus />
                
                <Button  title="Incluir"/>
                </div>
            </Card>         
        </div>



        
        <ButtonText title="Criar uma conta"/>
      </Container>


    );
}