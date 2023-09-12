import React, { Fragment, useRef, useState } from "react";
import { Form, Tabs, Input, Checkbox } from "antd";
import "./login.css";
import Join from "./Join";
import { Tab } from '@headlessui/react'

const { TabPane } = Tabs;

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [switchTab, setSwitchTab] = useState<string>("Log In");

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    // Here, you can handle the form submission, e.g., send a request to your server for authentication.
  };

  const onChange = (key: string) => {
    console.log(key);
    setSwitchTab(key); // Update the active tab when a tab is changed
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
      <div className="bg-gray-100 flex min-h-full flex-col justify-center w-full lg:col-span-1">
        <div className="bg-gray-100 mx-auto w-full flex justify-center">
          <div className="bg-white addCls">
            <div className="bg-white p-8 pt-4 rounded-xl w-72 m-auto mb-8">
              <img
                className="h-12 w-auto mt-4"
                src="/Logo_Clinch.png"
                alt="ClinchIt Logo"
              />
            </div>

            {/* Ant Design Tabs */}
            <Tab.Group>
            <Tab.List>
  <Tab as={Fragment}>
    {({ selected }) => (
      <button
        className={`${
          selected
            ? "border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
            : "border-transparent hover:text-gray-600 dark:hover:text-gray-300"
        } inline-block p-2 rounded-t-lg w-1/2`}
        style={{ outline: "none" }} // Add this style to remove the outline
      >
        Log In
      </button>
    )}
  </Tab>
  <Tab as={Fragment}>
    {({ selected }) => (
      <button
        className={`${
          selected
            ? "border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
            : "border-transparent hover:text-gray-600 dark:hover:text-gray-300"
        } inline-block p-2 rounded-t-lg w-1/2`}
        style={{ outline: "none" }} // Add this style to remove the outline
      >
        Sign Up
      </button>
    )}
  </Tab>
</Tab.List>

      <Tab.Panels className={"mt-4"}>
        <Tab.Panel>
        <div>
                  <div className="flex justify-around">
                    <Form
                      className="w-full"
                      action={`/auth/google`}
                      method="post"
                      // style={CONTAINER_STYLES}
                    >
                      <button
                        // disabled
                        className="mt-4 w-full py-2 justify-center border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                      >
                        <img
                          className="w-6 h-6"
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          loading="lazy"
                          alt="google logo"
                        ></img>
                        <span>Sign In with Google</span>
                      </button>
                    </Form>
                  </div>
                  <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">OR</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                  <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <input type="hidden" name="action" value="login" />
                    <div>
                      <label
                        htmlFor="email"
                        className="flex text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <Form.Item
                        name="email"
                        className="mt-2"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your email!",
                          },
                        ]}
                      >
                        <Input className="w-full rounded border border-gray-500 px-2 py-1 text-lg" />
                        {/* {actionData?.errors?.email && (
                          <div className="pt-1 text-red-700" id="email-error">
                            {actionData.errors.email}
                          </div>
                        )} */}
                      </Form.Item>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="flex text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>

                      <Form.Item
                        className="mt-2"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your password!",
                          },
                        ]}
                      >
                        <Input.Password className="w-full rounded border border-gray-500 px-2 py-1 text-lg" />
                        {/* {actionData?.errors?.password && (
                          <div
                            className="pt-1 text-red-700"
                            id="password-error"
                          >
                            {actionData.errors.password}
                          </div>
                        )} */}
                      </Form.Item>
                    </div>

                    {/* <input type="hidden" name="redirectTo" value={redirectTo} /> */}
                    <div className="">
                      {/* <button
                        type="submit"
                        className="w-full rounded newClr my-4  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
                      >
                        Log in
                      </button> */}
                      <Form.Item>
                        <button
                          type="submit"
                          className="w-full rounded newClr my-2  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
                        >
                          Log in
                        </button>
                      </Form.Item>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                      <Form.Item name="remember" valuePropName="checked">
      <Checkbox className="ml-2 text-sm text-gray-900 items-center">Remember me</Checkbox>
    </Form.Item>
                        {/* <label
                          htmlFor="remember"
                          className="ml-2 block text-sm text-gray-900 items-center"
                        >
                          Remember me
                        </label> */}
                      </div>
                      <span
                        className="text-blue-900 font-medium text-sm hover:underline"
                      >
                        Forgot my password
                      </span>
                    </div>
                  </Form>
                  <div className="relative flex py-4 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                </div>
                <div className="text-center">
                  Don't have an account?{" "}
                  <span
                    onClick={(e: any) => setSwitchTab("Sign Up")}
                    className="cursor-pointer text-blue-900 font-medium hover:underline"
                  >
                    Sign Up
                  </span>
                </div>
        </Tab.Panel>
        <Tab.Panel><Join setSwitchTab={setSwitchTab} /></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
            {/* <Tabs activeKey={switchTab} centered onChange={onChange} tabBarStyle={{display:"flex", justifyContent:"space-between"}}>
              <TabPane tab="Log In" key="Log In">
                
              </TabPane>
              <TabPane tab="Sign Up" key="Sign Up">
                
              </TabPane>
            </Tabs> */}
          </div>
        </div>
      </div>
      <div
        className=" newClr hidden md:flex lg:col-span-1 flex flex-col justify-center items-center w-full"
        style={{ maxHeight: "1024px" }}
      >
        <img
          src="/Asset_Login.png"
          alt="Clinchit Screenshot 2"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
