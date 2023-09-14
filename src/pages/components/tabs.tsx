import React, { useEffect, useState } from "react";
//@ts-ignore
const Tabs  = ({ children, classNameAdd, customHandleClick }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e: any, newActiveTab: any) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  useEffect(()=>{
    if(customHandleClick === 'Sign Up'){
      setActiveTab(customHandleClick)
    }
    else if(customHandleClick === 'Log In'){
      setActiveTab(customHandleClick)
    } 
  },[customHandleClick])

    return (
      <>
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400">
        <ul className="flex flex-wrap -mb-px justify-start">
        {children.map((child: any) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? " border-b-2 border-blue-600 text-blue-600 active dark:text-blue-500 dark:border-blue-500"
                : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            } inline-block p-2 border-b-2 rounded-t-lg ${classNameAdd}`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
          </ul>
        </div>
      <div className="py-4">
        {children.map((child: any) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
      </>
  );
};
//@ts-ignore
const Tab = ({ label, children }) => {
  return (
    //@ts-ignore
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
