import React, { useState, useEffect } from 'react'
// import { useLoaderData } from "@remix-run/react";
// import { LoaderArgs, json } from "@remix-run/server-runtime";
import IntergrationTemplateCard from './integrationTemplateCard';
import GlobalSideNav from './GlobalSideNav';
// import { getOrgIntegrationData, getorgid } from "~/models/integrations.server";
// import { getUserById } from "~/models/user.server";
// import { requireUserId } from "~/session.server";

const clientId = '5689304448561.5678432685603';

//let consumerkey = '3MVG9pRzvMkjMb6m1tgTXH2j1_Q3CLDN_H6EfPJQSp0y5nMIBVhNul27.eqd2BKW6r6yJvQLSn4LO6mVaGbVs';
let consumerkey = '3MVG95nWQGdmAiEoxYu2R8gdYDKHMDKDnfL50FinNL1kNs7.3MBZfXtDF6jWsw4VHIRwqGdX.643YML6uHoQs';
let callbackurl = 'https://clinchit.io/integrations/salesforce';
let slackUrl = 'https://slack.com/oauth/v2/authorize?client_id='+clientId+'&scope=users:read,users:read.email&state=slack'


// export const loader = async ({ params, request }: LoaderArgs) => {
//   var slack_data = '';
//   const userId: any = await requireUserId(request);
//   const user: any = await getUserById(userId);
//   if (user) {
//     const companyname = user.companyname ? user.companyname : '';
//     if (companyname !== '') {
//       const orgid = await getorgid(companyname);
//       if (orgid) {
//         slack_data = await getOrgIntegrationData(orgid, 'slack');
//       }
//     }
//   }
//   return json({ slack: slack_data });
// };
const IntegrationTabs = [
  "All", "Connected", "CRM", "Product Tracking", "In Product", "Data Warehouse", "Billing", "Support", "Team Messaging", "Email and Calendar", "Sales Enablement"
]

const Integrations = () => {
  const [activeTab, setActiveTab] = useState("All")
  const [integrationData, setIntegrationData] = useState([])
  const data: any = {}
  let integrationList:any = [
    {
      title: "Salesforce",
      tab: "CRM",
      content:
        "Automatically sync your customer, marketing and sales data from Salesforce via Clinch",
      icon: "https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg",
      url: `https://login.salesforce.com/services/oauth2/authorize?client_id=${consumerkey}&redirect_uri=${callbackurl}&response_type=code&state=salesforce`
    },
    {
      title: "Slack",
      tab: "Team Messaging",
      content: "Get messages, notifications and alert via Slack with Clinch",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD2klEQVR4Ab2VBYzjVhRFn7OMomUKlMk/1AwVUkGZubHLzK2oGChzK1ZJVFGZnLGdMgXKzLiMAXsY3bvgKvXau55Za450B/KV944/mdyQKGkh5KlEqfEHfhdaytoxbaVuzhwPqxmOqVmBlzMf8UrmJ6ZkHmBKdhF5QWtZ4xLFxneI0ZShts+79qEd8Gr2dF5OG/9PRiEvSJT1syzNzXxHIKzkpqNhH2JYMhJV7tqb9pSWUuNWWwHkyMrAVEz5UmtzM1iacz1YAv0QNBuyE2gvdk3n1cxyJwGmpgXyAmy8uyZewEJLUWtvKWk3Q+YOM8kv9MkTJOCMJwJHfNbLtVa62lqL2jXIdU7BDFzTVtYYNRGRc64FWuTcfKakz2ZqhpFJS1kPYT0/Q4wxpDP5S++U7ccw60oAl9Ot+GzAPKK8klaYnFlAKPYcYow1mI1HCYRdzABuxQ7bcSV9JwS0+rgEilrfcb8bPjd7AI1utxfIlAn3+8/jnIFfCRxauGcGGgzbN8juRwDT/YDtuJx+jVDoynEI9LVU9CNoB1jLa1FwyNLgHXMc7wU7gRHMwPGEJeASJT2For3ummsabsfjqImOdx7hsLOvwrXcj8KjEHo18f59swjYzoCSrkffuquVFXIcmSQ/656Kp1rYUmkscgpewQtxZCeTAy0f3DM1quTmkoWImpsdLmQWbctb6QU4jpPIjjUhcdaqvS+cvS37XTJlp/H9L5hqJGHtgCHFuIYcm72rdCmxmdTMyoDI/eMXD1u5IrX2nxUp47/4U1fQDjYFL5m9coXwEj4fWekXflsVTEXJQi0fPrn6Jlu75U3e2G0k9otWiIeqcpQjFBRQeBQx7ASMs170/bNC+MIy3g1p1tQ8hcIDiDGGDFY7w0lCse8Qw0kAgmfZja/E9wg01Pg0PJG75pZU3+RfIDTSHRqIBDD1j9sKIuv2vXzalnxkgX0DV0vxGZ4w9crOzYXRVUFxHwIQecJJYMNe50/XpZivKrHvxzkD99PK4PkHoNhvTYX7Me1XEnAjQECToktQ8JcxNB+tSny51smWbm8SusD3T0A8C41vXBsUVxBwK9B0BKfWJHYupvWhXaWaZ/fW8+w4XYlz5Aa3At7jUqAuhWdjD1zdlFQtH10+YQJVKbzcZncPQOT0CRKImALW1Az5uCm0p/zjFx5zEli730XTsPGWOR6zfPgoDwRE0VYA7wQCupqYiWaDdket/mbkQC+WwIeGf1oERtb6xTjtYIvEX2kVwDn/kLxilV84CC+k13Zc29/gvjgHYpw5jg3nw1Jch8a/IlUIPbslz/zkgn8BeVEBTo2yH6AAAAAASUVORK5CYII=",
      url: slackUrl,
      data: (data && data.slack) ? data.slack : ''
    },
    {
      title: "Clinch.js",
      tab: "Product Tracking",
      content: "Track your product engagement data using the Clinch.js snippet",
      icon: "/Vector.png",
      url: '/integrations/clinchjs',
    },
    {
      title: "HubSpot",
      tab: "CRM",
      content:
        "Automatically sync your customer, marketing and sales data from Hubspot via Clinch",
      icon: "/hubSpot.png",
      //icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMzguNjU5NjEgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzOC42NTk2MSA5NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBvbHlnb24gZmlsbD0iIzIxMzM0MyIgcG9pbnRzPSIzNi42NzcyNSw1NC4zMzIxOSAxMS44MDkxOCw1NC4zMzIxOSAxMS44MDkxOCw4MC41Mjg1OSAwLDgwLjUyODU5IDAsMTUuODkwODMgMTEuODA5MTgsMTUuODkwODMgCgkJMTEuODA5MTgsNDIuOTcxMDMgMzYuNjc3MjUsNDIuOTcxMDMgMzYuNjc3MjUsMTUuODkwODMgNDguNDgzNzgsMTUuODkwODMgNDguNDgzNzgsODAuNTI4NTkgMzYuNjc3MjUsODAuNTI4NTkgCSIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTg2LjI2OTM2LDU5LjYzNjM0YzAsNS4zODM0NC00LjM4NTMxLDkuNzYzNzUtOS43Njc1NSw5Ljc2Mzc1Yy01LjM4MzY4LDAtOS43NjYxNi00LjM4MDMxLTkuNzY2MTYtOS43NjM3NQoJCXYtMjcuNjg0OUg1NS41NTMzOXYyNy42ODQ5YzAsMTEuNTUwMjUsOS4zOTc2NCwyMC45NDU1OCwyMC45NDg0MiwyMC45NDU1OGMxMS41NDg0MiwwLDIwLjk0NjA1LTkuMzk1MzMsMjAuOTQ2MDUtMjAuOTQ1NTgKCQl2LTI3LjY4NDloLTExLjE3ODVWNTkuNjM2MzR6Ii8+Cgk8cGF0aCBmaWxsPSIjMjEzMzQzIiBkPSJNMTY5LjI0NTU2LDM0LjgwMTljMC01LjY3NjIxLDMuNzU2OTktNy40NzYxNSw3Ljg3MDI1LTcuNDc2MTVjMy4zMTIwMSwwLDcuNjk0NzIsMi41MjA2OSwxMC41NTQyNCw1LjU4MzYxCgkJbDcuMzMzMjUtOC42NDQ0Yy0zLjY2NDUxLTQuOTUxMi0xMS4wODc5MS04LjM3NDEzLTE3LjE3MDc1LTguMzc0MTNjLTEyLjE2NzMxLDAtMjAuOTMzODUsNy4xMTQyNC0yMC45MzM4NSwxOC45MTEwNgoJCWMwLDIxLjg4MDQ2LDI2Ljc0ODIsMTQuOTQ0NzksMjYuNzQ4MiwyNy4xOTQwNGMwLDMuNzc3NTMtMy42NjYzOCw3LjExMjM2LTcuODY5MzQsNy4xMTIzNgoJCWMtNi42MjE3LDAtOC43Njk2MS0zLjI0MTc0LTExLjgwOTg2LTYuNjY0bC04LjE0MTgyLDguNDYyNzJjNS4xOTEyMiw2LjM5MzczLDExLjYzMDA4LDkuNjM3MzYsMTkuMzIzNjUsOS42MzczNgoJCWMxMS41Mzk0OSwwLDIwLjg0MzI1LTcuMjA0MDUsMjAuODQzMjUtMTguNDYxNDlDMTk1Ljk5MjgsMzcuNzcxNDgsMTY5LjI0NTU2LDQ1LjMzNjI3LDE2OS4yNDU1NiwzNC44MDE5eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTMzNC43MjA0OSw3MC4yMDI3OGMtNi42MTY5NywwLTguNDk1MDYtMi44NjA5Ni04LjQ5NTA2LTcuMjQ1OThWNDMuNTQ2NThoMTAuMjg0ODJ2LTkuODM4OTJoLTEwLjI4NDgyCgkJVjIwLjczNTE1bC0xMS4zNTc3OSw1LjA5ODI2djM5LjUzOTMxYzAsMTAuMTA5Myw2Ljk3NDY0LDE1LjIwOTIsMTYuNTQyNjYsMTUuMjA5MmMxLjQzMTIxLDAsMy40MDEyMS0wLjA5MjQ4LDQuNDc1NjgtMC4zNTc2NgoJCWwyLjc3MzYyLTEwLjE5NzA2QzMzNy40MDc3NSw3MC4xMTM1NywzMzUuOTc3MDIsNzAuMjAyNzgsMzM0LjcyMDQ5LDcwLjIwMjc4eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTEyOC44OTMyMywzMi4yNzUzM2MtNS41NDY3MywwLTkuNDE4MjksMS42MTAwMi0xMy4xNTczNiw1LjI4MDAzVjE2LjI3Njg1aC0xMS4yMTgwOXYzOS40MzU0NgoJCWMwLDE0Ljc2MDQsMTAuNjcxNjEsMjQuODY5NjMsMjIuNjYyMzYsMjQuODY5NjNjMTMuMzI5MDYsMCwyNS4wMDc3Ny0xMC4yODg5OSwyNS4wMDc3Ny0yNC4xNTIzMgoJCUMxNTIuMTg3OTEsNDIuNzQxOTEsMTQxLjQxODY5LDMyLjI3NTMzLDEyOC44OTMyMywzMi4yNzUzM3ogTTEyOC44MjM1LDY5LjI5MTczYy03LjAyNzU0LDAtMTIuNzIzNzQtNS42OTY0Mi0xMi43MjM3NC0xMi43MjM1MwoJCWMwLTcuMDI2ODksNS42OTYyLTEyLjcyMzUzLDEyLjcyMzc0LTEyLjcyMzUzYzcuMDI2NjcsMCwxMi43MjMzMSw1LjY5NjY0LDEyLjcyMzMxLDEyLjcyMzUzCgkJQzE0MS41NDY4MSw2My41OTUzLDEzNS44NTAxNyw2OS4yOTE3MywxMjguODIzNSw2OS4yOTE3M3oiLz4KCTxwYXRoIGZpbGw9IiMyMTMzNDMiIGQ9Ik0yNTAuNjgzNDYsNTUuODQ3MjRjMC0xMy44NjMzMy0xMS42Nzg3My0yNC4xNTIzMi0yNS4wMDc3OC0yNC4xNTIzMgoJCWMtMTEuOTkwNzUsMC0yMi42NjIzNSwxMC4xMDkyMi0yMi42NjIzNSwyNC44Njk2M1Y5NmgxMS4yMTgwOVY3NC43MjE0OWMzLjczOTA2LDMuNjcwMDEsNy42MTA2Myw1LjI4MDAzLDEzLjE1NzM1LDUuMjgwMDMKCQlDMjM5LjkxNDIyLDgwLjAwMTUyLDI1MC42ODM0Niw2OS41MzQ5NCwyNTAuNjgzNDYsNTUuODQ3MjR6IE0yNDAuMDQyMzQsNTUuNzA4NjVjMCw3LjAyNjg5LTUuNjk2NjQsMTIuNzIzNTMtMTIuNzIzMzEsMTIuNzIzNTMKCQljLTcuMDI3NTQsMC0xMi43MjM3NC01LjY5NjY0LTEyLjcyMzc0LTEyLjcyMzUzYzAtNy4wMjcxLDUuNjk2Mi0xMi43MjM1MywxMi43MjM3NC0xMi43MjM1MwoJCUMyMzQuMzQ1Nyw0Mi45ODUxMywyNDAuMDQyMzQsNDguNjgxNTUsMjQwLjA0MjM0LDU1LjcwODY1eiIvPgoJPHBhdGggZmlsbD0iI0ZGNUMzNSIgZD0iTTI4Ni45MzI0NiwzMS4xNTE1NFYxOS44ODMxMmMyLjk0MTE2LTEuMzg5NTEsNS4wMDIwMS00LjM2NTA4LDUuMDAyMDEtNy44MTg1di0wLjI2MDM4CgkJYzAtNC43NjU1Ny0zLjg5OTQ0LTguNjY0OC04LjY2NDgzLTguNjY0OGgtMC4yNjAxNmMtNC43NjU3OCwwLTguNjY1MjIsMy44OTkyMy04LjY2NTIyLDguNjY0OHYwLjI2MDM4CgkJYzAsMy40NTM0MSwyLjA2MTI4LDYuNDI5NDIsNS4wMDI0MSw3LjgxODcydjExLjI2ODQyYy00LjM3OTI0LDAuNjc2NTYtOC4zODA2NSwyLjQ4MjY5LTExLjY4MjE5LDUuMTQwNzlsLTMwLjkzODg3LTI0LjA2NzU2CgkJYzAuMjAzNTEtMC43ODM3NywwLjM0NjQ1LTEuNTkxMjksMC4zNDczMi0yLjQzODY4YzAuMDA2OTctNS4zOTc5MS00LjM2MzEzLTkuNzc5MzMtOS43NjEyNS05Ljc4NjMxCgkJYy01LjM5ODEzLTAuMDA2NzUtOS43Nzk1Niw0LjM2MzU2LTkuNzg2NTMsOS43NjE0N2MtMC4wMDY1Myw1LjM5NzkxLDQuMzYzNTYsOS43NzkzMyw5Ljc2MTY5LDkuNzg2MDkKCQljMS43NTkyOCwwLjAwMjE4LDMuMzg3MzktMC40OTc0NSw0LjgxNDYxLTEuMzA5MTFsMzAuNDM0NjUsMjMuNjc1NzljLTIuNTg4NTksMy45MDY4NS00LjEwNDI1LDguNTg2OC00LjEwNDI1LDEzLjYyNDUyCgkJYzAsNS4yNzQ1OCwxLjY2NjAyLDEwLjE1MjgxLDQuNDgyMDksMTQuMTY1NzdsLTkuMjU1NzQsOS4yNTU3NGMtMC43MzE2OS0wLjIxOTQyLTEuNDkxMjctMC4zNzMwNC0yLjI5NDg2LTAuMzczMDQKCQljLTQuNDM1NDcsMC04LjAzMTYsMy41OTU5Mi04LjAzMTYsOC4wMzE2czMuNTk2MTMsOC4wMzE2LDguMDMxNiw4LjAzMTZjNC40MzU5LDAsOC4wMzE1OS0zLjU5NTkyLDguMDMxNTktOC4wMzE2CgkJYzAtMC44MDMxNi0wLjE1MzM4LTEuNTYyOTYtMC4zNzMwMi0yLjI5NDY1bDkuMTU1NDktOS4xNTUyOGM0LjE1NTcsMy4xNzI1NSw5LjMzMDY5LDUuMDc4MDMsMTQuOTYyODMsNS4wNzgwMwoJCWMxMy42NDU0NSwwLDI0LjcwNzUyLTExLjA2MjI5LDI0LjcwNzUyLTI0LjcwODE3QzMwNy44NDc3NSw0My4xODU4NywyOTguNzcyODYsMzIuOTgwMzMsMjg2LjkzMjQ2LDMxLjE1MTU0eiBNMjgzLjE0MDIzLDY4LjIwNjI4CgkJYy02Ljk5NjE1LDAtMTIuNjY4NC01LjY3MTM3LTEyLjY2ODQtMTIuNjY3NTNjMC02Ljk5NTk0LDUuNjcyMjQtMTIuNjY3NTMsMTIuNjY4NC0xMi42Njc1MwoJCWM2Ljk5NTMsMCwxMi42Njc1NCw1LjY3MTU4LDEyLjY2NzU0LDEyLjY2NzUzQzI5NS44MDc3Nyw2Mi41MzQ5MiwyOTAuMTM1NTMsNjguMjA2MjgsMjgzLjE0MDIzLDY4LjIwNjI4eiIvPgo8L2c+Cjwvc3ZnPgo=",
    },

    {
      title: "Stripe",
      tab: "Billing",
      content: "Automatically sync your revenue and payment data from Stripe via Clinch",
      icon: "/stripLogo.png",
      //icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAwCAMAAAAcuhVsAAAAZlBMVEX///9ncuVlcOVeauRgbORjbuTs7ft5gudbZ+SUm+zJzPWMlOpxe+axtvDv8Pz4+P7z9P1UYePO0fbBxfPj5fqrsO+DjOmYn+y6vvKJkeqkqu61uvHS1fba3PhueOZ1f+dMWuJ+h+gl2SYCAAADyklEQVRYhe2Y2ZqqOhBGM0rJGGZEgc37v+QOZAS1tZveXpzv1BWQ8C+K1BBA6JhV2UGB71ta1DP8OX2YWlOgjGP4NPfM8WL/hnsqevFhbjZcIwyQpx/mJjlblOlXXM5+P66udPXnORcAN3XxbPjHlrCvuV1Z/TbyLe7vWTqEZXirxEvuqXr6MKeiLB68h6wqynB4lBppHctCQCkAm/rBcXG8GM5QsR7hEoWxjPICtaMakXHVmDnlBCAVxmRbPKtWJoaUpk2xxyaUEqyNsPzmuJhIgwyFsBywvgQ5EUJ0ZmQdkdyAL0c0bEBrUDx42j1wLcWh2fp8Buwb+Nz1guSq+B5XDRr6+RsoHON2PgHrWRZQT4hjf4nqLfYrrnboEXcrYVY5YJvrfPSCAfY3HeeSWGm3dDfAWueuRpC1xZAtl3Bp+Y4LT7iM2ael3SI9aJcYHTndvQk0qfvIXBZh18bAPC5pLtJmj0uA8fwhl459V2NLXqQbPatPUVYqBW4dZt7E5bUntHD5a1LCcFlcCCTEo7hK1omRloPBriBVIzd1BkaSbrnSxH3d0Fx+MSlw768eifVj9LLIKxETS8p7G+v6AVnkJ9cTLjU33XOJHhnUTBIgNK+TeK9HVK9h5lQvgkzrqHjJDV/6i/QpIKQd6vTAbdXgjZG0ecQptNVhbquGcpHqFaS5MsMxE2cvV3nenA5y9apCVe0Lg/bfvtRpU8vy8BhXJwxUw2MutVzU53558vrCj7gv/PW4SPQUvLqe/YDLjZa+FU6Wyzfmc6UVERinoTzCvei4ykxcTdHGLmhnotcPyKMjXFeHtFq7B92ZDgkyu5f1ba6pw42pG34l9O2c2EIlNHey/hrO21xhyl/igrP2cXYTdAZ2LhS6s89q+uC4OCze4jZLyalGU64q19mhNjARBiFyElxu56K+nU3T6c3bkk15vgSu/36VR5zGzWT2WEt5tiEmm+P52nVJGzAKPherBm8auOxhbhNCOIG3uOse0ByqruMymDPK1k2F7SxGwtlauWfv6rvcnYS05K50POcStqypX+S+zSXchOrdBsvjbocYVi3p6sDvcV2p5dx9NNSwdSu363ubgZqlJZT2JvZKyoh6+D+Sm7PF7F0yCdZzxx07NZ9wuPg7iGEGs7WWH67Y/5g4lW0gN4OUx1HnbaxFPcloIHEr+0RVJ4vVxpEwUefC6wtq/tj6XwtrdNUzXoTGpt4PLZQ0vf8plKXi5Z8ivx+J9MmPiYfqx2zfBz9l/3P/+1yZmfBp7gQAl+T27M/eP7PrD/5i/QVFwjaQ08Ki2QAAAABJRU5ErkJggg==",
    },
    {
      title: "Intercom",
      content:
        "Automatically sync your customer, marketing, sales and support data from Intercom via Clinch",
      icon: "/intercom.png",
      //icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABPCAMAAADmzqp4AAAAYFBMVEX///8AAADFxcWqqqpeXl64uLhBQUHi4uLv7+8VFRUODg4+Pj77+/vIyMienp69vb2YmJjW1tZ0dHRUVFQiIiJISEh8fHzPz89ZWVk2NjaysrKCgoIvLy+Ojo5ra2sqKiojorgPAAAC00lEQVRoge2Ya7eqIBCGZzQFExW85qX8///yMEDusnanzlr05fCuVU6kPALjzCBAUFBQUFDQv0pd0t90Uf6wFb5S5QvLs5fcI/fELV5iEQtP3OgHsepPV3XOcoq8cwvIEWOIEfObWfDKPR71F4OD4x6AXRv9crl6wlXcN/dovHrHzTgcAzdwAzdwf+Ei8CfxioP3ONl0T7hd8518tOd+Kw/KIXPcbJBf5Bq1c3vf4JXLVI575Yr5z78AU3pPnQC851/MqHclGwdtJNXNUfaF9c0jQb8EZ9waUf4lv2r7hNlimbOk37zrK/7cjnmej3ce7YurHhz5Xt52SKeX2JMvLIjmBbYR3rh6qpPf5HEbGhQUFPRcjJlvk2TFIMg0KsisjCgHDmQoFxuHsqycqcpysjlSDMz1OLzDTZFO1TWxPky6aOTXABwDOKvWJGst1LWgkhozMrlNHeYVWo2Y0DFBnN/g5sSN7cUxlvo6WY44S8lBYFuSGL3L6rRxwBwoTaVRccJFj/iCa1LMVGADbV3oX+jc8T3uBRfHNT2bsC8wvZ5VYE+HURMUrtYsaJpoumczwGxJic90V29zJ9RjmTZuc+Xm12TnuKmuL2M7jaom07QycyfZUqIEkFh9wpUFjo9cXNe1TQVxT1WS9DQBZ1p5K0kgU9USN1PkJB3yT7hnWLCa9tzjOI7LCbZ3lQe+45Y3XNQOx/Q0w2fcBNNkz71Z36aS5ALbIEHfQqkvu+HyGONYO/VnXJFj/7C+P9yemokYYUMts3aiwp4w6W2i4XI8nGhz/IE/n+1r7h13ZCThuMpsW6DFsxAT2WLFmYvBlrSaS9tVfQtvcceNS0/eZNq6za+MZhqkDh76cSVXdvVtAtuy039ANzKZMKA99O+aiMhrevJZfbbPTeUCTlkbFXQCBT/WmcjE5i6tbWHH+i49mDAFsV4EIWklztMb3KCgoKCg/1l/AIiNJSfEDD3kAAAAAElFTkSuQmCC",
    },
    {
      title: "Segment",
      tab: "Product Tracking",
      content:
        "Automatically sync your product and marketing usage data from Segment via Clinch",
      icon: "data:image/png;base64,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",
    },
    {
      title: "Pendo",
      tab: "In Product",
      content:
        "Automatically sync your customer, marketing and sales data from Pendo via Clinch",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAuUlEQVR4AWJwL/AZUDx0HfBGPsodiA+RiWfDzCHXclUg/gnE/8nE52BmkeVzmOUU4EOAVuvYBkAYCIJgI06phTqoHLkMMiT0DTDa4PJZJ34CeLkDvNwBXu4AL+8BXu6AvtwBXu6AvtwBXu6AthwAUB4DpnzP7h/bwWf0Ada8wJ+tgd8IuIp7YCHgrA6SYwBU3gKgvAVAeQuA8hYA5S0AylsAlLcAKG8BUN4CoLwCbC2vAI+WV5/RlPtef558g5k3j+8AAAAASUVORK5CYII=",
    },
    {
      title: "Zendesk",
      tab: "Support",
      content:
        "Automatically sync your customer, marketing and sales data from Zendesk via Clinch",
      icon: "/zendesk.png",
    },
    {
      title: "Gmail",
      tab: "Email and Calendar",
      content:
        "Automatically sync your customer, marketing and sales data from Gmail via Clinch",
      icon: "/gmail.png",
    },
    {
      title: "Outlook",
      tab: "Email and Calendar",
      content:
        "Automatically sync your customer, marketing and sales data from Outlook via Clinch",
      icon: "/outlook.png",
    },
    {
      title: "Outreach",
      tab: "Sales Enablement",
      content:
        "Automatically sync your customer, marketing and sales data from Outreach via Clinch",
      icon: "/outreach.png",
    },
    {
      title: "Snowflake",
      tab: "Data Warehouse",
      content:
        "Automatically sync your customer, marketing and sales data from Snowflake via Clinch",
      icon: "/snowflake.png",
    },
    {
      title: "Teams",
      tab: "Team Messaging",
      content:
        "Automatically sync your customer, marketing and sales data from Teams via Clinch",
      icon: "/teams.png",
    },
  ];
  useEffect(() => {
    setIntegrationData(integrationList)
    filteredData()
  }, [activeTab])


  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }
  const filteredData = () => {
    if (activeTab === "All") {
      // const groupedIntegrations = integrationList.reduce((groups:any, integration:any) => {
      //   const tab = integration.tab;
      //   if (!groups[tab]) {
      //     groups[tab] = [];
      //   }
      //   groups[tab].push(integration);
      //   return groups;
      // }, {});
      return setIntegrationData(integrationList) 
    }
    let filteredData =integrationList.filter((item:any)=>item.tab === activeTab)
    console.log(activeTab);
    
    return setIntegrationData(filteredData)
    
  }
  
  return (
    <>
      <GlobalSideNav>
        {/* <button className="inline-flex items-center rounded bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Request Integration</span>
        </button> */}
        <div className="flex flex-wrap items-center gap-1 border-t border-solid border-gray-300 border-b border-solid border-gray-300 lg:gap-4 justify-center sm:justify-start">
          {IntegrationTabs?.length > 0 && IntegrationTabs.map((tab, index) => (
            <div className={activeTab === tab ? "text-blue-500 p-1 py-4 cursor-pointer text-sm border-b-2 border-solid border-blue-500 xl:p-3" : "text-grey-300 p-1 py-4 cursor-pointer text-sm xl-p3 hover:border-solid border-grey-500 hover:border-b-2 border-solid border-grey-500 xl:p-3"} key={index} onClick={() => handleTabClick(tab)}>{tab}</div>
            //text-blue-500  text-gray-500 border-b-2 border-solid border-blue-500
          ))}
        </div>
        <div className="flex items-center justify-between mt-5">
          <div><h2 className="text-xl font-semibold">{activeTab!=="All"? activeTab: "Connected"}</h2></div>
          <div className="flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-4 text-sm justify-center cursor-pointer">
            {/* <img className="h-8 w-auto cursor-pointer"
            src="/reguestLogo.png"
            alt="reguest Logo" /> */}
            <div className="text-blue-400">
              Request Integration  </div>
            <div ><img className="h-4 w-auto cursor-pointer"
              src="/plusLogo.png"
              alt="pluslogo" /> </div>

          </div>
        </div>
        <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {integrationData.map((item: any, index: number) => (
            <IntergrationTemplateCard
              key={index}
              title={item.title}
              description={item.content}
              icon={item.icon}
              url={item.url}
              data={item.data}
              tab={item.tab}
              activeTab={activeTab}
              integrationData={integrationData}
            />
          ))}
        </div>
      </GlobalSideNav>
    </>
  );
};

export default Integrations;
