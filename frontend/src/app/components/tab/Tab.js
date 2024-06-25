import "./Tab.css";
import {useState} from "react";

function TabHeader({tabIndex,header,activeTab, onHeaderClick})
{
    const btnClick = ()=>{
      //console.log('Click ');
       onHeaderClick(tabIndex);
    };
    let className = "tab-header";
    if(activeTab)
    {
        className+= " active-tab"
    }
    return(<div className={className} onClick={btnClick}>
        {header}
    </div>)
}
export default function Tab({children,headers})
{
    const [currentTab,setCurrentTab] = useState(0);
    const headerClick = (index)=>{
        console.log('Header click ',index);
        setCurrentTab(index);
    }
    return(<div className={"tab-container"}>

        {
            headers.map((header,index)=><TabHeader
                key={index}
                tabIndex={index}
                activeTab = {index==currentTab}
                header={header}
                onHeaderClick={headerClick}/>)
        }
        <div className={"tab-body"}>
            {children[currentTab]}
        </div>
    </div>);
}