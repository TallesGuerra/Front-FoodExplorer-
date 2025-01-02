import { Container, Logout  } from "./styles";
import { Logo } from "../../components/Logo";
import {Button  } from "../../components/Button";
import {Input  } from "../../components/Input";

import { Link } from "react-router-dom";


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


                    <Link to="/addDish" className="btnNew">
                        <Button 
                        title="Novo prato"

                            /* title="Pedido"
                            icon={<PiReceipt  />} */
                            />  
                    
                    </Link>


                    
                                 
            <Logout to="/signIn">
                <PiSignOutBold  />
            </Logout>



        </Container>
    )

}