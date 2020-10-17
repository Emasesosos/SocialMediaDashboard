import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `

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

    .navbar-title {
        h2 {
            color: ${({ theme }) => theme.h2};
        }
    }

    .social-network {
        &:hover {
            background-color: ${({ theme }) => theme.hoverCard};
        }
    }

    .social-network {
        background-color: ${({ theme }) => theme.backCard};
    }
    
    .info {
        &:hover {
            background-color: ${({ theme }) => theme.hoverCard};
        }
    }

    .info {
        background-color: ${({ theme }) => theme.backCard};
    }

    .follows {
        h1 {
            color: ${({ theme }) => theme.h1};
        }
    }

    .info-network {
        h1 {
            color: ${({ theme }) => theme.h1};
        }
    }

`;