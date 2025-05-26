import CustomHook from "./components/CustomHook/CustomHook";
import RefForm from "./components/RefForm/RefForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StateForm from "./components/StateForm/StateForm";
import User from "./components/User/User";
import UserProvider from "./context/UserProvider";

const App = () => {
  return (
    <div>
      {/* <SimpleForm /> */}
      {/* <StateForm /> */}
      {/* <RefForm /> */}
      {/* <CustomHook /> */}
      {/* <ReusableForm /> */}
      <UserProvider>
        <User />
      </UserProvider>
    </div>
  );
};
export default App;
