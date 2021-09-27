import styled from "styled-components";
export const Row = styled.div`
    background:#fff;
    height:4px;
`
export const Container = styled.div`
    height:32px;
    width: 32px;
    max-width:40px;
    padding:4px 2px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    #row01{
        transform: translateY(${props=>props.close?`10px`:`0`})  rotate(${props=>props.close?`-45deg`:`0`}) scaleY(${props=>props.close?`0.8`:`1`});
        transition:1s;
    }
    #row02{
        transform:  scaleX(${props=>props.close?`0`:`1`});
        transition:0.5s;
    }
    #row03{
        transform: translateY(${props=>props.close?`-10px`:`0`})  rotate(${props=>props.close?`45deg`:`0`}) scaleY(${props=>props.close?`0.8`:`1`});
        transition:1s;  
    }
    @media screen and (min-width: 755px) {
        display: none !important;
    }
      
`