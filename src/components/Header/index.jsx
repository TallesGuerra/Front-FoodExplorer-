import { Container, Logout } from "./styles";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

import { Link, useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { PiSignOutBold, PiReceipt } from "react-icons/pi";

export function Header() {
  const { signOut } = useAuth();
  const navigation = useNavigate;

  function handleSignOut(){
    navigation("/signIn");
    signOut();
  }


  return (
    <Container>
      {/* <List /> */}
      <Logo />

      <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />

      <Link to="/addDish" className="btnNew">
        <Button title="Novo prato" />
      </Link>

      {/* <Button 
                            title="Pedido"
                            icon={<PiReceipt  />}
                            />                
                 */}

      <Logout onClick={signOut}>
        <PiSignOutBold />
      </Logout>
    </Container>
  );
}
