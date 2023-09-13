import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

export type AppBarChartDataType = {
  data: {
    name: string;
    value: number;
    trendingUp?: boolean;
  },
  legend?: string;
  color?: string;
}

export default function AppChartNew(props:AppBarChartDataType) {
  return (
    <div className="">
        <ul className="">
        {
          //@ts-ignore
            <li className="grid grid-cols-12 py-2" key={`item-${props.data.value}`}>
                {/* <div className='col-span-2 truncate'>
                    {props.data.trendingUp ? (
                    <ArrowUpIcon className="inline text-green-400 h-4 w-4 mr-2" />
                    ) : (
                    <ArrowDownIcon className="inline text-red-400 h-4 w-4 mr-2" />
                    )}
                    {props.data.name}
                </div> */}
                <div className="col-span-12 relative">
                    <div className="w-full bg-gray-200 rounded-lg h-[12px] absolute"></div>
                    <div className="rounded-lg h-[12px] absolute" style={{width: `${props.data.value}%`, backgroundColor: '#3CBEA9', opacity: '36.47%'}}></div>
                </div>
                {/* <div className='col-span-1 px-4 text-left font-light'>{props.data.value}%</div> */}
            </li>
        }
        </ul>
    </div>
  );
}