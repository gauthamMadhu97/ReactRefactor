import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from "@heroicons/react/20/solid";
import CardContainer from "./CardContainer";

type IndividualMetricCardProps = {
  metricTitle?: string;
  metricValue?: string;
  changePercentage?: string;
  changeDirection?: string;
  className?: string;
  shadow?: boolean;
  showChange?: boolean;
  period?: string;
  clicked?: boolean;
  icon?: any;
};

export default function IndividualMetricCard({
  metricTitle,
  metricValue,
  changePercentage="",
  changeDirection,
  shadow = true,
  showChange = true,
  clicked = false,
  className = "",
  period = "month",
  icon = ""
}: IndividualMetricCardProps) {
  return (
    <CardContainer className={className} shadow={shadow} clicked={clicked}>
      {icon !== "" ? <div className="flex justify-between">
      <h3 className="font-light text-gray-400">{metricTitle}</h3>
      {icon !== "" && icon}
      </div> :
        <h3 className="font-light text-gray-400">{metricTitle}</h3>
      }
      <h4 className="mt-4 text-xl font-bold text-black">{metricValue}</h4>
      {showChange && (
        <div className="mt-4 flex flex-wrap text-sm font-light">

          {
             (() => {
                    if(changeDirection == 'up') {
                            return (
            <ArrowUpIcon className="mr-2 w-5 fill-green-400" />
                            )
                        } else if (changeDirection == "down") {
                            return (
            <ArrowDownIcon className="mr-2 w-5 fill-red-600" />
                            )
                        } else {
                            return (
            <MinusIcon className="mr-2 w-5 fill-black-600" />
                            )
                        }
                })()  
          }
          <p className="font-bold">{changePercentage}</p>
          { !["NA","NC"].includes(changePercentage) && (<p className="mx-1 text-gray-400">Since last {period}</p>
          )}
        </div>
      )}
    </CardContainer>
  );
}
