import { Container, Content } from "./styles";
import { Tag } from "../Tag";
import dish1 from "../../assets/img1.png";
import {PickNumber} from "../../components/PickNumber";
import {ButtonText} from "../../components/ButtonText";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";



export function NewDish({ data, ...rest }) {
  return (
    <Container>
      <Content>
        <div>

    <Link to="/">
      
    <ButtonText className="btnText"
          title="Voltar"
          icon={ <IoIosArrowBack />}
        /> 
    </Link>



        <img src={dish1} alt="Imagem do Prato"/> 

        </div>
      <main>
          <div className="DishInfos">
            <h2>{data.title}</h2>
            <p>{data.description}</p>

            {data.tags && (
              <div className="TagsAlign">
                {data.tags.map((tag) => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </div>
            )}
            </div>
            
            <PickNumber /> 
      </main>
        

      </Content>
    </Container>
  );
  }
  
  {/* <FiMinus />
  <input type="number" name="number" id="number" />
  <FiPlus />
          <Button title="Incluir - {Valor}" /> */}