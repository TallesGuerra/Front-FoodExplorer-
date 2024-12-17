import { Container } from "./styles";
import { Tag } from "../Tag";
import { Button } from "../Button";
import { Plus, Minus } from "@phosphor-icons/react";

export function NewDish({ data, ...rest }) {
  return (
    <Container>
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

        <div className="NumbeOfDishes">
          <Minus />
          <input type="number" name="number" id="number" />
          <Plus />

          <Button title="Incluir - {Valor}" />
        </div>
      </div>
    </Container>
  );
}
