import { Button } from "../Button";
import { Container, Card } from "../DishSection/styles";
import { Plus, Minus,CaretLeft } from "@phosphor-icons/react";
import dish1 from "../../assets/img1.png"
import { Tag } from "../Tag"
import { ButtonText } from "../ButtonText";

export function DishSection({ data, ...rest }){
    return (
      <Container {...rest}>    
        <div className="ButtonAlign">     
          <ButtonText 
          title="Voltar" 
          className="ButtonText"
          icon={CaretLeft}         
          />        

          <div className='DishAlign'>
            <img src={dish1} alt="Imagem do Prato"/>                 

                    <NewDish data={{                    
                    title: 'Nome do prato',
                    description: 'teste description',
                    tags: [
                        {id: '1', name: 'alface'},
                        {id: '1', name: 'cebola'},
                    ] 
                  }} >
              
                </NewDish>

            </div> 
            </div>
            </Container>
              
    );
  }
          
{/*  <Card> 
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
            </Card>  */}                 

