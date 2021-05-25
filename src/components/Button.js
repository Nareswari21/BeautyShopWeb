import styled from "styled-components";

export const Button = styled.button`
    width: 200px;
    height: 50px;
    color: white;
    font-size: 15px;
    font-weight: border;
    border: none;
    border-radius: 10px;
    width: ${(props) => (props.large ? "90px" : "50px")};
    height: 40px;
    background-color: ${props => props.color};

    &:hover {
        cursor:pointer;
        background-color: ${props => props.darkColor};
    }
`;