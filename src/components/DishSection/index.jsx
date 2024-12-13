import { Button } from "../Button";
import { Container, Card } from "../DishSection/styles";
import { Plus, Minus } from "@phosphor-icons/react";
import dish1 from "../../assets/img1.png"
import { Tag } from "../Tag"
import { ButtonText } from "../ButtonText";

export function DishSection({ title }){
    return (
      <Container>    
        <div className="DishAlign">     
          <ButtonText title=" < Voltar" className="ButtonText"/>
            <Card> 
                <img src={dish1} alt="Imagem do Prato"/> 
                
                <div className="DishInfos">
                  <h3>Salada Ravanello</h3>

                  <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                 
                  <div className="TagsAlign">
                    <Tag title="alface"/>
                    <Tag title="cebola"/>
                    <Tag title="pão naan"/>
                  </div>

                  <div className="NumbeOfDishes">                 
                  <Minus />
                  <input type="number" name="number" id="number"/> 
                  <Plus />
                  
                  <Button  title="Incluir - {Valor}"/>
                  </div>
                </div>
            </Card>                  
        </div>
      </Container>


    );
}