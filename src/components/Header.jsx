// this is for form, has button
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export default function Header(props) {
  const { logo, isOpen, handleButtonClick, title } = props;
  return (
    <StyledHeader>
      <div>
        {logo && <img src={logo} alt="logo" className={isOpen ? "open" : ""} />}
        <h2 id="title">{title}</h2>
      </div>
      <button onClick={handleButtonClick}>v</button>
    </StyledHeader>
  );
}
