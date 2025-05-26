const SimpleForm = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.password.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="p-10 max-w-xl mx-auto bg-gray-200 mt-10 rounded-md">
      <form onSubmit={handleSubmitForm} className="">
        <input
          className="border border-y-slate-700 mb-2 w-full text-2xl p-1"
          placeholder="Enter you name"
          type="text"
          name="name"
        />
        <br />
        <input
          className="border border-y-slate-700 mb-2 w-full text-2xl p-1"
          placeholder="Enter you email"
          type="email"
          name="email"
        />
        <br />
        <input
          className="border border-y-slate-700 mb-2 w-full text-2xl p-1"
          placeholder="Enter you password"
          type="password"
          name="password"
        />
        <br />
        <button
          type="submit"
          className="bg-slate-700 cursor-pointer text-white w-full py-2 text-2xl font-medium rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default SimpleForm;
