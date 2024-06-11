"use client";
import Image from "next/image";
import styles from "./page.module.css";
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

export default function Home() {
    console.log('HelloWorld ',HelloWorld());
    let obj = {
        name: 'Test User',
        imageUrl:'https://randomuser.me/api/portraits/men/59.jpg'
    }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Header</h1>
      </div>

      <div className={styles.center}>

      </div>

      <div className={styles.grid}>
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
          <RefEquality/>
      </div>
    </main>
  );
}
