import { Container } from "./style";

export function Input({ icon: Icon = false , ...rest}){
    return(
        <Container>
            {Icon ? <Icon/> : null}
            <input {...rest}/>
        </Container>
    )
}