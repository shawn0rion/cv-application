import { useState, useEffect } from "react";
import { GlobalStyle } from "./Theme.js";
import styled from "styled-components";
import Body from "./components/Body.jsx";
import DownloadPdf from "./components/DownloadPdf.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import BodySection from "./components/sections/BodySection.jsx";
import FormDataSection from "./components/sections/FormDataSection.jsx";
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100%;
  width: 100%:
`;

const OutputContainer = styled.div`
  height: 100vh;
  width: 100%;
  min-width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: start;
`;

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [educationStartDate, setEducationStartDate] = useState("");
  const [educationEndDate, setEducationEndDate] = useState("");
  const [educationDescription, setEducationDescription] = useState("");
  const [experienceStartDate, setExperienceStartDate] = useState("");
  const [experienceEndDate, setExperienceEndDate] = useState("");
  const [experienceDescription, setExperienceDescription] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  // event handler functions

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };

  const handleLocationInput = (e) => {
    setLocation(e.target.value);
  };
  const handleGithubInput = (e) => {
    setGithub(e.target.value);
  };

  const handleLinkedInInput = (e) => {
    setLinkedIn(e.target.value);
  };

  const handleSchoolInput = (e) => {
    setSchool(e.target.value);
  };

  const handleMajorInput = (e) => {
    setMajor(e.target.value);
  };

  const handleEducationStartDateInput = (e) => {
    setEducationStartDate(e.target.value);
  };

  const handleEducationEndDateInput = (e) => {
    setEducationEndDate(e.target.value);
  };

  const handleEducationDescriptionInput = (e) => {
    setEducationDescription(e.target.value);
  };

  const handleExperienceStartDateInput = (e) => {
    setExperienceStartDate(e.target.value);
  };

  const handleExperienceEndDateInput = (e) => {
    setExperienceEndDate(e.target.value);
  };

  const handleExperienceDescriptionInput = (e) => {
    setExperienceDescription(e.target.value);
  };

  const handleCompanyInput = (e) => {
    setCompany(e.target.value);
  };

  const handleJobTitleInput = (e) => {
    setJobTitle(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <DownloadPdf />
      <InputContainer>
        <Body
          name={name}
          email={email}
          phone={phone}
          location={location}
          github={github}
          linkedIn={linkedIn}
          onNameChange={handleNameInput}
          onEmailChange={handleEmailInput}
          onPhoneChange={handlePhoneInput}
          onLocationChange={handleLocationInput}
          onGithubChange={handleGithubInput}
          onLinkedInChange={handleLinkedInInput}
        />
        <EducationForm
          school={school}
          major={major}
          startDate={educationStartDate}
          endDate={educationEndDate}
          description={educationDescription}
          title="Education"
          onSchoolChange={handleSchoolInput}
          onMajorChange={handleMajorInput}
          onStartDateChange={handleEducationStartDateInput}
          onEndDateChange={handleEducationEndDateInput}
          onDescriptionChange={handleEducationDescriptionInput}
        />
        <ExperienceForm
          company={company}
          jobTitle={jobTitle}
          startDate={experienceStartDate}
          endDate={experienceEndDate}
          description={experienceDescription}
          title="Experience"
          onCompanyChange={handleCompanyInput}
          onJobTitleChange={handleJobTitleInput}
          onStartDateChange={handleExperienceStartDateInput}
          onEndDateChange={handleExperienceEndDateInput}
          onDescriptionChange={handleExperienceDescriptionInput}
        />
      </InputContainer>

      <OutputContainer id="cv">
        <BodySection
          name={name}
          email={email}
          phone={phone}
          location={location}
          github={github}
          linkedIn={linkedIn}
        />
        <FormDataSection
          title="Education"
          role={major}
          from={school}
          startDate={educationStartDate}
          endDate={educationEndDate}
          description={educationDescription}
        />
        <FormDataSection
          title="Experience"
          role={jobTitle}
          from={company}
          startDate={experienceStartDate}
          endDate={experienceEndDate}
          description={experienceDescription}
        />
      </OutputContainer>
    </>
  );
}

export default App;
