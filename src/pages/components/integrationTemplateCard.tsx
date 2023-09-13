import CardContainer from "./CardContainer";

type IntergrationTemplateCardProps = {
  title?: string;
  icon?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  buttonDisabled?: boolean;
  shadow?: boolean;
  status?: any;
  datas?: any;
  url?: any;
  data?: any;
  activeTab?:any;
  tab?:any;
  integrationData?:any;
};

export default function IntergrationTemplateCard({
  icon,
  title,
  description,
  url,
  buttonText = "Coming Soon",
  buttonDisabled = true,
  className = "",
  shadow = false,
  datas,
  data,
  activeTab,
  tab
}: IntergrationTemplateCardProps) {
  let connect_button = "Connect";
  if (title == "Slack" && data && data.team && data.team.id) {
    connect_button = "Disconnect";
  }

  const handleClick = (url: any, button_type: any) => {
    if (title == "Slack" || title == "Clinch.js") {
      if (button_type == "Connect") {
        // open in the same window
        window.location.href = url;
      } else {
        // call disconnect url
        window.location.href = '/integrations/slack/disconnect';
      }
    } else {
      // open in new window. Default case
      window.open(url, '_blank');
    }
  };

  return (
    <>
      
      <CardContainer className={className} shadow={shadow}>
        <div className="">
          {/* <div className="grid pb-4 grid-cols-1 md:grid-cols-2 gap-4 items-center"> */}
          {/* Left Column */}
          <div className="flex gap-4 items-center">
            {/* <div className="container h-12 w-12 max-w-screen-lg pb-10 mx-auto md:mx-0"> */}
            <img className="h-8 w-auto " src={icon} alt="logo" />
            <h3 className="font-semibold text-gray-800 text-start">{title}</h3>
          </div>

          {/* Right Column */}

        </div>


        <div className="mt-4 flex flex-wrap text-start text-sm font-light text-gray-500">
          {description}
        </div>
        <div className="mt-4 flex flex-wrap text-start text-sm font-light">
          {data && data.team && data.team.name ? 'Workspace: ' + data.team.name : ''}
          {data && data.team && data.team.id ? ', ID: ' + data.team.id : ''}
        </div>
        <div className="container mx-auto mt-2 max-w-screen-lg text-center">
          {/* <button onClick={()=>handleClick()} type="button" disabled={buttonText != "Try It"}
                   className={`border border-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  ${
              buttonText == "Try It"
                ? "hover:bg-gray-900 hover:text-white  text-gray-900 "
                : "bg-gray-200  text-gray-400  "
            } `}
           
             >
              
              {datas.playstatus=="Try It"&&play_status==true?"Enabled":buttonText}
              {play_status?buttonText:'Submitted'}
              
              
              </button> */}
          <div className="flex justify-center md:justify-end pt-2">
            <button onClick={() => handleClick(url, connect_button)} className={connect_button ==="Connect"?"text-xs h-8 text-blue-500 bg-gray-100 hover:text-blue-300  font-bold py-3 px-10 rounded flex items-center border border-solid border-blue-600":"text-xs h-8 text-grey-400 bg-gray-100 hover:text-gray-300 py-3 px-10 rounded flex items-center border border-solid border-gray-500"}>
              {connect_button}
            </button>
          </div>
        </div>
      </CardContainer>
    </>
  );
}
