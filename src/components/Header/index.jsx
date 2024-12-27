import { Container, Logout  } from "./styles";
import { Logo } from "../../components/Logo";
import {Button  } from "../../components/Button";
import {Input  } from "../../components/Input";
import { FiSearch} from "react-icons/fi";
import { PiSignOutBold, PiReceipt  } from "react-icons/pi";


export function Header(){
    return(
        <Container>
            {/* <List /> */}
            <Logo />

            <Input 
                        placeholder="Busque por pratos ou ingredientes"
                       icon={FiSearch}
                    
                    />


                    

                   <Button title="Pedido"
                   icon={<PiReceipt  />}
                  />  
                                 
            <Logout>
                <PiSignOutBold  />
            </Logout>



        </Container>
    )

}