import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: ${({ theme }) => theme.header.font.family};
    font-size: 35px;
    font-weight: 400;
    color: #201010;
`;

export const H2 = styled.h2`
    margin-top: 20px;
    font-family: ${({ theme }) => theme.header.font.family};
    font-size: 20px;
    font-weight: 400;
    color: #201010;
`;
