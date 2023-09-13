import TimeRangeSelect, { TimeRangeSelectPropsType } from "./TimeRangeSelect";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AcademicCapIcon, Square2StackIcon } from '@heroicons/react/20/solid';
import { Empty, Radio, RadioChangeEvent, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import FunnelChartComponent from "./HorFunnelChart";
import { Bar, BarChart, CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import TEstTopChart from "./TesttopChart";
import IndividualMetricCard from "./IndividualMetricCard";
import CardContainer from "./CardContainer";

export interface StatusCount {
  status_count_responded: number;
  prospects_count: number;
  status_count_notresponded: number;
  status_count_notcontacted: number;
  prospects_oppurtunity_count: number;
  avg_churn_rate: number;
  avg_arr_rate: number;
  pie_data: any;
  LPR: any;
  getgraphdata: any;
  propensity_churnlogo_series_array: any;
  propensity_arr_series_array: any
  propensity_churnrate_series_array: any;
  propenpropensity_churnlogo_series_percentage: any;
  propensity_churnlogo_series_count: any;
  overall_churn_rate: any;
  overall_churn_rate_last_month: any;
  getGraphData2val: any;
  urgent_count: any;
  clinchrecVal: any;
}


type ProspectsType = {
  data: {
    propensity_churnlogo_series_array: any;
    userId: string;
    score?: number;
    clinchrecVal?: any;
    status_count_all: StatusCount;
    propensity_arr_series_array: any;
    propensity_churnrate_series_array: any;
    company_name: string;
    profileDetails: any;
    LPR: any;
    getgraphdata: any;
    churn_risk_data: [];
    getForecastTableDataVal: any;
    getGraphData2val: any;
    date_filter: string
    notengaged_notresponded_data: [];
    engaged_notresponded_data: [];
    engaged_responded_data: [];
    logos_at_risk_count: any;
    top_customer_support_reasons_list: any;
    top_product_features_list: any;
    logos_at_risk_week_count: any;
    top_customer_support_reasons_week_list: any;
    top_product_features_week_list: any;
    overview_percentage: any;
    changePercentVal: any;
  }
}



type TabPosition = 'left' | 'right' | 'top' | 'bottom';

export default function SalesOverview(props: any) {
  const navigate = useNavigate();
  const [lastCardClicked, setlastCardClicked] = useState('all');
  const [score, setScore] = useState<number>(props.data.score || 0);
  const [date, setdate] = useState<string>(props.data.date_filter || '');
  const [mode, setMode] = useState<TabPosition>('top');

  const [graph_title, setGraphtitle] = useState<string>("")
  const userId = props.data.userId;
  const [seriesUpsell, setseriesUpsell] = useState<any>([]);
  const { pChangeLead, pChangePipeline, pChangeWinRate } = props?.data?.changePercentVal || {} ;
  const data6 = [
    {
      name: 'Week 1',
      "No. of Emails": 4000,
      "No. of Calls": 2400,
      "No. of Demo's": 2400,
    },
    {
      name: 'Week 2',
      "No. of Emails": 3000,
      "No. of Calls": 1398,
      "No. of Demo's": 2210,
    },
    {
      name: 'Week 3',
      "No. of Emails": 2000,
      "No. of Calls": 9800,
      "No. of Demo's": 2290,
    },
    {
      name: 'Week 4',
      "No. of Emails": 2780,
      "No. of Calls": 3908,
      "No. of Demo's": 2000,
    },
    {
      name: 'Week 5',
      "No. of Emails": 1890,
      "No. of Calls": 4800,
      "No. of Demo's": 2181,
    },
    {
      name: 'Week 6',
      "No. of Emails": 2390,
      "No. of Calls": 3800,
      "No. of Demo's": 2500,
    },
    {
      name: 'Week 7',
      "No. of Emails": 3490,
      "No. of Calls": 4300,
      "No. of Demo's": 2100,
    },
  ];

  const timeRangeFilterItems: TimeRangeSelectPropsType = {
    title: `Time period: ${props.data.date_filter == "thismonth" ? 'This Month' : props.data.date_filter == "lastmonth" ? "Last Month" : props.data.date_filter == "year" ? "Year to date" : "All Time"}`,
    items: [
      {
        label: "This Month",
        active: false,
        value: score ? `/sales/overview?score=${score}&date=thismonth` : `/sales/overview?date=thismonth`,
      },
      {
        label: "Last Month",
        active: false,
        value: score ? `/sales/overview?score=${score}&date=lastmonth` : `/sales/overview?date=lastmonth`,
      },
      {
        label: "Year to date",
        active: false,
        value: score ? `/sales/overview?score=${score}&date=year` : `/sales/overview?date=year`,
      },
      {
        label: "All Time",
        active: false,
        value: score ? `/sales/overview?score=${score}&date=alltime` : `/sales/overview?date=alltime`,

      },
    ],
    iconStyle: "filter.down",
  };
  const graph_plotting_switch = (type: string) => {

    if (type == "churnlogo") {
      setGraphtitle("Urgent Interventions Churn Logos")
      setseriesUpsell(props.data.status_count_all.propensity_churnlogo_series_array)
    } else if (type == "arr") {
      setGraphtitle("Overall ARR")

      setseriesUpsell(props.data.status_count_all.propensity_arr_series_array)

    } else {
      setGraphtitle("Overall Churn Rate")
      setseriesUpsell(props.data.status_count_all.propensity_churnrate_series_array)

    }

  }

  const lineChartLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];



  const lineChartData: any = {

    labels: lineChartLabels.slice(0, seriesUpsell.length),
    datasets: [

      {
        label: graph_title,
        data: seriesUpsell,

        borderColor: "#0B1F90",
        backgroundColor: "#0B1F90",
        pointRadius: 0,
      },
    ],
  };

  const pieData = props?.data.status_count_all?.pie_data || {};

  async function changePropensityScore(value: string): Promise<void> {
    setScore(parseInt(value));
    // const prospects = await getProspects(userId, score);
    // setProspects(prospects);

    navigate({
      pathname: '/product',
      search: '?score=' + score
    });
  }

  function goToProspectRoute(type: string): void {
    navigate({
      pathname: '/churn/customer',
      search: '?score=' + score + '&date=' + date + '&type=' + type
    });
  }
  const handleClick = () => {
    window.location.href = '/landing'
  };
  const selectForm = useRef(null)
  // @ts-ignore
  const handleSubmit = () => { selectForm.current.submit() }

  const switchUpDown = (value: any) => {
    if (isNaN(value)) {
      return ""
    }
    else if (value < 0) {
      return "down"
    }
    else {
      return "up"
    }
  }
  function roundToTwoDecimals(number: any) {
    if (Number.isInteger(number)) {
      return Number(number.toFixed(2));
    }
    return Number(number);
  }

  const formatPercent = (value: any) => {
    if (isNaN(value)) {
      if (value == "nc") {
        return 0;
      }
      return (value)?.toUpperCase()
    }

    value = roundToTwoDecimals(parseFloat(value))
    if (value > 0) {
      value = "+" + value
    } else {
      return value = -value;

    }
    return value + "%";
  }

  interface DataType {
    key: React.Key;
    name: string;
    closedDate: string;
    estrev: string;
    month?: string;
    noOfDeals?: string;
    value?: string;
    expectedrevenue?: any;
    expectedclosedate?: any;
    opportunityname?: any;
  }

  const columns: ColumnsType<any> = [
    {
      title: "Accounts to Prioritize",
      dataIndex: "opportunityname",

    },
    {
      title: "Closed Date",
      dataIndex: "expectedclosedate",
      sorter: (a, b) => {
        const dateA: any = new Date(a.expectedclosedate.split('-').reverse().join('-'));
        const dateB: any = new Date(b.expectedclosedate.split('-').reverse().join('-'));
        return dateA - dateB;
      },
    },
    {
      title: "Est. Revenue",
      dataIndex: "expectedrevenue",

    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <button><img src={'/video-octagon.png'} height={24} width={24} alt="MyImage" /></button>,
    },

  ];

  const columns8: any = [
    {
      name: "Closed",
      value: "20",
      originalVal: "20000$"
    },
    {
      name: "Propensity Adjustment Pipeline",
      value: "20",
      originalVal: "20000$"
    },
    {
      name: "Rest Available",
      value: "60",
      originalVal: "60000$"
    }

  ];

  const columns2: ColumnsType<any> = [
    {
      title: "Month",
      dataIndex: "month",
      className: "testcss"
    },
    {
      title: "Open Deals",
      dataIndex: "noOfDeals",
      className: "testcss"
    },
    {
      title: "Pipeline ($)",
      dataIndex: "value",
      className: "testcss"
    }

  ];

  const groupedData: any = (props && props.data && props.data.getGraphData2val && props.data.getGraphData2val.reduce((acc: any, entry: any) => {
    const { opportunitystage, week_start_month, total_opportunityvalue } = entry;

    if (!acc[opportunitystage]) {
      acc[opportunitystage] = [];
    }

    acc[opportunitystage].push({ week_start_month, total_opportunityvalue });
    return acc;
  }, {})) || {};

  const data5 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const tableDetails: any = [{ "name": "Gaurtham", "closedDate": "12/02/2025", "estrev": "$2000000" }];

  const [selectedGraphVal, setSelectedGraph] = useState<string>("count1");
  const [funnelPart, setFunnelPart] = useState<string>("");
  const [newFill, setFill] = useState<string>("");

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  const handleModeChange2 = (e: RadioChangeEvent) => {
    setSelectedGraph(e.target.value);
  };

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // Returns 0-based index (0 for January, 1 for February, etc.)

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentMonthName = monthNames[currentMonth];

  function generateDataArray(data: any) {
    const dataArray: any = [];

    data &&  data.getForecastTableDataVal && data.getForecastTableDataVal.forEach((item: any, index: number) => {
      dataArray.push({
        key: index + 1,
        month: item.closed_month,
        noOfDeals: item.total_deals,
        value: item.total_expectedrevenue?.toLocaleString()
      });
    });

    return dataArray;
  }

  // Example usage:
  const data2 = generateDataArray(props.data);

  function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  }

  const data = props?.data?.clinchrecVal?.map((item: any, index: number) => ({
    ...item,
    expectedclosedate: formatDate(item.expectedclosedate),
    key: index
  }));

  const data4 = [[10], [15]];
  const labels4 = ['Label 1', 'Label 2'];
  const colors4 = ['#0800ff', '#ff0000'];
  const handleClickCard = (val: any) => {
    val === lastCardClicked ?
      setlastCardClicked('all') : setlastCardClicked(val);
  }
  const closed = 20;
  const propAdj = 60;
  const rest = 20;

  const colors = ['#10b981', '#0088FE', '#083344', '#0891b2', '#a2c9ea', '#1e40af'];
  // const colors = ['#92B7E8','#7498C6', '#75CBBD', '#6CA59C', '#8E96C0', '#5B6682'];

  props.data.getgraphdata && props.data.getgraphdata[selectedGraphVal] && props.data.getgraphdata[selectedGraphVal].forEach((item: any, index: number) => {
    item.fill = colors[index];
  });


  const generateLineComponents = () => {
    let colorIndex = 0; // Initialize the color index

    return Object.entries(groupedData).map(([opportunitystage, values], index) => {
      const color = colors[colorIndex % colors.length]; // Get color from the predefined array
      colorIndex++; // Increment the color index for the next stage

      return (
        <Line
          key={index}
          type="monotone"
          dataKey="total_opportunityvalue"
          name={opportunitystage}
          data={values}
          stroke={color}
        />
      );
    });
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <CardContainer>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center">
            <img src={'/salesOverview.png'} height={24} width={24} alt="MyImage" /> &nbsp;&nbsp;
            <span className="hardHeaderCssBlack2">Sales Overview</span>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 ">


          </div>
          <div className="flex flex-row items-center justify-center gap-2 rounded-lg bg-white p-4 shadow border border-bg-gray-200">
            <h3 className=" text-gray-900">Propensity Score: </h3>
            <form ref={selectForm} action="/sales/overview" method="GET" onChange={handleSubmit}>
              <select name="score" value={score} onChange={handleSubmit} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg">
                <option value="0">0</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="75">75</option>
                <option value="90">90</option>
              </select>
            </form>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 rounded-lg bg-white p-4 shadow border border-bg-gray-200">
            <TimeRangeSelect {...timeRangeFilterItems} />

          </div>

        </div>

        <div className="grid grid-cols-4 pb-2 mt-8">
          <div className="col-span-4 lg:col-span-1 flex">
            <div>
              {props.data?.profileDetails?.avatarUrl ? <img className="rounded-full" width="124" src={props.data?.profileDetails?.avatarUrl} alt="" /> : <img className="rounded-full" width="124" src={'/2305-0.png' || ""} alt="" />}
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-xl pl-3">{(props && props.data && props.data?.profileDetails && props.data?.profileDetails[0] && props.data?.profileDetails![0]?.firstname) || "PATTERSON"}</div>
              <div className="text-lg pl-3">{props?.data.company_name}</div>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3">
            <CardContainer title="">
              <TEstTopChart data={columns8} color={['#083344', '#82ca9d', "#D3D3D3"]} total={"100,000$"} />
            </CardContainer>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-6 md:grid-cols-6 lg:grid-cols-12">
          <div className="text-lg font-medium col-span-6">KPI's</div>
          <h2 className="text-lg font-medium col-span-6">Forecast Table</h2></div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-6 lg:grid-cols-12">
          <div className="col-span-6 md:col-span-6 lg:col-span-2">
            <IndividualMetricCard
              metricTitle="Clinch Leads"
              icon={<img src={'/Frame 1000004067.png'} height={24} width={24} alt="MyImage" />}
              metricValue={`${props && props.data && props.data.LPR && props.data.LPR[0] && props.data.LPR[0].lead_count?.toLocaleString()}`}
              showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={formatPercent(pChangeLead)}
              changeDirection={switchUpDown(pChangeLead)}
            /></div>
          <div className="col-span-6 md:col-span-6 lg:col-span-2">
            <IndividualMetricCard
              metricTitle="Open Pipeline"
              icon={<img src={'/Frame 1000004066.png'} height={24} width={24} alt="MyImage" />}
              metricValue={`$ ${props && props.data && props.data.LPR && props.data.LPR[0] && props.data.LPR[0].total_expectedrevenue?.toLocaleString()}`}
              showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={formatPercent(pChangePipeline)}
              changeDirection={switchUpDown(pChangePipeline)}
            />
          </div>
          <div className="col-span-6 md:col-span-6 lg:col-span-2">
            <IndividualMetricCard
              icon={<img src={'/trend-up.png'} height={24} width={24} alt="MyImage" />}
              metricTitle="Win Rate"
              metricValue={`${props && props.data && props.data.LPR && props.data.LPR[0] && props.data.LPR[0].win_rate?.toLocaleString()} %`}
              showChange={["thismonth", "lastmonth"].includes(props.data.date_filter)}
              changePercentage={formatPercent(pChangeWinRate)}
              changeDirection={switchUpDown(pChangeWinRate)}
            />
          </div>
          <div className="col-span-6">
            <CardContainer>
              <Table className=""
                key="Active Customers"
                columns={columns2}
                dataSource={data2}
                pagination={false}
                scroll={{ y: 73 }}
                components={{
                  header: {
                    cell: (props: any) => (
                      <th
                        {...props}
                        style={{
                          backgroundColor: 'white', // Change this to your preferred dark color
                          color: '#001A5C', // Change text color for better visibility
                          fontWeight: 'bold', // Optional: Apply additional styling if needed
                        }}
                      >
                        {props.children}
                      </th>
                    ),
                  },
                }}
              />
            </CardContainer>
          </div>
        </div>
      </CardContainer>
      <div className="mt-8">
        <div className="flex items-center">
          <img src={'/map.png'} height={24} width={24} alt="MyImage" /> &nbsp;&nbsp;
          <span className="hardHeaderCssBlack2">Pipeline By Stages</span>
        </div>
      </div>


      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4 xl:grid-cols-4">
        <div className="lg:col-span-2 xl:col-span-2">
          <CardContainer title="Prospecting" className="p-8" style={{ height: '100%', display: 'flex', justifyContent: 'flex-start' }}>
            <div className="inline-flex self-center rounded-md shadow-sm" role="group">
              <Radio.Group onChange={handleModeChange2} value={selectedGraphVal} style={{ marginBottom: 8 }}>
                <Radio.Button value="count1">All</Radio.Button>
                <Radio.Button value="count2">Renewal</Radio.Button>
                <Radio.Button value="count3">Up-Sell</Radio.Button>
                <Radio.Button value="count4">Cross-Sell</Radio.Button>
              </Radio.Group>
            </div>
            {props && props.data && props.data.getgraphdata && props.data.getgraphdata[selectedGraphVal].length > 0 ? <FunnelChartComponent data={props.data.getgraphdata[selectedGraphVal].filter((item: any) => item.name !== "Closed-Lost") || []} setFill={setFill} setFunnelPart={(value: any) => {
              // Check if the value is the same as the current value
              if (value === funnelPart) {
                // If it's the same, set it to an empty string
                setFunnelPart("");
              } else {
                // Otherwise, set it to the new value
                setFunnelPart(value);
              }
            }} /> : <Empty />}
          </CardContainer>
        </div>
        <div className="lg:col-span-2 xl:col-span-2">
          <CardContainer title="" style={{ height: '100%', display: 'flex', justifyContent: 'flex-start' }}>
            {Object.keys(groupedData).length > 0 ? <ResponsiveContainer width="100%" height={500}>
              <LineChart
                data={groupedData[funnelPart]}
                margin={{
                  top: 35,
                  right: 30,
                  left: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week_start_month" />
                <YAxis tickFormatter={(value: any) => value.toLocaleString()}>
                  <Label
                    value="Total Expected Value"
                    position="insideLeft"
                    angle={-90}
                    offset={-20}
                    style={{ textAnchor: 'middle' }}
                  />
                </YAxis>
                <Tooltip />
                <Legend />
                {/* Create separate Line components for each opportunitystage */}
                {funnelPart !== "" && <Line
                  type="monotone"
                  dataKey="total_opportunityvalue"
                  name={funnelPart}
                  stroke={newFill}
                />}
                {/* Add more Line components for other stages if needed */}
                {funnelPart === "" && generateLineComponents()}
              </LineChart>
            </ResponsiveContainer> : <Empty />}
          </CardContainer>
        </div>
        <div className="lg:col-span-4 xl:col-span-4">
          <CardContainer title={
            <div className="flex items-center">
              <img src={'/Frame 1410109397.png'} height={24} width={24} alt="MyImage" /> &nbsp;&nbsp;
              <span className="hardHeaderCssBlack2">Clinch AI Recommendations</span>
            </div>
          }>
            <div className="mt-4 grid gap-6 lg:grid-cols-4 xl:grid-cols-4">
              <div className="lg:col-span-2 xl:col-span-2 flex flex-col overflow-x-auto">
                <Table key="Active Customers" className="border rounded-t-2xl border-gray-200 " columns={columns} dataSource={data} components={{
                  header: {
                    cell: (props: any) => (
                      <th
                        {...props}
                        style={{
                          backgroundColor: 'white', // Change this to your preferred dark color
                          color: '#001A5C', // Change text color for better visibility
                          fontWeight: '500', // Optional: Apply additional styling if needed
                        }}
                      >
                        {props.children}
                      </th>
                    ),
                  },
                }}
                  rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                  }}
                  // bordered
                  pagination={data && data.length < 10 ? false : {}}
                />
                <div className="flex justify-between border border-t-0 border-gray-200">
                  {(<div className='mt-4'>
                    <button className="mb-4 ml-4"
                      onClick={() => { }}>
                      <img src={'/video-octagon.png'} height={24} width={24} alt="MyImage" />
                    </button>
                  </div>)}
                  {(<div className='mt-4'>
                    <button className="mb-4 mr-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"       >
                      {"View All >"}
                    </button>
                  </div>)}
                </div>
              </div>
              <div className="lg:col-span-2 xl:col-span-2">
                <div className="flex flex-col">
                  <CardContainer>
                    <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                      <Radio.Button value="top">Insights</Radio.Button>
                      <Radio.Button value="left">Scoops</Radio.Button>
                    </Radio.Group>
                    <CardContainer className="mb-3">
                      <img src={'/Frame 1000004698.png'} height={24} width={24} alt="MyImage" />
                    </CardContainer>
                    <CardContainer className="mb-3">
                      <img src={'/Frame 1000004698.png'} height={24} width={24} alt="MyImage" />
                    </CardContainer>
                    <CardContainer className="mb-3">
                      <img src={'/Frame 1000004698.png'} height={24} width={24} alt="MyImage" />
                    </CardContainer>
                  </CardContainer>
                  <div className="mt-8">
                    <CardContainer titleColor="#001A5C" title="Tasks to Prioritize">
                      <CardContainer>
                        <div style={{ height: '172px' }}>
                          Identify relevant data here....
                        </div>
                      </CardContainer>
                    </CardContainer>
                  </div>
                </div>
              </div>
            </div>
          </CardContainer>
        </div>
      </div>

      <CardContainer title="" className="mt-8">
        <div className="flex items-center mb-8">
          <img src={'/diagram.png'} height={24} width={24} alt="MyImage" /> &nbsp;&nbsp;
          <span className="hardHeaderCssBlack2">Activity Metrics</span>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:flex-col col-span-12 lg:col-span-6">
            <div className="mb-3 lg:mb-10 cursor-pointer" onClick={() => handleClickCard("demos")}>
              <CardContainer clicked={lastCardClicked === "demos"} icon={<AcademicCapIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#95D3C9' }} />} titleColor="#324063" title={"No. of Demos - Last week"}>
                <div className="flex flex-wrap justify-between">
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">42</div>
                    <div className="text-sm">Requested</div>
                  </div>
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">22</div>
                    <div className="text-sm">Answered</div>
                  </div>
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">20</div>
                    <div className="text-sm">Unanswered</div>
                  </div>
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">66%</div>
                    <div className="text-sm">Replied</div>
                  </div>
                  <div className="w-full sm:w-auto text-center">
                    <div className="text-lg font-semibold">40%</div>
                    <div className="text-sm">Interested</div>
                  </div>
                </div>
              </CardContainer>
            </div>
            <div className="mb-3 lg:mt-4 lg:mb-10 cursor-pointer" onClick={() => handleClickCard("mails")}>
              <CardContainer clicked={lastCardClicked === "mails"} icon={<Square2StackIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#727BB0' }} />} titleColor="#727BB0" title={"No. of Emails - Last week"}>
                <div className="flex flex-wrap justify-between">
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">45%</div>
                    <div className="text-sm">Opened</div>
                  </div>
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">0%</div>
                    <div className="text-sm">Replied</div>
                  </div>
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">0%</div>
                    <div className="text-sm">Unsubscribed</div>
                  </div>
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">0%</div>
                    <div className="text-sm">Bounced</div>
                  </div>
                  <div className="w-full sm:w-auto text-center">
                    <div className="text-lg font-semibold">0%</div>
                    <div className="text-sm">Interested</div>
                  </div>
                </div>
              </CardContainer>
            </div>
            <div className="mb-3 lg:mb-10 cursor-pointer" onClick={() => handleClickCard("calls")}>
              <CardContainer clicked={lastCardClicked === "calls"} icon={<AcademicCapIcon className="h-8 w-5 text-gray-400 mr-3" style={{ fill: '#324063' }} />} titleColor="#95D3C9" title={"No. of Calls - Last week"}>
                <div className="flex flex-wrap justify-between">
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">16</div>
                    <div className="text-sm">Dialed</div>
                  </div>
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">28.98</div>
                    <div className="text-sm">Avg. duration</div>
                  </div>
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">37%(6)</div>
                    <div className="text-sm">Left message</div>
                  </div>
                  <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
                    <div className="text-lg font-semibold">6.3%</div>
                    <div className="text-sm">Neutral</div>
                  </div>
                  <div className="w-full sm:w-auto text-center">
                    <div className="text-lg font-semibold">6.3%</div>
                    <div className="text-sm">Positive</div>
                  </div>
                </div>
              </CardContainer>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col">
            <div className="text-xl font-medium" style={{ marginLeft: '25px' }}>Tasks</div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data6}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" />
                {(lastCardClicked === 'all' || lastCardClicked === 'calls') && <Bar dataKey="No. of Calls" stackId="a" fill="#324063" />}
                {(lastCardClicked === 'all' || lastCardClicked === 'mails') && <Bar dataKey="No. of Emails" stackId="a" fill="#727BB0" />}
                {(lastCardClicked === 'all' || lastCardClicked === 'demos') && <Bar dataKey="No. of Demo's" stackId="a" fill="#95D3C9" />}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContainer>
    </>
  );
}
