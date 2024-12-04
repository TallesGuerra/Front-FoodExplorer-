import { Container, Title } from "./styles";
import titleFrame from "../../assets/titleFrame.svg";

export function Details() {
  return (
    //conteúdo da interface
    <Container>
      <Title>
        <h1>Hello World</h1>
        <img src={titleFrame} />
      </Title>
    </Container>
  );
}
