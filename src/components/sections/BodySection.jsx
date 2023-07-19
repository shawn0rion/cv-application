// purpose: display the state of the body in Resume
import styled from "styled-components";

const StyledBodySection = styled.div`
  display: flex;
  flex-direction: column;

  & .title {
    text-align: center;
  }

  & .content {
    display: flex;
    gap: 10px;
  }

  & .personal,
  & .social {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
// import images for phone, location, social etc
export default function BodySection(props) {
  const { name, email, phone, location, github, linkedIn } = props;
  const content = [email, phone, location, github, linkedIn];
  return (
    // TODO: each value will  have a logo
    <StyledBodySection>
      <h2 className="title">{name}</h2>{" "}
      {/* if there is some data besides name, show contact me */}
      {content.some((x) => x !== "") && (
        <p className="seperator">Contact me: </p>
      )}
      <div className="content">
        <div className="personal">
          <span className="email">{email}</span>
          <span className="phone">{phone}</span>
          <span className="location">{location}</span>
        </div>
        <div className="social">
          <span className="github">{github}</span>
          <span className="linkedIn">{linkedIn}</span>
        </div>
      </div>
    </StyledBodySection>
  );
}
