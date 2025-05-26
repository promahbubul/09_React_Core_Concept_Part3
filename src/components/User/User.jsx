import { useContext } from "react"
import { UserContext } from "../../context/UserProvider"

const User = () => {
    const {user} = useContext(UserContext);
    console.log(user)
  return (
    <div>User</div>
  )
}
export default User