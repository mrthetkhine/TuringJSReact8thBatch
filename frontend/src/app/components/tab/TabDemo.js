import Tab from "./Tab";
import Counter from "../Counter";

export default function TabDemo()
{
    const headers=["Tab1","Tab2","Tab3"]
    return(<Tab headers={headers}>
        <div className={"container"}>Page 1</div>
        <div>Page 2</div>
        <Counter/>
    </Tab>);
}