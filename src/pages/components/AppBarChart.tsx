import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

export type AppBarChartDataType = {
  data: {
    name: string;
    value: number;
    trendingUp?: boolean;
  }[],
  legend?: string;
  color?: string;
}

export default function AppBarChart(props:AppBarChartDataType) {
  return (
    <div className="">
        <ul className="">
        {
          //@ts-ignore
          props.data.map((item, index: any) => (
            <li className="grid grid-cols-12 py-2" key={`item-${index}`}>
                <div className='col-span-2 truncate'>
                    {/* {item.trendingUp ? (
                    <ArrowUpIcon className="inline text-green-400 h-4 w-4 mr-2" />
                    ) : (
                    <ArrowDownIcon className="inline text-red-400 h-4 w-4 mr-2" />
                    )} */}
                    {item.name}
                </div>
                <div className="col-span-9 relative">
                    <div className="w-full bg-gray-200 rounded-lg h-4 absolute"></div>
                    <div className="rounded-lg h-4 absolute" style={{width: `${item.value}%`, backgroundColor: props.color}}></div>
                </div>
                <div className='col-span-1 px-4 text-left font-light'>{item.value}%</div>
            </li>
          ))
        }
        </ul>
    </div>
  );
}