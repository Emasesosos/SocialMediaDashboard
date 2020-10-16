import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    body {
        align-items: center;
        background-color:  ${({ theme }) => theme.body};
        display: flex;
        flex-direction: column;
        font-size: 14px;
        justify-content: center;
        transition: all 0.3s linear;
    }

    .slider:before {
        background-color: ${({ theme }) => theme.slider};
    }

`;