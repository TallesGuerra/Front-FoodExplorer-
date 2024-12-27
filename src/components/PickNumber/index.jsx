import { FiMinus, FiPlus } from "react-icons/fi";
import { Container } from "./styles";
import { Button } from "../../components/Button";

import { useRef } from "react";
import { useEffect } from "react";

export function PickNumber({ setValue = null, value = 0, ...rest }) {
  const qtyInput = useRef();

  function increaseNumber() {
    const value = Number(qtyInput.current.value);
    qtyInput.current.value = (value + 1).toString().padStart(2, "0");
    if (setValue) setValue((prev) => prev + 1);
  }

  function decreaseNumber() {
    const value = Number(qtyInput.current.value);
    if (value > 1) {
      qtyInput.current.value = (value - 1).toString().padStart(2, "0");
      if (setValue) setValue((prev) => prev - 1);
    }
  }

  function initialValue() {
    const value = Number(qtyInput.current.value);
    qtyInput.current.value = value.toString().padStart(2, "0");
  }

  useEffect(() => {
    initialValue();
  }, []);

  return (
    <Container className="quantity">
      <button onClick={decreaseNumber}>
        {" "}
        <FiMinus />{" "}
      </button>

      <input type="text" defaultValue={value} {...rest} ref={qtyInput} disabled>
        {/*   {number <10 ? `0${number}` : number } */}
      </input>

      <button onClick={increaseNumber}>
        {" "}
        <FiPlus />{" "}
      </button>
      
      <Button  title= "Incluir"
      className="BtnAdd">

     
      </Button>
      
      
      
    </Container>
  );
}
