import { useRef } from "react";
import { Form , Input } from "antd";
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

const Join = (props: any) => {
    const DISABLE_SIGNUP_FLAG = false;
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const onFinish = (values: any) => {
        console.log("Received values:", values);
        // Here, you can handle the form submission, e.g., send a request to your server for authentication.
      };

    return (
        <div className="flex min-h-full flex-col justify-center">
      <div className="w-full">
        {DISABLE_SIGNUP_FLAG ? (
          <div className="rounded-md bg-yellow-50 p-4  mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Attention</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>We are still in closed Alpha for new signups</p>
                </div>
              </div>
            </div>
          </div>

        ) : (
          <div></div>
        )}
        <Form className="w-full"
          method="post"
          action={`/auth/googlesignup`}
        // style={CONTAINER_STYLES}
        >
          <button
                        // disabled
                        className="mt-4 w-full py-2 justify-center border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"></img>
                        <span>Sign Up with Google</span>
                      </button>
        </Form>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <Form
          name="join-form"
          onFinish={onFinish}
        >
                    <input type="hidden" name="action" value="join" />
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


                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="flex text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>

                      <Form.Item
                        className="mt-2"
                        name="confirmPassword"
                        rules={[
                            {
                              required: true,
                              message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match!'));
                              },
                            }),
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
          <Form.Item>
          <button
            type="submit" disabled={DISABLE_SIGNUP_FLAG || (passwordRef.current?.value !== confirmPasswordRef?.current?.value)}
            className="w-full rounded newClr my-4  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Create an account
          </button>
          </Form.Item>
        </Form>
        <div className="relative flex items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                <div className="text-center">
                Already have an account?{" "} 
                <span onClick={() => props.setSwitchTab('Log In')}
                className="cursor-pointer text-blue-900 font-medium hover:underline"
              >
                Sign In
              </span>
                </div>
      </div>
    </div>
    )
}

export default Join;