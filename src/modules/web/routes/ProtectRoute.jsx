import { Navigate } from "react-location";
import { useUserContext } from "../../../context/user/UserContext"

// eslint-disable-next-line import/no-anonymous-default-export
export default ({children}) => {

    const user = useUserContext();

    if(user.data){
        return({ children})
    }

    if(user.isLoading){
        return <div>spinner</div>
    }

    return <Navigate to="/" />
}