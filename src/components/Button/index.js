import styled from "styled-components";


export const ButtonRosa = styled.button`
    

        color: var(--white);
        
        
        cursor: pointer;
        text-rendering: auto;
        margin-bottom: 15px;
        padding-top: 15px;
        padding-left: 30px;
        padding-right: 30px;
        font-family: "Montserrat", sans-serif; 
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        outline: none;
        border-radius: 4px;
        text-decoration: none;
        display: block;
        text-align: center;
        text-items: center;
        transition: opacity .3s;
        background-color: var(--button-pink);
        height: 50px;
        max-width: 320px;

        &:hover {
    
        transition: border-radius .3s;
        border-radius: 25px;
        color: var(--white);
        text-decoration: none;
        }
    
`;

export const ButtonEscuro = styled.button`
    

        color: var(--white);
        
        
        cursor: pointer;
        text-rendering: auto;
        margin-bottom: 15px;
        padding-top: 15px;
        padding-left: 30px;
        padding-right: 30px;
        font-family: "Montserrat", sans-serif; 
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        outline: none;
        border-radius: 4px;
        text-decoration: none;
        display: block;
        text-align: center;
        
        transition: opacity .3s;
        background-color: var(--button-dark);
        height: 50px;
        max-width: 320px;

        &:hover {
    
        transition: border-radius .3s;
        border-radius: 25px;
        color: var(--white);
        text-decoration: none;
        }
    
`;
   
