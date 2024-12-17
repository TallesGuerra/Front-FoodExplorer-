import { Container } from "./styles";

export function ButtonText({title, icon, isActive = false, ...rest}){
    return(
        <Container 
            type="button" 
            $isactive = {isActive.toString()}
            {...rest}
        >
            {title}
            {icon}

        </Container>
    );
}