import { FiMenu, FiLogOut } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

import { useNavigate } from 'react-router-dom';
import { Container, Menu, Brand, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

import { Search } from "../../components/Search";
import { Button } from "../../components/Button";

import brand from "../../assets/brand.svg";
import brandAdmin from "../../assets/brand-admin.svg";
import brandMobile from "../../assets/brand-mobile.svg";

export function Header({ isAdmin, isDisabled, isMenuOpen, setIsMenuOpen, setSearch }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Define a logo com base no perfil do usuário e no tipo de dispositivo
  const logo = isAdmin ? (isDesktop ? brandAdmin : brandMobile) : brand;

  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleFavorites() {
    navigate("/favorites");
  }

  function handleNew() {
    navigate("/new");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      {!isDesktop && (
        <Menu>
          {!isMenuOpen ?
            <FiMenu className="fi-menu-icon" onClick={() => setIsMenuOpen(true)} /> :
            <>
              <MdClose size={"1.8rem"} onClick={() => setIsMenuOpen(false)} />
              <span>Menu</span>
            </>
          }
        </Menu>
      )}

      {(isDesktop || !isMenuOpen) && (
        <>
          <Brand>
            {/* Renderiza a imagem da logo */}
            <img src={logo} alt="Logo" onError={(e) => { e.target.src = brand; }} />
          </Brand>

          {isDesktop && <Search isDisabled={isDisabled} setSearch={setSearch} />}

          {/* Botão "Meus favoritos" só aparece se o usuário NÃO for Admin */}
          {/* {isDesktop && !isAdmin && (
            <button className="favorites" onClick={handleFavorites}>Meus favoritos</button>
          )} */}

          {isAdmin ? 
            (isDesktop && <Button className="new" title="Novo prato" onClick={handleNew} />) :
            <Button className="orders" title={isDesktop ? "Pedidos" : undefined} isCustomer orderCount={0} />
          }

          {isDesktop && (
            <Logout onClick={handleSignOut}>
              <FiLogOut size={"3.2rem"} />
            </Logout>
          )}
        </>
      )}
    </Container>
  );
}