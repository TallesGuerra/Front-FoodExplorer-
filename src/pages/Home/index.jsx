import { Container, Content, Main } from './styles';
import {Footer} from "../../components/Footer";
import mainPhoto from "../../assets/mainPhoto.png"
import {Header} from "../../components/Header";
import {CardSection} from "../../components/CardSection";
import { NewDish } from '../../components/NewDish';
import dish1 from "../../assets/img1.png"
import { DishSection } from '../../components/DishSection';




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


                
            
           < CardSection/>    


        

{/* 
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

            <    </div> */}


           
      



                
                

                

            </Content>
           
 
            <Footer />
        </Container>
    );
}