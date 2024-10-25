import {Container} from "./style"

export function Button({title, loading=false, ...rest}){
    return(
        <Container type="button" disabled={loading} {...rest}>
            {title}
        </Container>
    )
}