import styled from 'styled-components';
import arrowDown from './img/arrow_down.svg';

const ScrollHint = styled.button`
  display: none;

  @keyframes scroll-hint-animation {
    0% {
      transform: translateY(10px);
    }
    60% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(10px);
    }
  }
  @media (max-width: 1140px) {
    display: inline-block;
    height: 50px;
    width: 100px;
    margin-bottom: 20px;
    background: url("${arrowDown}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: none;
    outline: none;
    animation: scroll-hint-animation 2s infinite;
  }
`;

export default ScrollHint;
