"use client";
import Image from "next/image";
//import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import HelloWorld,{AnotherChild} from "./components/HelloWorld";
import ClassComponent from "./components/ClassComponent";
import JsxDemo from "./components/JsxDemo";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
import Container from "./components/Container";
import Conditional from "./components/Conditional";
import ListDemo from "./components/ListDemo";
import ImpureDemo from "./components/ImpureDemo";
import Counter from "./components/Counter";
import RefEquality from "./components/RefEquality";
import CounterTwo from "./components/CounterTwo";
import UpdateListDemo from "./components/UpdateListDemo";
import UserForm from "./components/UserForm";
import TodoWithReducer from "./components/TodoWithReducer";
import ContextProblem from "./components/ContextProblem";
import ContextDemo from "./components/context/ContextDemo";
import TodoWithReducerContext from "./components/context/TodoWithReducerContext";
import RefDemo from "./components/RefDemo";
import FocusInput from "./components/FocusInput";
import EffectDemo from "./components/effect/EffectDemo";
import FetchTodo from "./components/effect/FetchTodo";
import CleanUpDemo from "./components/effect/CleanupDemo";
import DestroyDemo from "./components/effect/DestroyDemo";
import NativeEvent from "./components/effect/NativeEvent";
import ShowUser from "./components/hook/ShowUser";
import FormikDemo from "./components/formik/FormikDemo";
import BasicFormikExample from "./components/formik/BasicFormikExample";
import FormikValidation from "./components/formik/FormikValidation";
import CustomFormikDemo from "./components/customformik/CustomFormikDemo";
import CustomFormikWithJSX from "./components/customformik/CustomFormikWithJSX";
import PortalDemo from "./components/PortalDemo";
import FragmentDemo from "./components/FragmentDemo";
import SuspendDemo from "./components/SuspendDemo";
import ForwardRefDemo from "./components/ForwardRefDemo";
import MemoProblem from "./components/MemoProblem";
import MemoDemo from "./components/MemoDemo";
import ImperativeHandleDemo from "./components/ImperativeHandleDemo";
import ConflictDemo from "./components/ConflictDemo";
import SuspenseWithFetch from "./components/SuspenseWithFetch";
import RenderDemo from "./components/rendering/RenderDemo";
import SamePositionRender from "./components/rendering/SamePositionRender";
import DifferentPosition from "./components/rendering/DifferentPosition";
import DifferentRoot from "./components/rendering/DifferentRoot";
import SameRoot from "./components/rendering/SameRoot";
import ChildList from "./components/rendering/ChildList";
import TabDemo from "./components/tab/TabDemo";
import ComponentViaVariable from "./components/pattern/ComponentViaVariable";
import HocDemo from "./components/pattern/hoc/HocDemo";
import RenderPropertyDemo from "./components/pattern/render-property/RenderPropertyDemo";

export default function Home() {
    console.log('HelloWorld ',HelloWorld());
    let obj = {
        name: 'Test User',
        imageUrl:'https://randomuser.me/api/portraits/men/59.jpg'
    }
  return (
    <main >

      <div >
       {/*   <AnotherChild/>
        <HelloWorld/>
        <HelloWorld/>
          <ClassComponent/>*/}

         {/* <JsxDemo/>*/}
         {/* <Greeting name={"TK"} age={39}/>
          <Greeting name={"Someone"}/>*/}
        {/*  <Profile profile={obj}/>*/}
          {/*<Container message={"Message from page"}>
              <h1>Hello</h1>
              <div>How</div>
              <HelloWorld/>
          </Container>*/}
         {/* <Conditional/>
          <Conditional isAdmin={true}/>*/}
          {/*<ListDemo/>*/}
         {/* <ImpureDemo/>*/}
         {/* <Counter/>*/}
       {/*   <RefEquality/>*/}
      {/*    <Counter/>
          <Counter/>*/}
      {/*<CounterTwo/>*/}
       {/*   <UpdateListDemo/>*/}
         {/* <UserForm/>*/}
         {/* <TodoWithReducer/>*/}
       {/*   <ContextProblem/>*/}
         {/* <ContextDemo/>*/}
         {/* <TodoWithReducer/>*/}
        {/*  <TodoWithReducerContext/>*/}
        {/*  <RefDemo/>
          <RefDemo/>*/}
         {/* <FocusInput/>*/}
        {/*  <EffectDemo/>*/}

        {/*  <CleanUpDemo/>*/}
         {/* <DestroyDemo/>*/}
        {/*  <NativeEvent/>*/}
      {/*    <ShowUser/>
          <FetchTodo/>*/}
        {/*  <TodoWithReducer/>*/}
        {/*  <FormikDemo/>*/}
         {/* <BasicFormikExample/>*/}
         {/* <FormikValidation/>*/}
        {/*  <CustomFormikDemo/>*/}
        {/*  <CustomFormikWithJSX/>*/}
        {/*  <PortalDemo/>*/}
        {/*  <FragmentDemo/>*/}


         {/* <MemoProblem/>*/}
         {/* <MemoDemo/>*/}
          {/* <ForwardRefDemo/>*/}
         {/* <ImperativeHandleDemo/>*/}
         {/* <ConflictDemo/>*/}
          {/*<SuspendDemo/>*/}
         {/* <SuspenseWithFetch/>*/}
         {/* <RenderDemo/>*/}
         {/* <SamePositionRender/>*/}
         {/* <DifferentPosition/>*/}
         {/* <DifferentRoot/>*/}
          {/*<SameRoot/>*/}
         {/* <ChildList/>*/}
         {/* <TabDemo/>*/}
         {/* <ComponentViaVariable admin={false}/>*/}
         {/* <Greeting/>*/}
         {/* <HocDemo/>*/}
          <RenderPropertyDemo/>
      </div>
    </main>
  );
}
