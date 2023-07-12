import styled from 'styled-components';
import { getRandomColor } from '../../utils/getRandom';

export const NotificationWrapper = styled.div`
    background-color: #9c9c9c;
    border: 1px solid #ff0000;
    border-radius: 4px;
    margin-bottom: 10px;
    color: #faf8f8;
    font-size: 1.2rem;
    font-weight: bolder;

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`;

export const NotificationMessage = styled.p`
    margin: 0 auto;
    text-align: center;
    color: rgb(20, 0, 255)

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;