import { SetStateAction, useState, useEffect, Fragment } from 'react'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import { Form } from 'antd';
import './requestDemo.css';
import { Dialog, Transition } from '@headlessui/react';
import FormPage from './FormPage';



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];



const features = [
  {
    name: 'Prospect sales management.',
    description: '',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Increased Metrics Visibility.',
    description: '',
    icon: LockClosedIcon,
  },
  {
    name: 'Bias htmlFor Action Insights.',
    description: '',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security.',
    description: '',
    icon: FingerPrintIcon,
  },
  {
    name: 'Powerful API.',
    description: '',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups.',
    description: '',
    icon: ServerIcon,
  },
];
const subContent = [
  { text: "Discover New Leads Real Time", logo: '/contactLogo.svg' },
  { text: "Use Deal Coach to customize your Sales Pitch", logo: '/moneyBag.svg' },
  { text: "AI generated Plays help in rapidly engaging a Large Lead Pool", logo: '/leadsOutline.svg' },
  { text: "Automate Plays to Speed up Initial Customer Contact", logo: '/tasksApp.svg' },
  { text: "Prioritize your leads using Clinch Score", logo: '/dealOutline.svg' },
]

export default function RequestDemoIndex(props: any) {

  const [workEmail, setWorkEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');

  const [lastName, setLastName] = useState<string>('');

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


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('oid', '00D5j00000CNY3n');
    formData.append('retURL', 'https://www.youtube.com/');
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', workEmail);
    formData.append('company', companyName);
    formData.append('Analytics', selectedAnalytics)
    formData.append('Communications', selectedComm)
    formData.append('CRM', selectedCRM)
    formData.append('other_CRM', otherCRM)
    formData.append('other_Analytics', otherAnalytics)
    formData.append('other_Comm', otherComm)
    try {
      const response = await fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle fetch error
    }
  };

  useEffect(() => {
    if (props && props.actionData && props.actionData.id) {
      setWorkEmail('');
      setPhoneNumber('');
      setFirstName('');
      setLastName('');
      setCompanyName('');
      setOtherAnalytics('');
      setOtherCRM('');
      setOtherComm('');
      setSelectedCRM("");
      setSelectedAnalytics("");
      setSelectedComm("");
      setSelectedCheckBox(false);
      setSuccess(true);
    }
  }, [props?.actionData?.id])

  console.log(props, "props");
  return (
    <div>
      <div className=" bgLightGreen text-white min-h-screen pt-24 pb-0 px-0">
        <div className="flex justify-center items-center sm:ml-36 sm:mr-36 mr-12 ml-12  gap-6  mt-12 pb-6">
          <div className='flex flex-row items-start justify-around gap-2'>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex flex-col  text-left px-4">
                <div className='flex gap-4 flex-col mb-4'>
                  <div className='text-4xl sm:text-6xl' style={{ color: "#05766F", fontWeight: "600"  }}>Boost Your Sales Team's Potential</div>
                  <div className='text-base sm:text-xl lg:mr-16 ' style={{ color: "#303030" }}>Schedule a demo to discover how Clinch's platform uses AI to Boost your sales!</div>
                </div>

                <div className='ml-5 pt-3'>
                  <ul>
                    {subContent.map(item => (
                      <li className='flex flex-row text-base lg:text-xl gap-2 mt-2'>
                        <img src={item.logo} alt="" className='' />
                        <p className="sm:text-base text-sm" style={{ color:"#303030" }}>{item.text}</p></li>
                    ))}
                  </ul>
                </div>
                <div className='sm:ml-[-10.95rem] ml-[-3.95rem] mt-16 sm:block hidden'>
                  <img  className="bg-treeImg" src={"./treeImg.png"}/>
                  <img  className="bg-bottomImg ml-0 sm:ml-2.5" src={"./bottomBg.svg"}/>
                </div>
              </div>
              <FormPage />
            </div>
          </div>
        </div>
      </div>
      {success &&
        <>
          <Transition appear show={success} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setSuccess(false)}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Request Successfully Submitted
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          A Clinch team member will reach out to you shortly to schedule your demo.
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => setSuccess(false)}
                        >
                          Thank you!
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      }
    </div>
  )
};
