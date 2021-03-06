import styled from 'styled-components';

const FormCardImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  flex-basis: 375px;
  text-align: center;
  background: url("${process.env.PUBLIC_URL}/img/stamp_area.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (max-width: 1140px) {
    height: 100vh;
  }
`;

export default FormCardImage;
