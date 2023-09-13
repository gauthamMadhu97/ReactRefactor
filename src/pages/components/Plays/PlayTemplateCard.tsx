import CardContainer from "../CardContainer";

type PlayTemplateCardProps = {
  title: string;
  icon: string;
  description: string;
  buttonText?: string;
  className?: string;
  buttonDisabled?: boolean;
  shadow?: boolean;
  play_status: any
  datas: any
  enabled?:boolean;
};

export default function PlayTemplateCard({
  icon,
  title,
  description,
  buttonText = "Coming Soon",
  buttonDisabled = true,
  className = "",
  shadow = false,
  play_status,
  datas,
  enabled,
}: PlayTemplateCardProps) {
  console.log('dd',datas);
  

  const handleClick = async () => {
    if (play_status == false) {
      const res = await fetch('/churn/plays/slack');
      window.location.reload();

    }


  };




  return (
    <CardContainer className={className} shadow={shadow} enabled={enabled} buttonText={buttonText}>
      <div className="container max-w-screen-lg mx-auto pb-10 w-12 h-12">
        <img className="mx-auto" src={icon} alt="logo" />
      </div>
      <br />

      <h3 className="font-dark text-black-400 text-center">{title}</h3>
      <div className="mt-4 flex flex-wrap text-sm font-light text-gray-400 text-center">
        {description}
      </div>
      <div className="container max-w-screen-lg mx-auto mt-2 text-center">
        <button onClick={() => handleClick()} type="button" disabled={buttonText != "Try It"}
          className={` focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded text-sm px-7 py-1.5 text-center mr-2 mb-2  ${buttonText == "Try It"
              ? "text-blue-500 bg-blue-50 hover:text-blue-300 border border-blue-600"
              : buttonText == "Coming Soon"?"border border-gray-400 text-gray-400":buttonText == "Edit"?"text-gray-600 border border-gray-600 bg-gray-200 ": "bg-gray-200  text-gray-400  border border-gray-800 "
            } `}

        >

          {datas.playstatus == "Try It" && play_status == true ? "Enabled" : buttonText}
          {/* {play_status?buttonText:'Submitted'} */}


        </button>

      </div>
    </CardContainer>
  );
}
