import { Container, Logout  } from "./styles";
import { List, Receipt, SignOut,CaretLeft } from "@phosphor-icons/react";
import { Logo } from "../../components/Logo";
import {Button  } from "../../components/Button";
import {Input  } from "../../components/Input";
import { FiSearch } from "react-icons/fi";



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
                   icon={<Receipt />}
                  />  
                                 
            <Logout>
                <SignOut  />
            </Logout>



        </Container>
    )

}