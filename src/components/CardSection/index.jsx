import { Container, Card } from "./styles";
import { PickNumber } from "../../components/PickNumber";

import { FiHeart } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";

import { Link } from "react-router-dom";



export function CardSection({ data, ...rest }) {

  return (
    <Container {...rest}>
      <div className="divsALign">
        <h2>{data.title}</h2>
        <div className="CardAlign">
          <Card>
            <FiHeart to="/favorites" display="none" />

            <Link to="/editDish" className="linkIcon">
              <RiPencilLine />
            </Link>

            <img src={data.image} alt="Imagem do Prato" />

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
