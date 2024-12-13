import { Container, Content, Main } from './styles';


import {Footer} from "../../components/Footer";
import mainPhoto from "../../assets/mainPhoto.png"
import {Header} from "../../components/Header";
import {CardSection} from "../../components/CardSection";
import { Card } from '../../components/CardSection/styles';


export function Home(){
    return(
        <Container>
             <Header />      
            
            <Content> 
                    <Main>
                        <div className='imgAlign'>
                            <img src={mainPhoto} alt="main foto" />
                        </div>

                        <div className='textAlign'>
                            <h2>Sabores Inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                        </div>
                    </Main>  
            
                <CardSection/>    

                

                   

            </Content>
           
 
            <Footer />
        </Container>
    );
}