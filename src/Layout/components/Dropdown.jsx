import styled from 'styled-components';

const List = styled.a`
  display: flex;
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  text-decoration: none;
`;

const Dropdown = (props) => {
  console.log(props);
  return props.isDropped ? (
    <div className={props.className}>
      <List href="#">Account Settings</List>
      <List href="#">Billing</List>
      <List href="#">Calendar Connection</List>
    </div>
  ) : (
    ``
  );
};

export default Dropdown;
