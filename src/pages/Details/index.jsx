import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { DishSection } from "../../components/DishSection";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";



export function Details() {
  return (
    //conteúdo da interface
    <Container>      
          <Header />   
          <main>
              <Content>             
                <DishSection/>     

              </Content>

            
            </main>      


    <Footer />

    </Container>   

  );
}
