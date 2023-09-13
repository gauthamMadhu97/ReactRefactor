// import { useLoaderData } from '@remix-run/react';
// import { LoaderArgs } from '@remix-run/server-runtime';

import { CopyCodeBtn } from './copyCodeBtn';
import './clinch.css';
import './global.css';
import {PrismAsyncLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
let CustomStyles = {
    background: '#F9F9F9',
    padding: "20px",
    fontSize: "12px"
}
let customStylesScript = {
    fontSize: "12px",
    color: "#686868",
    background: '#F9F9F9',
    padding: "20px"
}

// export async function loader({ params, request }: LoaderArgs) {
//     return { success: true }
// }

export default function ClinchJsIndex(props: any) {
    const data: any = {};
    let orgId = data && data.orgId ? data.orgId : '';
    //console.log("---------------", props);
    let isConneted = data && data.trackerjs ? data.trackerjs : false;
    let hostname = "appDomain";
    const ScriptJson = [
        {
            headerText: 'Step 1: Copy the snippet',
            scriptText: `<script>
    !function(){window.clinchit=["init","trackActivity"].reduce((function(e,t){return e[t]=function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];(e=window.clinchit.preLibInitBuffer)[t]||(e[t]=[]),window.clinchit.preLibInitBuffer[t].push(n)},e}),{appKey:"`+ orgId + `",appDomain:"`+hostname+`",preLibInitBuffer:{}});var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="path-to-above-js";var t=document.getElementsByTagName("script")[0];t.parentNode&&t.parentNode.insertBefore(e,t)}();
</script>
          
// Update the appDomain with your website domain name`,
            copyText: true,
            gap: false
        },
        {
            headerText: 'Step 2: Initialize Clinch Script to start tracking',
            scriptText: `<script>
    window.clinchit.init('`+orgId+`', {
        email: '', // Optional: empty or loggen in user email like user@example.com
        visitorId: '' // Optional: empty or any guest id in the application
    });
</script>
        
// Information
// options (object): An object containing additional options.
// email (string): The user's email address (optional).
// visitorId (string): The unique identifier for the visitor (optional). 
// If not provided, an anonymous ID will be generated and stored in browser local storage.`,
            copyText: true,
            gap: true
        },
        {
            headerText: 'Step 3: Verify the installation',
            scriptText: `Verification is carried out where the code was installed and where the end-user is authenticated (unless anonymous users are used). There are two ways to check the status of the installation, and that metadata is set for a particular user:
    . Review Clinch events and data mappings in App Settings.
    . Use the Clinch.validateEnvironment()command in the Browser Developer Console.
          `,
            copyText: false,
            gap: true
        },
    ]

    return (
        <>
            <div className="flex flex-col border p-5 shadow-lg rounded-lg">
                <div className="mb-8 lg:grid-cols-12">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize">
                        <div className='flex flex-row gap-3 items-center'>
                            {isConneted ? <>
                                <img
                                    className="h-5 w-auto cursor-pointer"
                                    src="/Installed-icon.png"
                                    alt="Installed Logo"
                                />
                                Installed
                            </> : <>
                                <img
                                    className="h-5 w-auto cursor-pointer"
                                    src="/clock.png"
                                    alt="Clock Logo"
                                />
                                Pending
                            </>}
                        </div>
                    </h1>
                </div>
                {ScriptJson && ScriptJson.map((item, index) => (
                    <div key={index} className={item.gap ? 'flex flex-col border border-gray-300 rounded-lg mt-10' : 'flex flex-col border border-gray-300 rounded-lg'}>
                        <div className="border-b border-gray-300 flex justify-between items-center py-2 px-5 lg:grid-cols-12">
                            <h2>{item.headerText}</h2>

                            {item.copyText && (
                                <CopyCodeBtn scriptText={item.scriptText} />
                            )}
                        </div>
                        <div className='max-h-80 overflow-auto'>
                            <SyntaxHighlighter style={darcula} language="javascript" customStyle={item.gap ? customStylesScript : CustomStyles} wrapLongLines={true}>
                                {item.scriptText}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}
