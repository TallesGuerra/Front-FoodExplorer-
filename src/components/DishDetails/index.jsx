import { Container } from "./styles";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { FiPlus, FiMinus } from "react-icons/fi";

export function DishDetails({ data, ...rest }) {
  return (
    <Container {...rest }>
       <div className="DishInfos" >
        <h2>{data.title}</h2>
        <p>{data.description}</p>

    {data.tags && (
          <div className="TagsAlign">
            {data.tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </div>
        )}

        <div className="NumbeOfDishes">
          <FiMinus />
          <input type="number" name="number" id="number" />
          <FiPlus />

          <Button title="Incluir - {Valor}" />
        </div>
      </div>
    </Container>
  );
}
