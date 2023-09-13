import { useState } from 'react'
import TimeRangeSelect, { TimeRangeSelectPropsType } from "./TimeRangeSelect";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ArrowDownIcon, ArrowUpIcon, ChatBubbleLeftEllipsisIcon, ClockIcon, HandThumbUpIcon, PresentationChartLineIcon } from '@heroicons/react/20/solid';
import { RadioOption } from './PlaysConfig/SelectableCard';
import { AiGenerateIcon } from './PlaysConfig/icons';
import AppChartNew from './AppChartNew';
import CardContainer from './CardContainer';
import IndividualMetricCard from './IndividualMetricCard';

export type AppBarChartDataType = {
  data: {
    name: string;
    value: number;
    trendingUp?: boolean;
  }[],
  legend?: string;
  color?: string;
}

type PeopleType = {
  avatar: string,
  id: string,
  name: string,
  title: string,
  email: string,
  role: string,
  company: string,
  domain: string,
  propensityScore: number,
  expansionType: string,
  companyType: string,
};
const dataXY = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
const data = [[10], [15]];
const labels = ['Label 1', 'Label 2'];
const colors = ['#0800ff', '#ff0000'];
export interface ProspectData {
  cocid: string;
  coid: string;
  id: number;
  orgcustomerid: string;
  name: string;
  address: string;
  customertype: string;
  createddate: string;
  createdby: string;
  lastmodifieddate: string;
  lastmodifiedby: string;
  industry: string;
  subindustry: string;
  status: string;
  billingtype: string;
  customerlifetime: string;
  clv: string;
  mrr: string;
  arr: string;
  churnrate: string;
  futurepotential: string;
  renewaldate: string;
  nps: string;
  csat: string;
  npslastupdated: string;
  csatlastupdated: string;
  primarycontact: string;
  csm: string;
  primaryae: string;
  secondaryae: string;
  enddate: string;
  customerlogo: string;

}
type ProspectsType = {
  // pie_data: { name: string; value: number; };
  prospects: any;
  score: string;
  companyname: string;
  companyData: any;
  percentage: any;
  data: any;
}

export default function CustomerDetailMain(props: any) {
  const mock: any = [
    {
      "name": "Joe Doe",
      "value": "14.29"
    },
    {
      "name": "Jeremy Wilson",
      "value": "42.29"
    },
    {
      "name": "Isabelle Marth",
      "value": "55.29"
    },
  ]

  const mock2: any = [
    {
      "name": "Create an Issue",
      "value": "24.29"
    },
    {
      "name": "Create a Board",
      "value": "48.29"
    },
    {
      "name": "Adv. Roadmap",
      "value": "85.29"
    },
  ]

  const featureUsageByIndustryBarData: AppBarChartDataType = {
    data: mock,
    legend: "",
    color: "#82ca9d",
  };

  const timeRangeFilterItems: TimeRangeSelectPropsType = {
    title: `Time period: ${props && props.data && props.data.date_filter == "thismonth" ? 'This Month' : props && props.data && props.data.date_filter == "lastmonth" ? "Last Month" : props && props.data && props.data.date_filter == "year" ? "Year to date" : "All Time"}`,
    items: [
      {
        label: "This Month",
        active: false,
        value: `/sales/dealcoach?date=thismonth`,
      },
      {
        label: "Last Month",
        active: false,
        value: `/sales/dealcoach?date=lastmonth`,
      },
      {
        label: "Year to date",
        active: false,
        value: `/sales/dealcoach?date=year`,
      },
      {
        label: "All Time",
        active: false,
        value: `/sales/dealcoach?date=alltime`,

      },
    ],
    iconStyle: "filter.down",
  };
  const [generating, setGenerating] = useState<boolean>(false);
  const [dataQuery, setDataQuery] = useState<string>("Generate an upsell pitch for CRO");
  const [response, setResponse] = useState<string>("");
  const enabledClass = "w-40 h-12 px-4 py-2 rounded border border-neutral-400 justify-center items-center gap-2 flex cursor-pointer";
  const disabledClass = "w-40 h-12 px-4 py-2 rounded border border-neutral-400 justify-center items-center gap-2 flex bg-gray-300 cursor-wait";
  const sectionLabel = "self-stretch text-zinc-800 text-base font-bold leading-normal";
const textField = "self-stretch p-4 bg-white rounded-lg border border-zinc-300 justify-start items-center gap-6 inline-flex";
const textFieldLarge = "self-stretch h-32 p-4 bg-white rounded-lg border border-zinc-300 justify-start items-start gap-6 inline-flex";
const textFieldInner1 = "grow shrink basis-0 h-6 justify-start items-center gap-2 flex";
const textFieldInner2 = "grow shrink basis-0 text-neutral-400 text-base font-normal leading-normal";
  const classesForAiField = [textField, textFieldInner1, textFieldInner2, "h-[50px]"].join(" ");


  const updateText = (value: string) => {
    setResponse(value);
    // onChange(value);
  }
  const onResponse = (prompt: string) => {
    setGenerating(true);
    fetch('/api/ai/gpt', {
      method: 'POST',
      // body: JSON.stringify({
      //   prompt: prompt,
      //   max_tokens: 10,
      //   temperature: 0.5,
      //   top_p: 1,
      //   n: 1,
      //   stream: false,
      //   logprobs: null,
      //   stop: null,
      // }),
      body: prompt,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        updateText(data.message);
      })
      .catch(err => console.log(err))
      .finally(() => setGenerating(false));
  }

  const [selectedTriggerIndex, setSelectedTriggerIndex] = useState<string>('Generate an upsell pitch for CRO');
  const [graphLeft , setGraphLeft] = useState<string>("MRR");
  const [graphRight , setGraphRight] = useState<string>("NPS");





  return (<div>
    <div className="flex justify-between">
      <div className="headerCss flex items-center">
        <img src="/Coach icon.png" alt='coachIcon' height={24} width={24} className='mr-4' />
        <div>Deal Coach</div>
        </div>
      <div className="flex flex-row items-center justify-start gap-2 rounded-lg bg-white p-4 shadow">
        <TimeRangeSelect {...timeRangeFilterItems} />
      </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <CardContainer className='mt-8 lg:col-span-2 w-full reverse'>
        <div className="col-span-4 lg:col-span-1 flex flex-col gap-3">
          <div className='headerCss mb-2 flex items-center'>
          <img src="/profile.png" alt='profile' height={24} width={24} className='mr-4' />
            <div>Account Info</div>
            </div>
          <div className='flex'>
            <div >
              {<img className="rounded-full" width="64" height="64" src={ '/2305-0.png' || ""} alt="" />}
            </div>
            <div className="flex flex-col justify-center ml-2">
              <div className="headerName mx-4 mb-1">{""}</div>
              <div className="keyContact mx-4">{''}</div>
              <div className="keyContact mx-4">{""}</div>
              <div className="keyContact mx-4">{"Key Contact"}: {""}</div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="keyContact mx-4 mb-1">Industry: {""}</div>
              <div className="keyContact mx-4">Founding Year: 2016</div>
              <div className="keyContact mx-4">Employees: 2,400</div>
              <div className="keyContact mx-4">Annual Revenue: $180M</div>
            </div>
          </div>
        </div>
      </CardContainer>

      <CardContainer className='mt-8 w-full reverse'>

        <div className='textNews flex flex-col gap-4'>
          <div className='headerCss'>Key Opportunities</div>
          <ul className="list-none list-inside pl-4">
            <li className="mb-2">
              <span className="mr-2">&#8594;</span> Up-sell Jira From Standard to Premium Edition
            </li>
            <li className="mb-2">
              <span className="mr-2">&#8594;</span> Cross-sell Confluence Premium Edition
            </li>
          </ul>
        </div>
      </CardContainer>
    </div>

    <CardContainer className="mt-8">
      <div className="headerCss flex items-center">
      <img src="/chart.png" alt='chart' height={24} width={24} className='mr-4' />
        <div>
        Inside Scoops
        </div>
      </div>
      <div className='flex flex-col sm:flex-row mt-8'>
        <CardContainer title='Top Users' styleTitle='cardheadercss' optional={true}>
          <div className="flex justify-between">
            <div className='insidecard2ndheader'>
              1457 Logins
            </div>
            <div className="flex flex-col">
              <div className='inside'>
                +0.2%
              </div>
              <div className='inside' style={{ color: '#686868' }}>
                Since last month
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            {mock.map((item: any, index: number) => (
              <CardContainer key={index} className='mt-4'>
              <div className='flex flex-col lg:flex-row'>
                {/* Icon */}
                <div className='lg:w-1/12'>
                  #{index + 1}
                </div>
            
                {/* Name */}
                <div className='lg:w-3/12 flex items-center'>
                  <div className='font-[400] text-[16px] leading-[24px]'>{item.name}</div>
                </div>
            
                {/* Chart */}
                <div className='lg:w-6/12'>
                  <AppChartNew data={item} />
                </div>
            
                {/* Value */}
                <div className='lg:w-2/12 text-center mt-2 lg:mt-0'>
                  {item.value + "%"}
                </div>
              </div>
            </CardContainer>
            ))}
          </div>
          {(<div className='ml-auto mt-4'>
            <button className="mb-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              {"View More >"}
            </button>
          </div>)}
        </CardContainer>

        <CardContainer title='Top Features' styleTitle='cardheadercss' optional={true} className='mt-4 sm:mt-0 sm:mx-4'>
          <div className="flex justify-between">
            <div className='insidecard2ndheader'>
              1985 Times Used
            </div>
            <div className="flex flex-col">
              <div className='inside'>
                +0.8%
              </div>
              <div className='inside' style={{ color: '#686868' }}>
                Since last month
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            {mock2.map((item: any, index: number) => (
              <CardContainer key={index} className='mt-4'>
              <div className='flex flex-col lg:flex-row'>
                {/* Icon */}
                <div className='lg:w-1/12'>
                  {item.value > 0 ? <ArrowUpIcon className="inline text-green-400 h-4 w-4 mr-2" /> : <ArrowDownIcon className="inline text-green-400 h-4 w-4 mr-2" />}
                </div>
            
                {/* Name */}
                <div className='lg:w-3/12 flex items-center'>
                  <div className='font-[400] text-[16px] leading-[24px]'>{item.name}</div>
                </div>
            
                {/* Chart */}
                <div className='lg:w-6/12'>
                  <AppChartNew data={item} />
                </div>
            
                {/* Value */}
                <div className='lg:w-2/12 text-center mt-2 lg:mt-0'>
                  {item.value + "%"}
                </div>
              </div>
            </CardContainer>
            ))}
          </div>

          {(<div className='ml-auto mt-4'>
            <button className="mb-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              {"View More >"}
            </button>
          </div>)}
        </CardContainer>

        <CardContainer title='Market Scoop' styleTitle={"hardHeaderCssBlack"} className='mt-4 sm:mt-0 lg:remBorder'>
          <CardContainer className='mt-8 newTestCss'>
            <div className='textNews'>
              <ul className="list-none list-inside pl-4">
                <li className="mb-6">
                  <span className="mr-2">&#8594;</span> {"Funding Received > 22.5 Million Dollars"}
                </li>
                <li className="mb-6">
                  <span className="mr-2">&#8594;</span> Employees [New  Head of Product Hired in August]
                </li>
                <li className="mb-6">
                  <span className="mr-2">&#8594;</span> 22 million dollar funding raised
                </li>
                <li className="mb-6">
                  <span className="mr-2">&#8594;</span> 12% Growth in Number of Employees
                </li>
              </ul>
            </div>
          </CardContainer>
          <div className='hardHeaderCssBlack mt-5'>Alerts</div>
          <CardContainer className='mt-8 h-48 newTestCss h-Auto'>
            <div className='textNews'>
              <ul className="list-none list-inside pl-4">
                <li className="mb-6">
                  <span className="mr-2">&#8594;</span> {"Change in Feature usaged > 10%"}
                </li>
                <li className="mb-6">
                  <span className="mr-2">&#8594;</span> {"Change in user Beyond > 20%"}
                </li>
              </ul>
            </div>
          </CardContainer>
        </CardContainer>
      </div>
    </CardContainer>
    <CardContainer className='mt-8'>
      <div className='headerCss mt-8 flex items-center'>
      <img src="/Coach icon.png" alt='Deal-Coach' height={24} width={24} className='mr-4' />
        <div>
        Deal Pitch
        </div>
      </div>
<div className="relative flex items-stretch w-full mt-8">
  <input
            type="text"
            placeholder="Generate an upsell pitch for CRO"
            value={selectedTriggerIndex}
            onChange={e => setSelectedTriggerIndex(e.currentTarget.value)}
            disabled={generating}
    className="p-4 bg-white rounded-lg border border-zinc-300 text-base font-normal leading-normal h-12 flex-grow flex-shrink flex-basis-0 w-full"
  />
  <button
    className="absolute right-0 top-0 h-full text-white font-semibold px-3 rounded-r-lg flex items-center justify-center"
    onClick={generating ? () => { } : () => onResponse(selectedTriggerIndex === "Generate an upsell pitch for CRO" ? selectedTriggerIndex + ' Address the email from Uday at Clinch.': selectedTriggerIndex)}
    >
                  {generating ? null : <AiGenerateIcon />}
  </button>
</div>

<div className='flex flex-col-reverse sm:flex-row sm:justify-between lg:mt-8'>
  {/* Radio Options */}
  <div className="sm:col-span-1 flex flex-col sm:flex-row mt-4 sm:mt-0 items-start space-y-2 sm:space-y-0 sm:space-x-4">
    <div className='border border-gray-200 px-4 py-2'>
      <RadioOption
        key={'index'}
        text={"Generate Call Script"}
        selected={selectedTriggerIndex === 'Generate Call Script'}
        onClick={() => setSelectedTriggerIndex('Generate Call Script')}
      />
    </div>
    <div className='border border-gray-200 px-4 py-2'>
      <RadioOption
        key={'index'}
        text={"Mail a Pitch"}
        selected={selectedTriggerIndex === 'Mail a Pitch'}
        onClick={() => setSelectedTriggerIndex('Mail a Pitch')}
      />
    </div>
    <div className='border border-gray-200 px-4 py-2'>
      <RadioOption
        key={'index'}
        text={"Generate a Deck"}
        selected={selectedTriggerIndex === 'Generate a Deck'}
        onClick={() => setSelectedTriggerIndex('Generate a Deck')}
      />
    </div>
  </div>

  {/* Generate Button */}
  <div
    className={generating ? disabledClass + " mt-4 sm:mt-0" : enabledClass + " mt-4 sm:mt-0"}
    onClick={generating ? () => { } : () => onResponse(selectedTriggerIndex)}
  >
    <div className="text-center text-stone-500 text-base font-medium leading-normal">
      {generating ? 'Generating...' : 'Generate'}
    </div>
  </div>
</div>



        <textarea
        id="message"
        rows={8}
        className="mt-8 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
        placeholder="Generate a text body using the integrated AI."
        value={response}
        onChange={e => updateText(e.currentTarget.value)}
        disabled={generating}
      />

    </CardContainer>
    <CardContainer className='mt-8'>
      <div className='headerCss'>Overview</div>
      <div className='flex mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <CardContainer className="col-span-1" title='Business Metrics' styleTitle={"hardHeaderCssBlack"}>
          <div className='m-4 grid grid-cols-2 gap-4'>
            <a 
             role="button"
             onClick={() =>
                setGraphLeft("MRR")
             }
            >
            <IndividualMetricCard
              className='col-span-1'
              metricTitle="MRR"
              icon={<PresentationChartLineIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#001A5C' }} />}
              metricValue={'0'}
              // showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={'0'}
              changeDirection={'0'}
              clicked={graphLeft === "MRR"}
            />
            </a>
            <a 
             role="button"
             onClick={() =>
                setGraphLeft("MAU")
             }
            >
              <IndividualMetricCard
              className='col-span-1'
              metricTitle="MAU"
              icon={<HandThumbUpIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#001A5C' }} />}
              metricValue={'0'}
              // showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={'0'}
              changeDirection={'0'}
              clicked={graphLeft === "MAU"}
            />
            </a>
            <a 
             role="button"
             onClick={() =>
                setGraphLeft("Feature Adoption")
             }
            >
            <IndividualMetricCard
              className='col-span-1'
              metricTitle="Feature Adoption"
              icon={<ClockIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#001A5C' }} />}
              metricValue={'0'}
              // showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={'0'}
              changeDirection={'0'}
              clicked={graphLeft === "Feature Adoption"}
            />
            </a>
            <a 
             role="button"
             onClick={() =>
                setGraphLeft("Time Spent")
             }
            >
            <IndividualMetricCard
              className='col-span-1'
              metricTitle="Time Spent"
              icon={<ChatBubbleLeftEllipsisIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#001A5C' }} />}
              metricValue={'0'}
              // showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={'0'}
              changeDirection={'0'}
              clicked={graphLeft === "Time Spent"}
            />
            </a>
          </div>
          <div className='col-span-2'>
            <ResponsiveContainer width="99%" height={400}>
              <LineChart
                width={300}
                height={400}
                data={dataXY}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>

        </CardContainer>
        <CardContainer className="col-span-1" title="Health Metrics" styleTitle={"hardHeaderCssBlack"}>
          <div className='m-4 grid grid-cols-2 gap-4'>
          <a 
             role="button"
             onClick={() =>
                setGraphRight("NPS")
             }
            >
            <IndividualMetricCard
              className='col-span-1'
              metricTitle="NPS"
              icon={<PresentationChartLineIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#001A5C' }} />}
              metricValue={'0'}
              // showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={'0'}
              changeDirection={'0'}
              clicked={graphRight === "NPS"}
            />
            </a>
            <a 
             role="button"
             onClick={() =>
              setGraphRight("Churn Score")
             }
            >
            <IndividualMetricCard
              className='col-span-1'
              metricTitle="Churn Score"
              icon={<HandThumbUpIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#001A5C' }} />}
              metricValue={'0'}
              // showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={'0'}
              changeDirection={'0'}
              clicked={graphRight === "Churn Score"}
            />
            </a>
            <a 
             role="button"
             onClick={() =>
              setGraphRight("Time to Resolution(Med)")
             }
            >
            <IndividualMetricCard
              className='col-span-1'
              metricTitle="Time to Resolution(Med)"
              icon={<ClockIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#001A5C' }} />}
              metricValue={'0'}
              // showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={'0'}
              changeDirection={'0'}
              clicked={graphRight === "Time to Resolution(Med)"}
            />
            </a>
            <a 
             role="button"
             onClick={() =>
              setGraphRight("Open Tickets")
             }
            >
            <IndividualMetricCard
              className='col-span-1'
              metricTitle="Open Tickets"
              icon={<ChatBubbleLeftEllipsisIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#001A5C' }} />}
              metricValue={'0'}
              // showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={'0'}
              changeDirection={'0'}
              clicked={graphRight === "Open Tickets"}
            />
            </a>
          </div>
          <div className='col-span-2'>
            <ResponsiveContainer width="99%" height={400}>
              <LineChart
                width={300}
                height={400}
                data={dataXY}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContainer>
      </div>
    </CardContainer>
  </div>)
}