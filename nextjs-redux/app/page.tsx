import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import { Counter } from "./components/counter/Counter";
import TodosUI from "@/app/components/todos/TodosUI";
import TodoCount from "@/app/components/TodoCount";
import TodoApiUI from "@/app/components/todos/TodoApiUI";

export default function IndexPage() {
  return (<div>
   {/* <TodoCount/>
    <TodosUI/>*/}

    <Counter/>
  </div>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
