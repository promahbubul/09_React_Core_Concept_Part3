import FormComponent from "../FormComponent/FormComponent";

const ReusableForm = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Sign Up:::", name, email, password);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Update Profile:::", name, email, password);
  };
  return (
    <div>
      <FormComponent handleSubmitForm={handleSignUp} title={"Sign Up"} />
      <FormComponent
        handleSubmitForm={handleUpdateProfile}
        title={"Update Profile"}
      />
    </div>
  );
};
export default ReusableForm;
