import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "antd";

export type AppBarChartDataType = {
  data: {
    name: string;
    value: number;
    trendingUp?: boolean;
    originalVal?: string;
  }[],
  legend?: string;
  color?: any;
  total: string;
}

export default function TEstTopChart(props:AppBarChartDataType) {
  return (
        <ul className="">
        {
          //@ts-ignore
            <li className="grid grid-cols-12 py-2" key={`item`}>
                 <div className="col-span-12 flex items-center">
      <Tooltip title={`${props.data[0].value}% , ${props.data[0].originalVal}`} color="#333">
        <div
          className="rounded-lg h-4"
          style={{
            width: `${props.data[0].value}%`,
            backgroundColor: props.color[0],
          }}
        ></div>
      </Tooltip>
      <Tooltip title={`${props.data[1].value}% , ${props.data[1].originalVal}`} color="#333">
        <div
          className="rounded-lg h-4"
          style={{
            width: `${props.data[1].value}%`,
            backgroundColor: props.color[1],
          }}
        ></div>
      </Tooltip>
      <Tooltip title={`${props.data[2].value}% , ${props.data[2].originalVal}`} color="#333">
        <div
          className="rounded-lg h-4"
          style={{
            width: `${props.data[2].value}%`,
            backgroundColor: props.color[2],
          }}
        ></div>
      </Tooltip>
      <div className="font-medium">
    {props.total}
    </div>
    </div>
    
                {/* <div className='col-span-1 px-4 text-left font-light'>{item.value}%</div> */}
            </li>
        }
        {
          //@ts-ignore
            <li className="grid grid-cols-12 py-2" key={`item2`}>
                <div className="col-span-12 md:flex md:items-center">
  <div className="md:w-1/2 flex items-center">
    <div className="mr-3 ml-3" style={{ width: `20px`, height: `20px`, borderRadius: '20px', backgroundColor: props.color[0] }}></div>
    {props.data[0].name}
  </div>
  <div className="md:w-1/2 flex items-center">
    <div className="mr-3 ml-3" style={{ width: `20px`, height: `20px`, borderRadius: '20px', backgroundColor: props.color[1] }}></div>
    {props.data[1].name}
  </div>
  <div className="md:w-1/2 flex items-center">
    <div className="mr-3 ml-3" style={{ width: `20px`, height: `20px`, borderRadius: '20px', backgroundColor: props.color[2] }}></div>
    {props.data[2].name}
  </div>
</div>

                {/* <div className='col-span-1 px-4 text-left font-light'>{item.value}%</div> */}
            </li>
        }
        </ul>
  );
}