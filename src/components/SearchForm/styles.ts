import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;   

    input {
        flex: 1;
        border-radius: 8px;
        border: 0;
        background-color: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
        padding: 1rem;
    }

    &::placeholder {
        color: ${props => props.theme["gray-500"]};
    }

    button {
        height: 50px;
        border: 1px solid ${props => props.theme["green-300"]};
        background-color: transparent;
        color: ${props => props.theme["green-300"]};
        padding: 0 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
        gap: 0.5rem;

        &:hover{
            background-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            border-color: ${props => props.theme["green-500"]};
        }
    }

`

