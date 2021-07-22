import styled from "styled-components";

const Logo = styled.a`
   font-family:"Porter Sans Inline Block";
   font-size:4rem;
  `

const Head = styled.div` 
    background: var(--color-main);  
    height: 70px;
 
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;

    div ul{
        display: ${({ open }) => open ? 'flex' : 'none'};
        transition: 0.4s;   

    } 
 
    .rotate{
        width: 2.1rem; 
        height: 0.25rem;
        background: var(--color-secundary);
        border-radius: 10px;
        transform-origin: 1;
       
        transition: 0.4s;

     
      
    }
    .x1{
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        margin-top: ${({open}) => open ? '-15px' : '0'};

        
    }
    .x3{
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? '0' : '100'};


    }
    .x2{
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};


    }
`

const Button = styled.div`
    position: absolute;
    z-index: 999999999;
    background: none;
    border:none;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 15px;
   

    color:var(--color-secundary);

`

const ListMenu = styled.div`
 
    ul{
        background: rgba(0,0,0,0.9);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        transition: 0.4;
        
    }

    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    z-index: 9999;
    
    list-style: none;

    a{
        font-size:2rem;
    }

`

export { Logo, Head, ListMenu, Button }