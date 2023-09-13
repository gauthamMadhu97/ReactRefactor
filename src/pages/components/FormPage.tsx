import React, { useState } from 'react';
import './FormPage.css';


const FormPage = () => {
  const [workEmail, setWorkEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');

  const [jobTitle, setJobTitle] = useState<string>('');

  const [companyName, setCompanyName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedCRM, setSelectedCRM] = useState<string>('');
  const [otherCRM, setOtherCRM] = useState<string>('');
  const [otherAnalytics, setOtherAnalytics] = useState<string>('');
  const [otherComm, setOtherComm] = useState<string>('');
  const [selectedAnalytics, setSelectedAnalytics] = useState<string>('');
  const [selectedComm, setSelectedComm] = useState<string>('');
  const [selectedCheckBox, setSelectedCheckBox] = useState<boolean>(false);
  const [showOtherFields, setShowOtherFields] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const handleWorkEmailChange = (e: any) => {
    setWorkEmail(e.target.value);
    setShowOtherFields(/\S+@\S+\.\S+/.test(e.target.value));
  };
  return (
    <html className='flex flex-col items-center justify-center gap-2  bg-white h-min mb-0 rounded-xl pb-8 pl-10 pr-10 pt-8 sm:mt-0 mt-10'>
      {/* md:col-span-6 lg:col-span-5 */}
      <head>
        <meta httpEquiv="Content-type" content="text/html; charset=UTF-8"></meta>
      </head>

      <form autoComplete='off' action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
        <input type={"hidden"} name="oid" value="00DDp000000g8jc"></input>
        <input type={"hidden"} name="retURL" value="https://clinchit.io/request-demo-success"></input>

        <div style={{ color: "#05766F",fontWeight:500 }} className='text-base sm:text-3xl text-black text-center self-stretch'>Experience Clinch in Action</div>
        <div className="relative z-0 w-full mb-3 group mt-2">
          <input autoComplete='off' type="email" name="email" id="email" className=" text-custom-gray mt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent custom-inputStyle appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required value={workEmail} onChange={handleWorkEmailChange} />
          {<label style={{ fontSize: "14px" }} htmlFor="email" className={`${!workEmail ? "pl-2 ml-1" : "hidden"} peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 -left-2 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:hidden`}>Work Email<span className='text-red-600'> *</span></label>}
        </div>
        {showOtherFields && <>
        <div className="relative z-0 w-full mb-3 group">
          <input autoComplete='off' type="text" name="first_name" id="first_name" className="text-custom-gray mt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent custom-inputStyle appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          {<label style={{ fontSize: "14px" }} htmlFor="first_name" className={`${
    !firstName ? "pl-2 ml-1" : "hidden"
  } peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:hidden`}>First Name<span className='text-red-600'> *</span></label>}
          {/* <label style={{ fontSize: "16px", fontFamily: "Segoe UI" }} htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name<span className='text-red-600'> *</span></label> */}
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input autoComplete='off' type="text" name="company" id="company" className="text-custom-gray mt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent custom-inputStyle appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          {<label style={{ fontSize: "14px" }} htmlFor="company" className={`${
    !companyName ? "pl-2 ml-1" : "hidden"
  } peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:hidden`}>Company Name<span className='text-red-600'> *</span></label>}
          {/* <label style={{ fontSize: "16px", fontFamily: "Segoe UI" }} htmlFor="company" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name<span className='text-red-600'> *</span></label> */}
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input autoComplete='off' type="text" name="phone" id="phone" className="text-custom-gray mt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent custom-inputStyle appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          {<label style={{ fontSize: "14px" }} htmlFor="phone" className={`${
    !phoneNumber ? "pl-2 ml-1" : "hidden"
  } peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:hidden`}>Phone number<span className='text-red-600'> *</span></label>}
          {/* <label style={{ fontSize: "16px", fontFamily: "Segoe UI" }} htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number<span className='text-red-600'> *</span></label> */}
        </div>
        <div className="relative z-0 w-full mb-3 group">
          <input autoComplete='off' type="text" name="job_title" id="job_title" className="text-custom-gray mt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent custom-inputStyle appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " required value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
         {<label style={{ fontSize: "14px" }} htmlFor="job_title" className={`${
    !jobTitle ? "pl-2 ml-1" : "hidden"
  } peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:hidden`}>Job Title<span className='text-red-600'> *</span></label>}
         {/* <label style={{ fontSize: "16px", fontFamily: "Segoe UI" }} htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name<span className='text-red-600'> *</span></label> */}
        </div>
        <div className='relative z-0 w-full mb-3 group flex sm:flex-row flex-col mt-6'>
          <div className="relative z-0 w-full sm:w-1/3 mb-4 mr-2 group ">
            <select id="00NDp00000GG3ib" name="00NDp00000GG3ib" required title="CRM" onChange={(e) => setSelectedCRM(e.target.value)} value={selectedCRM} className="custom-inputStyle custom-fontSize11 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer">
              <option value="" disabled>CRM</option>
              <option value="Salesforce">Salesforce</option>
              <option value="Hubspot">Hubspot</option>
              <option value="Dynamics">Dynamics</option>
              <option value="Other">Other</option>
              <option value="None">None</option>
            </select>
            <label htmlFor="CRM" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className='text-red-600'> *</span></label>
          </div>
          <div className="relative z-0 w-full sm:w-1/3 mb-4 mr-2 group">
            <select id="00NDp00000GG3ig" name="00NDp00000GG3ig" required title="Analytics" onChange={(e) => setSelectedAnalytics(e.target.value)} value={selectedAnalytics} className="custom-inputStyle custom-fontSize11 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer">
              <option value="" disabled>Analytics</option>
              <option value="Pendo">Pendo</option>
              <option value="Gainsight">Gainsight</option>
              <option value="Amplitude">Amplitude</option>
              <option value="Segment">Segment</option>
              <option value="Other">Other</option>
              <option value="None">None</option>
            </select>
            <label htmlFor="Analytics" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className='text-red-600'> *</span></label>
          </div>
          <div className="relative z-0 w-full sm:w-1/3 mb-4 group">
            <select id="00NDp00000GG3il" name="00NDp00000GG3il" required title="Communication" onChange={(e) => setSelectedComm(e.target.value)} value={selectedComm} className="custom-inputStyle custom-fontSize11 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer">
              <option value="" disabled>Communication</option>
              <option value="Slack">Slack</option>
              <option value="Teams">Teams</option>
              <option value="Other">Other</option>
            </select>
            <label style={{ fontSize: "16px" }} htmlFor="Communications" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className='text-red-600'> *</span></label>
          </div>
        </div>
        <div className='relative z-0 w-full mb-4 group flex flex-row'>
          {selectedCRM === "Other" ? <div className="relative z-0 w-1/3 mb-4 mr-2 group">
            <input type="text" id="00NDp00000GG3iq" name="00NDp00000GG3iq" className="custom-inputStyle custom-fontSize11 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="Other CRM" required value={otherCRM} onChange={(e) => setOtherCRM(e.target.value)} />
            {/* <label style={{ fontSize: "16px", fontFamily: "Segoe UI" }} htmlFor="other_CRM" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Other CRM<span className='text-red-600'> *</span></label> */}
          </div> : <div className='relative z-0 w-1/3 mb-3 mr-2 group'></div>}
          {selectedAnalytics === "Other" ? <div className="relative z-0 w-1/3 mb-4 mr-2 group">
            <input type="text" id="00NDp00000GG3iv" name="00NDp00000GG3iv" className="custom-inputStyle custom-fontSize11 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="Other Analytics" required value={otherAnalytics} onChange={(e) => setOtherAnalytics(e.target.value)} />
            {/* <label style={{ fontSize: "16px", fontFamily: "Segoe UI" }} htmlFor="other_Analytics" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Other Analytics<span className='text-red-600'> *</span></label> */}
          </div> : <div className='relative z-0 w-1/3 mb-3 mr-2 group'></div>}
          {selectedComm === "Other" ? <div className="relative z-0 w-1/3 mb-4 group">
            <input type="text" id="00NDp00000GG3j0" name="00NDp00000GG3j0" className="custom-inputStyle custom-fontSize11 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="Other Comm." required value={otherComm} onChange={(e) => setOtherComm(e.target.value)} />
            {/* <label style={{ fontSize: "16px", fontFamily: "Segoe UI" }} htmlFor="other_Comm" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Other Comm.<span className='text-red-600'> *</span></label> */}
          </div> : <div className='relative z-0 w-1/3 mb-3 mr-2 group'></div>}
        </div>

         </>} 
        {/* <div className="flex items-start mb-6">
      <div className="flex items-center h-6">
        <input checked={selectedCheckBox} onChange={(e) => setSelectedCheckBox(e.target.checked)} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
      </div>
      <label style={{fontSize:"16px", fontFamily:"Segoe UI"}} htmlFor="remember" className="ml-1 text-base font-small text-black">I agree to privacy including to Clinch using my contact details to contact me for marketing purposes</label>
    </div> */}
        <div className='flex justify-center'>
          <button type="submit" style={{ fontSize: "16px",padding:"14px 24px "}} className={showOtherFields?"CustomSubmit-btn text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800":"CustomSubmit-btn text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-10"}>BOOK A DEMO</button>
        </div>
        <div>
        <p style={{color: "#686868",padding:"8px 20px"}} className='p-2 mt-2 text-xs font-small text-black'>By submitting this form, you are agreeing to Clinch’s <a className='underline'>Privacy Policy</a> and <a className='underline'>Terms of Service</a></p>
        </div>
      </form>
    </html>

  );
}

export default FormPage;
