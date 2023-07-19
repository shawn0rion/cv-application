import styled from "styled-components";

const StyledSection = styled.div`
  display: none;
  flex-direction: column;

  &.active {
    display: flex;
  }

  & .title {
    width: 100%;
    font-weight: 700;
    border-bottom: 2px solid #000;
  }

  & .row {
    display: flex;
    width: 100%;
  }

  & .timePeriod {
    display: block;
  }

  & .stack {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;
// props are role, from, startdate, endDate location
export default function FormDataSection(props) {
  const { title, role, from, startDate, endDate, description } = props;
  const items = [role, from, startDate, endDate, description];
  return (
    <StyledSection className={items.some((x) => x !== "") ? "active" : ""}>
      <h2 className="title">{title}</h2>
      <div className="content">
        <div className="row">
          <span className="role">{role} </span>
          <span></span>
          <span className="from">
            {role && from ? ",  " : ""}
            {from}
          </span>
        </div>
        <span className="timePeriod">
          {startDate}
          {startDate && endDate ? " -" : ""} {endDate}
        </span>
        {description && (
          <span className="description">Description: {description}</span>
        )}
      </div>
    </StyledSection>
  );
}
