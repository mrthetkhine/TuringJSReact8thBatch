"use client";
import * as Yup from "yup";

import { Formik, Form, Field } from 'formik';
import {Button, Modal,Form as BForm} from "react-bootstrap";
import {useLoginMutation} from "@/lib/features/auth/authApi";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {selectCount} from "@/lib/features/counter/counterSlice";
import {authSlice, selectAuth,login} from "@/lib/features/auth/authSlice";
import {useRouter} from "next/navigation";
import { useSearchParams } from 'next/navigation';
import {useEffect} from "react";

const UserSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Username Required'),
    password: Yup.string()
        .required('Password Required'),

});
export default function Page()
{
    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);
    const [loginApi,loginApiResult] = useLoginMutation();
    const searchParams = useSearchParams();

    const router =useRouter();
    const redirectUrl = searchParams.get('redirectUrl');
    useEffect(()=>{
        console.log('Use effect fired');
        //console.log('Auth ',auth, ' redirect url ',redirectUrl);
        if(auth)
        {
            //router.push('/');

            if(redirectUrl)
            {
                router.push(redirectUrl);
            }
            else
            {
                router.push('/');
            }

        }
    },[]);

    let initialValues = {
        userName:'',
        password:'',
    };
    const loginHandler=(values)=>{
        console.log('Login ',values);
        loginApi(values)
            .unwrap()
            .then( data=>{
                console.log('Login ok ',data);
                dispatch(login(data));
                if(redirectUrl)
                {
                    router.push(redirectUrl);
                }
                else
                {
                    router.push('/');
                }

            },(error)=>{
                console.log('Login failed ',error);
            })
    };
    return(<div>
        <Formik initialValues={initialValues}
                validationSchema={UserSchema}
                onSubmit={values => {
                    // same shape as initial values
                    loginHandler(values);
                }}>
            {({ errors, touched }) => (
                <Form>
                    <BForm.Group>

                        <BForm.Label htmlFor="title">Username</BForm.Label>
                        <Field
                            type="text"
                            name="userName"
                            as={BForm.Control}

                        />

                        {errors.userName && touched.userName ? (
                            <div className={"alert alert-danger"}> {errors.userName}</div>
                        ) : null}
                    </BForm.Group>
                    <BForm.Group>
                        <BForm.Label htmlFor="password">Password</BForm.Label>
                        <Field
                            type="password"
                            name="password"
                            as={BForm.Control}

                        />

                        {errors.password && touched.password ? (
                            <div className={"alert alert-danger"}> {errors.password}</div>
                        ) : null}

                    </BForm.Group>


                    <BForm.Group>
                        &nbsp;
                        <button type={"submit"} className={"btn btn-primary"}>
                            Login
                        </button>
                    </BForm.Group>
                </Form>
            )}
        </Formik>
    </div>);
}