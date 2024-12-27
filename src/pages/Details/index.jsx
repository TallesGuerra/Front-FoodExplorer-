import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {NewDish} from "../../components/NewDish";
import {PickNumber} from "../../components/PickNumber";







export function Details() {
  return (
    //conteúdo da interface
    <Container>      
      <Header />   
            <div>
              <Content>   
                <NewDish  
                      data={{                    
                                    title: 'Salada Ravanello',
                                    description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
                                   
                                    tags: [
                                        {id: '1', name: 'alface'},
                                        {id: '1', name: 'cebola'},
                                        {id: '1', name: 'pão naan'},
                                        {id: '1', name: 'pepino'},
                                        {id: '1', name: 'Rabanete'},
                                        {id: '1', name: 'Tomate'},
                                    ] 

                                  }} >
                
                                      <PickNumber                      
                                      />
                              
                </NewDish>
              </Content>
            </div>

           
      <Footer  />

    </Container>   

  );
}
