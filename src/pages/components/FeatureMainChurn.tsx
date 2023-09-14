import {
    CheckIcon,
    ChevronUpDownIcon } from "@heroicons/react/20/solid";
  import AppBarChart, { AppBarChartDataType } from "./AppBarChart";
  import IndividualMetricCard from "./IndividualMetricCard";
  import { Fragment, useState, useEffect } from "react";
  import { Listbox, Transition } from "@headlessui/react";
  import { Tab, Tabs } from "./tabs";
  import {
    useNavigate,
    useParams,
  } from "react-router-dom";
  import { Table , Empty } from "antd";
  import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import { ColumnsType } from "antd/es/table";
  import OverviewPie from './PieChart';
  
  
  export type TimeRangeSelectItemsType = {
    active: boolean;
    value: string;
    label: string;
  };
  
  interface DataItem {
    weekly: string;
    cofid: string;
    count: any;
    featurename: string;
  }
  
  interface DataType {
    key: React.Key;
    name: string;
    activeusers: any;
    avgfeatureused: any;
    frequencyofuse: any;
    avgtimespent: any;
    totaluser: any;
  }
  
  interface DataTypeUsers {
    key: React.Key;
    name: string;
    firstName: any;
    avgfeatureused: any;
    frequencyofuse: any;
    avgtimespent: any;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: "Customers",
      dataIndex: "name",
    },
    {
      title: "Number of Active Users",
      dataIndex: "activeusers",
    },
    {
      title: "Average of Features used",
      dataIndex: "avgfeatureused",
    },
    {
      title: "Frequency of Use",
      dataIndex: "frequencyofuse",
    },
    {
      title: "Average Time Spent(hr)",
      dataIndex: "avgtimespent",
    },
    {
      title: "Feature Adoption Rate",
      dataIndex: "totaluser",
    },
  ];
  
  //@ts-ignore
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      outerRadius,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${value} (${(percent * 100).toFixed(0)}%)`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {payload.name}
        </text>
      </g>
    );
  };
  
  const columnsUsers: ColumnsType<DataTypeUsers> = [
    {
      title: "Users",
      dataIndex: "firstname",
    },
    {
      title: "Customer Name",
      dataIndex: "name",
    },
    {
      title: "Average of Features used",
      dataIndex: "avgfeatureused",
    },
    {
      title: "Frequency of Use",
      dataIndex: "frequencyofuse",
    },
    {
      title: "Average Time Spent(hr)",
      dataIndex: "avgtimespent",
    },
  ];
  
  type FeatureType = {
    data: {
      ResolutionTImeBarChartVal: any;
      ActiveUsersTableVal: any;
      activeCustomersTableVal: any;
      TopSupportCategoriesGraphVal: any;
      getfeatureUsageByRoleVal: any;
      getfeatureUsageByDepartmentVal: any;
      productFeature: any;
      product: any;
      customer: any;
      getTop3FeatureGraphVal: any;
      getFreqOfUsageCountGraphVal: any;
      getFeatureAdoptionRateGraphVal: any;
      getAverageOfFeatureUsedMonthlyGraphVal: any;
      getEndUsersCountMonthlyVal: any;
      frequencyOfUsePer: any;
      averageFeatUsed: any;
      endUserPer: any;
      featureAdoptionRatePer: any;
      avgFeatureUsed: any;
      company_name: any;
      productsVal: any;
      productsFeaturesListVal: any;
      countOfActiveUsersVal: any;
      frequencyOfUseVal: any;
      featureAdoptionRateVal: any;
      customerNameVal: any;
      date_filter_val: any;
      loading: boolean;
      ResolvedTicketsVal: any;
      OpenTicketsVal: any;
    };
  };
  
  export default function FeatureMain(props?: any) {
  
    console.log("propsssssssssssssssssssssssss",props)
    const { customer, product, featureList, dateFilter } = useParams();
    const [selectedTImeFilter, setSelectedTImeFilter] = useState<any>(
      props.data?.date_filter_val
    );
    const [selectedCustomer, setSelectedCustomer] = useState<any>(
      props.data?.customer
    );
    const [selectedProduct, setSelectedProduct] = useState<any>(
      props.data?.product
    );
    const [selectedProductFeature, setSelectedProductFeature] = useState<any>(
      props.data?.productFeature
    );
    const timeRangeFilterItems = [
      {
        label: "This Month",
        active: false,
        value: "#",
      },
      {
        label: "Last Month",
        active: false,
        value: "#",
      },
      {
        label: "Year to date",
        active: false,
        value: "#",
      },
      {
        label: "All Time",
        active: false,
        value: "#",
      },
    ];
  
    const CustomizedLabel = (props: any) => {
      const {x, y, value} = props;
      return (<g transform={`translate(${x},${-3})`}>
         <text 
                   x={x} 
                   y={y} 
    
                   fontSize='16' 
                   fontFamily='sans-serif'
                   fill={"black"}
                   textAnchor="center">{value}</text>
                   </g>
      )
    }
  
    useEffect(() => {
      graph_plotting_switch("Top3");
    }, [props && props.data && props.data?.getTop3FeatureGraphVal]);
  
    const [graph_title, setGraphtitle] = useState<string>("");
    const [seriesUpsell, setseriesUpsell] = useState<DataItem[]>([]);
  
  
    const featureUsageByTypeBarData: AppBarChartDataType = {
      data: props.data?.getfeatureUsageByRoleVal,
      legend: "",
      color: "#083344",
    };
    const featureUsageByIndustryBarData: AppBarChartDataType = {
      data: props.data?.getfeatureUsageByDepartmentVal,
      legend: "",
      color: "#82ca9d",
    };
    const navigate = useNavigate();
  
    function goToProspectRoute(
      customer: any,
      product: any,
      feature: any,
      date_filter: any
    ): void {
      navigate({
        pathname: "/churn/feature",
        search:
          "?customer=" +
          customer +
          "&productList=" +
          product +
          "&featureList=" +
          feature +
          "&dateFilter=" +
          date_filter,
      });
    }
    const customerList = [
      {
        cocid: "",
        orgname: "All",
      },
    //   ...(props?.data?.customerNameVal),
    ];
  
    const productList = [
      {
        copid: "",
        productname: "All",
      },
    //   ...props.data?.productsVal,
    ];
  
    const productFeatureList = [
      {
        cofid: "",
        featurename: "All Features",
      },
      {
        cofid: "T3",
        featurename: "Top 3 Features",
      },
    //   ...props.data?.productsFeaturesListVal,
    ];
  
    function roundToTwoDecimals(number: any) {
      if (Number.isInteger(number)) {
        return number;
      }
      return Number(number?.toFixed(2));
    }
  
    const formatPercent = (value: any) => {
      if (isNaN(value)) {
        if (value == "nc") {
          return 0;
        }
        return value && value.toUpperCase();
      }
  
      value = roundToTwoDecimals(value);
      if (value > 0) {
        value = "+" + value;
      }
      return value + "%";
    };
  
    const switchUpDown = (value: any) => {
      if (isNaN(value)) {
        return "";
      } else if (value < 0) {
        return "down";
      } else {
        return "up";
      }
    };
  
    const convertToDateDDMMYYYY = (dateString: string): string => {
      const date = new Date(dateString);
      const options: any = ["All Time", "Year to Date"].includes(
        props.data.date_filter_val.label
      )
        ? { month: "short" }
        : { month: "short", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    };
  
    const top3graph: any = []
    // props.data.getTop3FeatureGraphVal.map((item: any) => {
    //   return { ...item, weekly: convertToDateDDMMYYYY(item.weekly) };
    // });
    const endUserGraph: any = []
    // props.data.getEndUsersCountMonthlyVal.map(
    //   (item: any) => {
    //     return { ...item, weekly: convertToDateDDMMYYYY(item.weekly) };
    //   }
    // );
    const avgNFUGraph: any = []
    // props.data.getAverageOfFeatureUsedMonthlyGraphVal.map(
    //   (item: any) => {
    //     return { ...item, weekly: convertToDateDDMMYYYY(item.weekly) };
    //   }
    // );
    const FUGraph: any = []
    // props.data.getFreqOfUsageCountGraphVal.map((item: any) => {
    //   return { ...item, weekly: convertToDateDDMMYYYY(item.weekly) };
    // });
    const FARGraph: any = []
    // props.data.getFeatureAdoptionRateGraphVal.map(
    //   (item: any) => {
    //     return { ...item, weekly: convertToDateDDMMYYYY(item.weekly) };
    //   }
    // );
    const colorsBar = ['#008080', // Teal
    '#FF6347', // Tomato
    '#00BFFF', // Deep Sky Blue
    '#8fbc8f', // darkseagreen
    '#bdb76b', // darkkhaki
    '#9370DB', // Medium Purple
    '#FFA07A', // Light Salmon
    '#00FF7F', // Spring Green
    '#BA55D3', // Medium Orchid
    '#FF4500', // Orange Red
        ];  
    const resGraph = props.data?.ResolutionTImeBarChartVal.map((item: any,index: number) => {
      return { ...item, resolutiontime: Number(item.resolutiontime),fill: colorsBar[index] };
    });
    let resVal =
      props?.data?.ResolvedTicketsVal &&
      props.data.ResolvedTicketsVal[0] &&
      props.data.ResolvedTicketsVal[0].resolvedtickets;
    let openVal =
      props?.data?.OpenTicketsVal &&
      props.data.OpenTicketsVal[0] &&
      props.data.OpenTicketsVal[0].opentickets;
  
    const totalNumberOfTicketsVal: any = [
      { name: "Resolved Tickets", value: parseInt(resVal) },
      { name: "Open Tickets", value: parseInt(openVal) },
    ];
  
    const topSupportCategoryGraph: {
      name: string;
      value: number;
    }[] = props.data?.TopSupportCategoriesGraphVal.map((item: any) => {
      return {
        ...item,
        value: parseInt(item.value),
      };
    });
  
    const COLORS = ["#0088FE", "#10b981", "#083344", "#0891b2", "#a2c9ea",'#008080', // Teal
    '#FF6347', // Tomato
    '#FFD700', // Gold
    '#7CFC00', // Lawn Green
    '#9370DB', // Medium Purple
    '#FFA07A', // Light Salmon
    '#00FF7F', // Spring Green
    '#BA55D3', // Medium Orchid
    '#FF4500',];
  
    const graph_plotting_switch = (type: string) => {
      if (type == "EndUsers") {
        setGraphtitle("End Users");
        setseriesUpsell(endUserGraph);
      }
      if (type == "Top3") {
        setGraphtitle("Top 3 features");
        setseriesUpsell(top3graph);
      }
      if (type == "AvgOfFeat") {
        setGraphtitle("Avg Number Of Features Used");
        setseriesUpsell(avgNFUGraph);
      }
      if (type == "FreqOfUse") {
        setGraphtitle("Frequency of Use");
        setseriesUpsell(FUGraph);
      }
      if (type == "FeatureAdopRate") {
        setGraphtitle("Feature Adoption Rate");
        setseriesUpsell(FARGraph);
      }
    };
  
    const transformedData = seriesUpsell.reduce<
      { featurename: string; data: any }[]
    >((acc: any, item: any) => {
      const existingFeature = acc.find(
        (el: any) => el.featurename === item.featurename
      );
      if (existingFeature) {
        const existingData = existingFeature.data.find(
          (el: any) => el.weekly === item.weekly
        );
        if (existingData) {
          existingData.count += parseInt(item.count, 10);
        } else {
          existingFeature.data.push({ ...item, count: parseInt(item.count, 10) });
        }
      } else {
        acc.push({
          featurename: item.featurename,
          data: [{ ...item, count: parseInt(item.count, 10) }],
        });
      }
      return acc;
    }, []);
  
    useEffect(() => {
      setSelectedProduct(props && props.data && props.data.product);
    }, [props && props.data && props.data.product]);
  
    useEffect(() => {
      setSelectedCustomer(props && props.data && props.data.customer);
    }, [props && props.data && props.data.customer]);
  
    useEffect(() => {
      setSelectedProductFeature(props && props.data && props.data.productFeature);
    }, [props && props.data && props.data.productFeature]);
  
    // let data = props.data.activeCustomersTableVal;
  
    const data = props && props.data && props.data.activeCustomersTableVal.map(
      (item: any, index: number) => {
        return {
          ...item,
          key: index + 1,
        };
      }
    );
  
    const updatedData = data && data.map((item: any) => {
      const avgfeatureused = parseInt(item.avgfeatureused);
      const totaluser = parseInt(item.totaluser);
      const newTotaluser =
        (avgfeatureused !== 0 ? avgfeatureused / totaluser : 0) * 100;
  
      return {
        ...item,
        totaluser: parseFloat(newTotaluser.toFixed(2)),
      };
    });
  
    const data2 = props.data?.ActiveUsersTableVal.map(
      (item: any, index: number) => {
        return {
          ...item,
          key: index + 1,
        };
      }
    );
  
  
    return (
      <div className="bg-white">
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">
        <h1 className="text-2xl font-semibold text-gray-700">
              {props.data?.company_name} Feature Usage
        </h1>
        <div className="flex flex-row items-center justify-end gap-2 "></div>
        <div className="flex flex-row items-center justify-end gap-2 ">
                    <Listbox
                      value={props.data?.customer}
                      onChange={setSelectedCustomer}
                    >
                      <div className="relative w-full mt-1" style={{ position: "relative", zIndex: 1 }}>
                        <Listbox.Button className="border-rad-cards relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate p-3">
                            Customers : {props.data?.customer.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {customerList &&
                              customerList.map((person, personIdx) => (
                                <Listbox.Option
                                  key={personIdx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={person}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        onClick={() =>
                                          goToProspectRoute(
                                            person.cocid,
                                            selectedProduct.copid,
                                            selectedProductFeature.cofid,
                                            selectedTImeFilter.label
                                          )
                                        }
                                        className={`block truncate ${
                                          selected ? "font-medium" : "font-normal"
                                        }`}
                                      >
                                        {person.orgname}
                                      </span>
                                      {props.data?.customer.name ===
                                      person.orgname ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
        </div>
        <div className="flex flex-row items-center justify-end gap-2 ">
        <Listbox
                      value={props.data?.product}
                      onChange={setSelectedProduct}
                    >
                      <div className="relative w-full mt-1" style={{ position: "relative", zIndex: 1 }}>
                        <Listbox.Button className="border-rad-cards relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate p-3">
                            Products : {props.data?.product.productname}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {productList &&
                              productList.map((person: any, personIdx: any) => (
                                <Listbox.Option
                                  key={personIdx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={person}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        onClick={() =>
                                          goToProspectRoute(
                                            selectedCustomer.cocid,
                                            person.copid,
                                            "",
                                            selectedTImeFilter.label
                                          )
                                        }
                                        className={`block truncate ${
                                          selected ? "font-medium" : "font-normal"
                                        }`}
                                      >
                                        {person.gproductname}
                                      </span>
                                      {props.data?.product
                                        .productname ===
                                      person.roductname ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
        </div>
        <div className="flex flex-row items-center justify-end gap-2 ">
        <Listbox
                      value={props.data?.productFeature}
                      onChange={setSelectedProductFeature}
                    >
                      <div className="relative w-full mt-1" style={{ position: "relative", zIndex: 1 }}>
                        <Listbox.Button className="border-rad-cards relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate p-3">
                            Features : {props.data?.productFeature.featurename}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {productFeatureList &&
                              productFeatureList.map(
                                (person: any, personIdx: any) => (
                                  <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                          ? "bg-amber-100 text-amber-900"
                                          : "text-gray-900"
                                      }`
                                    }
                                    value={person}
                                  >
                                    {({ selected }) => (
                                      <>
                                        <span
                                          onClick={() =>
                                            goToProspectRoute(
                                              selectedCustomer.cocid,
                                              selectedProduct.copid,
                                              person.cofid,
                                              selectedTImeFilter.label
                                            )
                                          }
                                          className={`block truncate ${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          }`}
                                        >
                                          {person.featurename}
                                        </span>
                                        {props.data?.productFeature
                                          .featurename === person.featurename ? (
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                )
                              )}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
        </div>
        <div className="flex flex-row items-center justify-end gap-2 ">
        <Listbox
                      value={props.data?.date_filter_val}
                      onChange={setSelectedTImeFilter}
                    >
                      <div className="relative w-full mt-1" style={{ position: "relative", zIndex: 1 }}>
                        <Listbox.Button className="border-rad-cards relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate p-3">
                            Time Period : {props.data?.date_filter_val.label}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {timeRangeFilterItems &&
                              timeRangeFilterItems.map(
                                (person: any, personIdx: any) => (
                                  <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                          ? "bg-amber-100 text-amber-900"
                                          : "text-gray-900"
                                      }`
                                    }
                                    value={person}
                                  >
                                    {({ selected }) => (
                                      <>
                                        <span
                                          onClick={() =>
                                            goToProspectRoute(
                                              selectedCustomer.cocid,
                                              selectedProduct.copid,
                                              selectedProductFeature.cofid,
                                              person.label
                                            )
                                          }
                                          className={`block truncate ${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          }`}
                                        >
                                          {person.label}
                                        </span>
                                        {props.data?.date_filter_val.label ===
                                        person.label ? (
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                )
                              )}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
        </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          <a
            role="button"
            onClick={() =>
              graph_title === "End Users"
                ? graph_plotting_switch("Top3")
                : graph_plotting_switch("EndUsers")
            }
          >
            <IndividualMetricCard
              className={
                graph_title === "End Users" ? "border-lightgray-4px" : ""
              }
              showChange={["This Month", "Last Month"].includes(
                selectedTImeFilter && selectedTImeFilter.label
              )}
              metricTitle="End Users"
              metricValue={props.data?.countOfActiveUsersVal}
              changePercentage={formatPercent(props.data?.endUserPer)}
              changeDirection={switchUpDown(props.data?.endUserPer)}
              clicked = {graph_title === "End Users"}
            />
          </a>
          <a
            role="button"
            onClick={() =>
              graph_title === "Avg Number Of Features Used"
                ? graph_plotting_switch("Top3")
                : graph_plotting_switch("AvgOfFeat")
            }
          >
            <IndividualMetricCard
              className={
                graph_title === "Avg Number Of Features Used"
                  ? "border-lightgray-4px"
                  : ""
              }
              showChange={["This Month", "Last Month"].includes(
                selectedTImeFilter && selectedTImeFilter.label
              )}
              metricTitle="Avg Number of Features used"
              metricValue={`1 `}
              changePercentage={formatPercent(props.data?.averageFeatUsed)}
              changeDirection={switchUpDown(props.data?.averageFeatUsed)}
              clicked = {graph_title === "Avg Number Of Features Used"}
            />
          </a>
          <a
            role="button"
            onClick={() =>
              graph_title === "Frequency of Use"
                ? graph_plotting_switch("Top3")
                : graph_plotting_switch("FreqOfUse")
            }
          >
            <IndividualMetricCard
              className={
                graph_title === "Frequency of Use" ? "border-lightgray-4px" : ""
              }
              showChange={["This Month", "Last Month"].includes(
                selectedTImeFilter && selectedTImeFilter.label
              )}
              metricTitle="Frequency of Use"
              metricValue={props.data?.frequencyOfUseVal}
              changePercentage={formatPercent(props.data?.frequencyOfUsePer)}
              changeDirection={switchUpDown(props.data?.frequencyOfUsePer)}
              clicked = {graph_title === "Frequency of Use"}
            />
          </a>
          <a
            role="button"
            onClick={() =>
              graph_title === "Feature Adoption Rate"
                ? graph_plotting_switch("Top3")
                : graph_plotting_switch("FeatureAdopRate")
            }
          >
            <IndividualMetricCard
              className={
                graph_title === "Feature Adoption Rate"
                  ? "border-lightgray-4px"
                  : ""
              }
              showChange={["This Month", "Last Month"].includes(
                selectedTImeFilter && selectedTImeFilter.label
              )}
              metricTitle="Feature Adoption Rate"
              metricValue={props.data?.featureAdoptionRateVal + "%"}
              changePercentage={formatPercent(props.data?.featureAdoptionRatePer)}
              changeDirection={switchUpDown(props.data?.featureAdoptionRatePer)}
              clicked={graph_title === "Feature Adoption Rate"}
            />
          </a>
        </div>
  
        <ul
          role="list"
          className="border-rad-cards mt-12 grid grid-cols-1 place-content-between items-center gap-6"
        >
          <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="w-full p-6">
              <div className="max-w-xs">
                <h2 className="text-xl font-bold">{graph_title}</h2>
              </div>
              {seriesUpsell.length > 0 ? (
                <ResponsiveContainer width="99%" height={400}>
                  <LineChart
                    data={seriesUpsell}
                    margin={{
                      top: 35,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="weekly" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {transformedData.map((line: any, index: any) => (
                      <Line
                        key={line.featurename + index}
                        type="monotone"
                        data={line.data}
                        dataKey="count"
                        name={
                          graph_title === "Top 3 features"
                            ? line.featurename
                            : graph_title
                        }
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <Empty />
              )}
            </div>
            {/* <OverviewLine /> */}
          </li>
        </ul>
  
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 place-content-between items-stretch gap-6 lg:grid-cols-2 xl:grid-cols-2"
        >
          <div
            className="border-rad-cards col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <div className="h-full w-full p-6">
              <div className="max-w-xs">
                <h2 className="mb-8 text-xl font-bold">
                  Feature Usage by Department
                </h2>
              </div>
              {props.data?.getfeatureUsageByDepartmentVal.length > 0 ? (
                <AppBarChart {...featureUsageByIndustryBarData} />
              ) : (
                <Empty />
              )}
            </div>
          </div>
          <div
            className="border-rad-cards col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <div className="w-full p-6">
              <h2 className="mb-8 text-xl font-bold">Feature Usage By Role</h2>
              {props.data?.getfeatureUsageByRoleVal.length > 0 ? (
                <AppBarChart {...featureUsageByTypeBarData} />
              ) : (
                <Empty />
              )}
            </div>
          </div>
        </ul>
  
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-2 xl:grid-cols-6">
          <div className="border-rad-cards col-span-2 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="w-full p-6">
              <h2 className="mb-3 text-xl font-bold">Top Support Categories</h2>
              {topSupportCategoryGraph &&topSupportCategoryGraph.length > 0 ? (
                <OverviewPie data={topSupportCategoryGraph} />
              ) : (
                <Empty className="mt-20"/>
              )}
            </div>
          </div>
          <div className="border-rad-cards col-span-2 divide-gray-200 rounded-lg bg-white shadow">
            <div className="w-full p-6">
              <h2 className="mb-3 text-xl font-bold">Total Number of Tickets</h2>
              {
            //   props.data?.ResolvedTicketsVal[0].resolvedtickets > 0 ||
            //   props.data.OpenTicketsVal[0].opentickets > 0 ? (
            //    <OverviewPie data={totalNumberOfTicketsVal} />
            //   ) :
               (
                <Empty className="mt-20"/>
              )}
            </div>
          </div>
          <div className="border-rad-cards col-span-2 divide-gray-200 rounded-lg bg-white shadow">
            <div className="w-full p-6">
              <h2 className="mb-8 text-xl font-bold">
              Time Resolution bar chart
              </h2>
              <ResponsiveContainer width="99%" height={400}>
                {resGraph && resGraph.length > 0 ? (
                  <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={resGraph}
                    margin={{
                      top: 15, right: 30, left: 20, bottom: 5
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray=" 5" />
                    <XAxis
                      type="number"
                      interval="preserveStartEnd"
                      tickCount={5}
                      minTickGap={50}
                    />
                    <YAxis dataKey="supporttype" label={{ value: 'Support Type', angle: -90, position: 'insideLeft' }} tick={false} type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="resolutiontime"
                      name="Resolution Time in hours"
                      barSize={20}
                      label={CustomizedLabel}
                      // fill="#413ea0"
                    />
                  </ComposedChart>
                ) : (
                  <Empty className="mt-20" />
                )}
              </ResponsiveContainer>
            </div>
          </div>
        </div>
  
        <div className="border-rad-cards mt-12 h-5/6 overflow-scroll rounded-lg bg-white  py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* <h1 className="text-2xl font-semibold text-gray-700">
              780 Customers
            </h1> */}
  
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="relative">
                    {/* <CardContainer title="Insights"> */}
                    <Tabs classNameAdd={""} customHandleClick={""}>
                      <Tab label="Active Customers">
                        <Table
                          key="Active Customers"
                          columns={columns}
                          dataSource={updatedData}
                        />
                      </Tab>
                      <Tab label="Active Users">
                        <Table columns={columnsUsers} dataSource={data2} />
                      </Tab>
                    </Tabs>
                    {/* </CardContainer> */}
                    {/* <FeatureTable ></FeatureTable> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  