import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  header {
    padding: 0.5rem;
    display: flex;
    align-items: end;
    font-weight: 500;
    font-size: 20px;

    span {
      margin-left: 0.5rem;
      font-size: 16px;
      font-weight: 200;
    }
  }

  h1 {
    padding-left: 0.5rem;
    margin: 0;
  }
`;

export const Action = styled.div`
  padding-left: 0.5rem;
  display: flex;

  p {
    margin: 0;
    font-weight: 500;
  }
  div {
    flex-direction: column;
    margin-right: 0.5rem;
  }
`;

export const Inputs = styled.input`
  margin-top: 0.5rem;
  border: none;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;

  width: 277px;

  background: #f4f4f4;
  border-radius: 4px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const InputsEdit = styled.input`
  margin-top: 0.5rem;
  border: none;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;

  width: 90%;

  background: #f4f4f4;
  border-radius: 4px;
`;

export const Create = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 6.5px;

  width: 113px;
  height: 42px;
  border: none;
  background: #1e1e1e;
  border-radius: 4px;
  color: #fff;
`;

export const Save = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 6.5px;

  width: 113px;
  height: 42px;
  border: none;
  background: #1e1e1e;
  border-radius: 4px;
  color: #fff;
`;

export const Colors = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  height: 2rem;
  width: 2rem;
  margin: 1rem;
  transition: all 200ms ease-in-out;

  background-color: ${(props) => props.color};
`;

export const ListColors = styled.div`
  display: flex;

  p {
    margin: 0;
  }
`;

export const ListStatus = styled.div`
  display: flex;
  max-width: 100vw;
  flex-wrap: wrap;
`;
export const PopoverContent = styled.div`
  display: flex;
  max-width: 100vw;
  flex-wrap: wrap;
  border: solid 1px #000;
`;

export const StatusModel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;

  padding: 0.5rem 1rem;
  margin: 1rem;
  transition: all 200ms ease-in-out;
  min-width: 3rem;

  background-color: ${(props) => props.color};

  p {
    margin: 0;
    font-weight: 500;
    color: #fff;
  }

  &:hover {
    filter: brightness(0.85);
  }
`;
