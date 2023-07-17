import { CardComponent } from "./Card";
import { Content } from "./Content";
import {  ComponentContainer   } from "./styles"


export function Component(){

  
  return (
    <ComponentContainer>
       <Content />
       <CardComponent /> 
    </ComponentContainer>
  );
}

export default Component;
