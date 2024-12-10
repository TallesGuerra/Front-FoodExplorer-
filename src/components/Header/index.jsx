import { Container, Logout,Search  } from "./styles";
import { List, Receipt, SignOut, MagnifyingGlass   } from "@phosphor-icons/react";
import { Logo } from "../../components/Logo";



export function Header(){
    return(
        <Container>
            {/* <List /> */}
            <Logo />

            <Search 
            type="search" 
            name=""
            id="search"
           
            placeholder="Busque por pratos e ingredientes"            
            >
              
            </Search>              
                    

                    
            
            

            <Receipt />         
            
            <Logout>
                <SignOut  />
            </Logout>



        </Container>
    )

}