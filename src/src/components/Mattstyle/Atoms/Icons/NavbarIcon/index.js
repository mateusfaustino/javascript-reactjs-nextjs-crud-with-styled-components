import { Container,Row } from "./styles"
import { useState } from "react"
const NavbarIcon = ({componentClick})=>{
    const [closeState, setcloseState] = useState(false);
    
    function handleClick(){
        setcloseState(!closeState);
        componentClick();
    }
    return(
        <Container onClick={()=>handleClick()} close={closeState}>
            <Row id='row01'/>
            <Row id='row02'/>
            <Row id='row03'/>
        </Container>
    )
}
export default NavbarIcon