import withBorder from './withBorder';
import Greeting from "../../Greeting";
import Counter from "../../Counter";
import withLogger from "./withLogger";
import TodoList from "./TodoList";
import withFetchLoader from "./withFetchLoader";
import UserList from "./UserList";
const GreetingWithBorder = withBorder(Greeting);
const CounterWithBorder = withLogger( withBorder(Counter));
const TodoWithLoading = withFetchLoader(TodoList,'https://jsonplaceholder.typicode.com/todos');
const UserWithLoading = withFetchLoader(UserList,'https://jsonplaceholder.typicode.com/users')
export default function HocDemo()
{
    return (<div>
        {/*<GreetingWithBorder/>
        <CounterWithBorder/>*/}
        {/*<TodoWithLoading/>*/}
        <UserWithLoading/>
    </div>);
}