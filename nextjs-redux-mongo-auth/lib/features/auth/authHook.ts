import {useSelector} from "react-redux";
import {selectAuth} from "@/lib/features/auth/authSlice";

export default function useAuth()
{
    const auth = useSelector(selectAuth);
    return auth ;
}