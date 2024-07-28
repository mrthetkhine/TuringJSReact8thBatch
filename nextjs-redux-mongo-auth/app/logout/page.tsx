"use client";
import {useAppDispatch} from "@/lib/hooks";
import {logout} from "@/lib/features/auth/authSlice";
import {moviesApiSlice} from "@/lib/features/movies/movieApi";
import {useRouter} from "next/navigation";

export default function LogoutPage()
{
    const router =useRouter();
    const dispatch = useAppDispatch();
    const btnLogoutHandler = ()=>{
      console.log('logout');
      dispatch(logout());
      dispatch(moviesApiSlice.util.resetApiState());
      router.push('/');
    };
    return(<div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnLogoutHandler}>
            Logout
        </button>
    </div>);
}