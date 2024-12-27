import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IoIosArrowBack } from "react-icons/io";



import { Container, Content, Form } from "./styles";





export function AddDish(){
    return(
        <Container>
            <Header 
              
            />
                <Content>
                    <ButtonText className="btnText"
                            title="Voltar"
                            icon={ <IoIosArrowBack />}
                    /> 


                    <Form>
                        <h2>Adicionar Prato</h2>


                <section className="section1">
                    <label> Imagem do prato
                        <input type="file" name="" id="file" placeholder="Selecione a Imagem" />  

                    </label> 

                    <label> Nome
                    <input type="text" name="" placeholder="Ex.: Salada"/>                      
                    </label> 

                    <label> Categoria: 
                        <select name="select" id="select">
                            <option value="value1">Refeições</option>
                            <option value="value1">Sobremesas</option>
                            <option value="value1">Bebidas</option>
                        </select>                 
                    </label>   
                </section>                   
                        
                <section className="section2">
                    <label> Tag
                        <input   className="tagLabel" type="text" name="" placeholder="Ex.: Salada"/>                      
                    </label> 

                    <label> Preço 
                        <input type="number" name="number" id="price" />           
                    </label>   
                </section>                   
                        
                 <textarea name="" id="textarea" 
                 placeholder="Fale brevemente sobre o prato, seus ingredientes e composição.">
                </textarea>
                

                <div className="btnAlign">
                    
             
                <Button title="Salvar alterações" />  
                </div>    

                     
                    </Form>




                </Content>
            <Footer />
        </Container>

    );
}