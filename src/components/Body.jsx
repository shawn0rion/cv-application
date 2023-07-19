export default function Body(props) {
  const {
    name,
    email,
    phone,
    location,
    github,
    linkedIn,
    onNameChange,
    onEmailChange,
    onPhoneChange,
    onLocationChange,
    onGithubChange,
    onLinkedInChange,
  } = props;

  return (
    <div>
      <h1>Personal Details</h1>

      <label htmlFor="fullname">Name:</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        value={name}
        placeholder="Fullname"
        onChange={onNameChange} // Set the onChange event handler
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        placeholder="example@gmail.com"
        onChange={onEmailChange} // Set the onChange event handler
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        placeholder="8249249211"
        onChange={onPhoneChange} // Set the onChange event handler
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={location}
        placeholder="City, Country"
        onChange={onLocationChange} // Set the onChange event handler
      />

      <label htmlFor="github">Github:</label>
      <input
        type="text"
        id="github"
        name="github"
        value={github}
        onChange={onGithubChange} // Set the onChange event handler
      />

      <label htmlFor="linkedIn">LinkedIn:</label>
      <input
        type="text"
        id="linkedIn"
        name="linkedIn"
        value={linkedIn}
        onChange={onLinkedInChange} // Set the onChange event handler
      />
    </div>
  );
}
