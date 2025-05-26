import { useState } from "react";

const StateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(name, email, password)
  };
  return (
    <div className="max-w-xl mx-auto">
      <form
        onSubmit={handleSubmitForm}
        className=" bg-gray-200 p-10  my-10 rounded-md"
      >
        <input
          className="border border-y-slate-700 mb-2 w-full text-2xl p-1"
          placeholder="Enter you name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="border border-y-slate-700 mb-2 w-full text-2xl p-1"
          placeholder="Enter you email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="border border-y-slate-700 mb-2 w-full text-2xl p-1"
          placeholder="Enter you password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="bg-slate-700 cursor-pointer text-white w-full py-2 text-2xl font-medium rounded-sm"
        >
          Submit
        </button>
      </form>
      <div className="">
        <div className="flex text-lg flex-row items-center gap-2 border-b border-dashed border-b-slate-300">
          <h2 className="font-medium">Name: </h2>
          <p className="">{name}</p>
        </div>
        <div className="flex text-lg flex-row items-center gap-2 border-b border-dashed border-b-slate-300">
          <h2 className="font-medium">Email: </h2>
          <p className="">{email}</p>
        </div>
        <div className="flex text-lg flex-row items-center gap-2 border-b border-dashed border-b-slate-300">
          <h2 className="font-medium">Password: </h2>
          <p className="">{password}</p>
        </div>
      </div>
    </div>
  );
};
export default StateForm;
