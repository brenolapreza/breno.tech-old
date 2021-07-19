import styled from "styled-components";

const HeaderStyle = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-main);

    height: 70px;
`

const Logo = styled.a`
    font-family: var(--font-family-logo);
    font-size: 3.125rem;
    padding: 0 15px;
    
    text-decoration: none;
    color: var(--color-secundary);
`

const ListStyle = styled.ul`
    display: flex;
    list-style: none;
    text-decoration: none;
    
    a{
        text-decoration: none;
        color: var(--color-secundary);
    }

    li{
        padding: 0 5px;
        margin:0 5px;
    }
`

export { HeaderStyle, ListStyle, Logo }