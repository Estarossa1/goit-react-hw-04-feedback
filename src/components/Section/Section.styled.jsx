import styled from 'styled-components';

export const SectionWrapper = styled.div`
    padding: 20px 0;
    background-color: #e7e7e7;
    overflow: hidden;
    color: black;
    text-align: center;
`;

export const SectionTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    font-weight: 700;
    text-align: center;

    @media screen and (min-width: 768px) {
    font-size: 32px;
    }

    @media screen and (min-width: 1280px) {
    font-size: 40px;
    }

    @media screen and (min-width: 1440px) {
    font-size: 48px;
    }
    
`;
