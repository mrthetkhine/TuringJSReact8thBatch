import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import TodosUI from "@/app/components/todos/TodosUI";

export default function IndexPage() {
  return (<div>
    <TodosUI/>
  </div>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
