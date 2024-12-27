import { Container, Content, Main } from './styles';
import {Footer} from "../../components/Footer";
import mainPhoto from "../../assets/mainPhoto.png"
import {Header} from "../../components/Header";
import {CardSection} from "../../components/CardSection";
import img1 from "../../assets/img1.png";


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
                    
                < CardSection
                    data={{   
                        image: `${img1}`,   
                        title: 'Refeições',
                        name: 'Nome do prato',
                        description: 'Descrição do prato',
                        price: 'Valor'
                    }} >         
                </CardSection>  
            
                < CardSection
                    data={{   
                        image: `${img1}`,                 
                        title: 'Sobremesas',
                        name: 'Nome do prato',
                        description: 'Descrição do prato',
                        price: 'Valor'
                    }} >         
                </CardSection>  
                
                    
                < CardSection
                    data={{   
                        image: `${img1}`,                 
                        title: 'Bebidas',
                        name: 'Nome do prato',
                        description: 'Descrição do prato',
                        price: 'Valor'
                    }} >         
                </CardSection> 
            </Content>
            <Footer />
        </Container>
    );
}