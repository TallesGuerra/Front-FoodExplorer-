import { Container, Card } from "../DishSection/styles";


import dish1 from "../../assets/img1.png";

import { ButtonText } from "../ButtonText";
import { NewDish } from "../../components/NewDish";
import { PickNumber } from "../../components/PickNumber";

export function DishSection({ data, ...rest }){
    return (
      <Container {...rest}>    
        <div className="ButtonAlign">     
          <ButtonText 
          title="Voltar" 
          className="ButtonText"
          />        

          <div className='DishAlign'>        
            <NewDish  data={{                    
                    title: 'Salada Ravanello',
                    description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
                    tags: [
                        {id: '1', name: 'alface'},
                        {id: '1', name: 'cebola'},
                        {id: '1', name: 'pepino'},
                        {id: '1', name: 'pão naan'},
                    ] 
                  }} >

                      <PickNumber />
              
                </NewDish>
            </div> 
          </div>
      </Container>
              
    );
  }              

