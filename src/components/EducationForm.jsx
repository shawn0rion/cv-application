import styled from "styled-components";
import React, { useState } from "react";
import Header from "./Header.jsx";

const StyledForm = styled.form`
  display: none;
  padding: 20px;

  & label {
    display: block;
  }

  &.open {
    display: flex;
    flex-direction: column;
  }
`;

export default function EducationForm(props) {
  const {
    school,
    major,
    startDate,
    endDate,
    description,
    title,
    onSchoolChange,
    onMajorChange,
    onStartDateChange,
    onEndDateChange,
    onDescriptionChange,
    onToggleClick,
    logo,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    // close it for now
    setIsOpen(false);
  };

  return (
    <>
      <Header
        title={title}
        logo={logo}
        isOpen={isOpen}
        handleButtonClick={handleToggleClick}
      />
      <StyledForm
        className={`form-content ${isOpen ? "open" : ""}`}
        onSubmit={handleFormSubmit}
      >
        <div className="form-content">
          <label htmlFor="major">Major:</label>
          <input
            type="text"
            id="major"
            value={major}
            onChange={onMajorChange}
          />
          <label htmlFor="school">School:</label>
          <input
            type="text"
            id="school"
            value={school}
            onChange={onSchoolChange}
          />
          <div className="dates">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="text"
              id="startDate"
              value={startDate}
              onChange={onStartDateChange}
            />
            <label htmlFor="endDate">End Date:</label>
            <input
              type="text"
              id="endDate"
              value={endDate}
              onChange={onEndDateChange}
            />
          </div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={onDescriptionChange}
          ></textarea>

          <button type="submit">Save</button>
        </div>
      </StyledForm>
    </>
  );
}
