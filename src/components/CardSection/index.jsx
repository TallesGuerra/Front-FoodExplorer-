import { Button } from "../Button";
import { Container, Card } from "./styles";
import { FiHeart, FiPlus, FiMinus } from "react-icons/fi";
import {  PickNumber } from "../../components/PickNumber";


export function CardSection({ data,...rest }){
    return (
      <Container {...rest}>        
       <div className="divsALign" >           
        <h2>{data.title}</h2>
            <div className="CardAlign">
                <Card>
                    <FiHeart />
                    
                    <img
                    src={data.image} 
                    alt="Imagem do Prato"/>                     

                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                    <span>€ {data.price}</span>
                                     
                  
                    <PickNumber /> 
                </Card>
            </div>                        
        </div> 
      </Container>


    );
}