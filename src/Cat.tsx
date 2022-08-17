import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useCats } from "./CatsContext";

type props = {
  isFriendly: number;
};

const Button = styled.button`
  background-color: crimson;
  border: none;
  border-radius: 15px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const YesButton = styled(Button)`
  background-color: green;
  color: #fff;
  margin: 10px;
`;
export const NoButton = styled(YesButton)`
  background-color: crimson;
`;

const Row = styled.div<props>`
  display: inline-block;
  overflow: auto;
  background: ${(props) =>
    props.isFriendly > 3 ? "rgb(184, 255, 126)" : "rgb(162, 240, 250)"};
  box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.25);
  margin: 0 15px 30px;
  padding: 1rem;
  width: 43vw;
  min-height: 500px;
  border-radius: 10px;

  img {
    max-height: 200px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const Modal = styled.div`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -125px;
  background: #fffffff0;
  color: #322f33;
  width: 250px;
  height: 200px;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 8px 8px -4px lightblue;
`;

interface CatProps {
  id: string;
  name: string;
  image: string;
  description: string;
  isFriendly: number;
}

export const Cat = (props: CatProps) => {
  const { cats, setCats } = useCats();
  const [openModal, setOpenModal] = useState(false);

  const deleteCat = (id: string) => {
    const updatedCats = [...cats].filter((item) => item.id !== id);
    setCats(updatedCats);
  };

  const handlePopup = () => {
    setOpenModal((openModal) => !openModal);
  };

  useLayoutEffect(() => {
    return () => {
      console.log(`${props.name} has been removed`);
    };
  }, [props.name]);
  return (
    <Row isFriendly={props.isFriendly}>
      <img src={props.image} alt="not found" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <Button onClick={handlePopup}>Delete</Button>
      {openModal && (
        <>
          <Modal>
            <h2>Are you sure you want to delete {props.name}?</h2>
            <YesButton onClick={handlePopup}>Cancel</YesButton>
            <NoButton onClick={() => deleteCat(props.id)}>Delete</NoButton>
          </Modal>
        </>
      )}
    </Row>
  );
};
