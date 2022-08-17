import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BTTT = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 5px;
  color: black;
  text-align: center;
  background: lightblue;
  width: 200px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.25);

  a {
    text-decoration: none;
  }
`;

export const BackToTheTop = () => {
  return (
    <Wrapper>
      <BTTT>
        <a href="#top">Back To The Top</a>
      </BTTT>
    </Wrapper>
  );
};
