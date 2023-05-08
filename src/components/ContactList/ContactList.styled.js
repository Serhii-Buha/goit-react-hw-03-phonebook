import styled from 'styled-components';

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 0 5px; */

  padding: 0;
  margin-top: 10px;

  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 10px;
  margin-left: auto;
  margin-right: 65%;

  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  background-color: #f3f6f9;

  /* background-color: #20bcc6; */
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    background-color: #c0c9d8;
  }
`;
