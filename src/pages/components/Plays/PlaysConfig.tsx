import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TriggerIcon, CalendarIcon, SmallCalendarIcon, ArrowDown, ClinchAiIcon, AiGenerateIcon } from '../PlaysConfig/icons';
import { TreeSelect, ConfigProvider } from "antd";
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { getTreeData } from '../PlaysConfig/filters';
import SelectableCard, { RadioOption } from '../PlaysConfig/SelectableCard';
import GlobalSideNav from "../GlobalSideNav";

const { SHOW_PARENT } = TreeSelect;

// export const meta: V2_MetaFunction = () => [{ title: "ClinchIt.io" }];



/*
[Customer's Name]
[Your Name]
[Your Title]

[Your Name]
[Your Position]
[Company Name]
[Contact Information]
[Upgrade Link]

[Your Name]
[Your Title]
[Company Name]
[Phone Number]
[Email Address]

[Your Name]
[Your Company Name]
[Your Contact Information]

[Your Name]
[Your Title]
[Your Company]
[Contact Information]
[Customer's Name]

[Your Name]
[Your Role]
[Your Contact Information]

[X] (as a percent discount)
*/

const triggers = [
  {
    name: "Premium Features Clicked",
    prompt: "Generate an email to sell a premium package to a customer who has clicked on premium features.",
  },
  {
    name: "User Limit Reached",
    prompt: "Generate an email to sell a premium package to a customer whose user limit has been reached.",
  },
  {
    name: "Storage Limit > 90%",
    prompt: "Generate an email to sell a premium package to a customer whose storage usage has exceeded 90% of the free tier limit.",
  },
  {
    name: "Support Tickets Generated",
    prompt: "Generate an email to sell a premium package to a customer who has generated support tickets.",
  },
  {
    name: "Long Response Times",
    prompt: "Generate an email to sell a premium package to a customer who has experienced long response times.",
  }
]

const sectionLabel = "self-stretch text-zinc-800 text-base font-bold leading-normal";
const textField = "self-stretch p-4 bg-white rounded-lg border border-zinc-300 justify-start items-center gap-6 inline-flex";
const textFieldLarge = "self-stretch h-32 p-4 bg-white rounded-lg border border-zinc-300 justify-start items-start gap-6 inline-flex";
const textFieldInner1 = "grow shrink basis-0 h-6 justify-start items-center gap-2 flex";
const textFieldInner2 = "grow shrink basis-0 text-neutral-400 text-base font-normal leading-normal";
const classesForAiField = [textField, textFieldInner1, textFieldInner2, "h-[50px]"].join(" ");

function TextInput({ label, value, onChange, large }: { label: string, value: string, onChange: (value: string) => void, large?: boolean }) {
  const combinedClasses = [textField, textFieldInner1, textFieldInner2].join(" ");
  return (
    <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
      <div className={sectionLabel}>{label}</div>
      {large ? (
        <textarea
          className={[textFieldLarge, textFieldInner1, textFieldInner2, "min-h-fit"].join(" ")}
          onChange={e => onChange(e.currentTarget.value)}
        >
          {value}
        </textarea>
      ) : (
        <input
          type="text"
          className={combinedClasses}
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
        />
      )}
    </div>
  )
}

function activatePlay(playName: string, playBody: string, playDescription: string, fromAddress: string, navigate: any) {
  console.log('activating play');
  const body = JSON.stringify({ playName, playBody, fromAddress, playDescription });
  console.log('body', body);
  fetch('/api/plays/activate', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      navigate('/plays');
    })
    .catch(err => console.log(err));
}

function savePlay(playName: string, playBody: string, playDescription: string, fromAddress: string, navigate: any) {
  console.log('activating play');
  const body = JSON.stringify({ playName, playBody, fromAddress, playDescription });
  console.log('body', body);
  fetch('/api/plays/save', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      navigate('/plays');
    })
    .catch(err => console.log(err));
}

function AiPrompt({ onChange, triggers, selectedTriggerIndex }: { onChange: (value: string) => void, triggers: any[], selectedTriggerIndex: number }) {

  const [prompt, setPrompt] = React.useState("Generate an email to sell a premium package to a customer whose storage usage has exceeded 90% of the free tier limit.");
  const [response, setResponse] = React.useState("");
  const [generating, setGenerating] = React.useState(false);
  React.useEffect(() => {
    setPrompt(triggers[selectedTriggerIndex].prompt);
  }, [selectedTriggerIndex])

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
      body: prompt + ' Address the email from Uday at Clinch.',
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

  const updateText = (value: string) => {
    setResponse(value);
    onChange(value);
  }

  const enabledClass = "w-40 h-12 px-4 py-2 rounded border border-neutral-400 justify-center items-center gap-2 flex cursor-pointer";
  const disabledClass = "w-40 h-12 px-4 py-2 rounded border border-neutral-400 justify-center items-center gap-2 flex bg-gray-300 cursor-wait";

  return (
    <>
      <div className="w-[1192px] justify-start items-start gap-4 inline-flex">
        <input
          type="text"
          className={classesForAiField}
          value={prompt}
          onChange={e => setPrompt(e.currentTarget.value)}
          disabled={generating}
        />
        <div
          className={generating ? disabledClass : enabledClass}
          onClick={generating ? () => { } : () => onResponse(prompt)}
        >
          <div className="text-center text-stone-500 text-base font-medium leading-normal">{generating ? 'Generating...' : 'Generate'}</div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
              {generating ? null : <AiGenerateIcon />}
            </div>
          </div>
        </div>
      </div>
      <textarea
        id="message"
        rows={8}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
        placeholder="Generate a text body using the integrated AI."
        value={response}
        onChange={e => updateText(e.currentTarget.value)}
        disabled={generating}
      />
    </>
  )
}

function ToField({ onResponse }: { onResponse: (value: string) => void }) {

  const [prompt, setPrompt] = React.useState("Key Contacts");
  const [filterModalOpen, setFilterModalOpen] = React.useState(false);



  /*const onChange = (value: string) => {
    onResponse(value);
  }*/

  const [value, setValue] = useState(['0-0-0', '0-1-0']);
  let size: SizeType = 'large';

  const onChange = (newValue: string[]) => {
    console.log('onChange ', value);
    setValue(newValue);
  };

  const tProps = {
    size: size,
    treeData: getTreeData(),
    value,
    onChange,
    treeCheckable: true,
    showSearch: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
    filterTreeNode: (inputValue: string, treeNode: any) => {
      let match = treeNode.title.toLowerCase().indexOf(inputValue) > -1;
      return match;
    },
  };

  let types = value.filter((v) => v.startsWith('0-0')).length;
  let countries = value.filter((v) => v.startsWith('0-1')).length;
  let personas = value.filter((v) => v.startsWith('0-2')).length;

  let estimatedUserCount = types * countries * personas * 3;

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // controlHeightSM: 40,
            // controlPaddingHorizontalSM: 10,
            // paddingXS: 10,
            // paddingSM: 10,
            // lineHeight: 1.5714285714285714,
            // paddingContentVerticalSM: 6,
          },
        }}
      >
        <TreeSelect {...tProps} />
      </ConfigProvider>

      <div className="px-4 text-stone-500">{`${estimatedUserCount} user${estimatedUserCount === 1 ? '' : 's'} in target group`}</div>
      {/* <div className="w-[1192px] justify-start items-start gap-4 inline-flex">
      <Modal
        title="Filters"
        open={filterModalOpen}
        onOk={updateFilters}
        onCancel={() => setFilterModalOpen(false)}
        footer={[
          <Button>Clean Filters</Button>,
          <Button>Save Filters</Button>
        ]}
      >


        <div className="w-[580px] h-[312px] p-4 flex-col justify-start items-end gap-4 inline-flex">
  <div className="justify-start items-start gap-4 inline-flex">
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-[207px] p-2 bg-white rounded border border-gray-200 justify-between items-center gap-[3px] inline-flex">
        <div className="text-stone-500 text-sm font-medium leading-none">Type</div>
        <div className="justify-start items-center gap-2 flex">
          <div className="w-4 h-4 p-2 bg-blue-100 rounded-[54px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-xs font-medium leading-none">1</div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
            </div>
          </div>
        </div>
      </div>
      <div className="w-[207px] p-2 bg-white rounded border border-gray-200 justify-between items-center gap-[3px] inline-flex">
        <div className="text-stone-500 text-sm font-medium leading-none">Country</div>
        <div className="justify-start items-center gap-2 flex">
          <div className="w-4 h-4 p-2 bg-blue-100 rounded-[54px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-xs font-medium leading-none">2</div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
            </div>
          </div>
        </div>
      </div>
      <div className="w-[207px] p-2 bg-white rounded border border-gray-200 justify-between items-center gap-[3px] inline-flex">
        <div className="text-stone-500 text-sm font-medium leading-none">Industry</div>
        <div className="justify-start items-center gap-2 flex">
          <div className="w-4 h-4 p-2 bg-blue-100 rounded-[54px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-xs font-medium leading-none">2</div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
            </div>
          </div>
        </div>
      </div>
      <div className="w-[207px] p-2 bg-white rounded border border-gray-200 justify-between items-center gap-[3px] inline-flex">
        <div className="text-stone-500 text-sm font-medium leading-none">Active-Passive</div>
        <div className="justify-start items-center gap-2 flex">
          <div className="w-4 h-4 p-2 bg-blue-100 rounded-[54px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-xs font-medium leading-none">A</div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
            </div>
          </div>
        </div>
      </div>
      <div className="w-[207px] p-2 bg-sky-50 rounded border border-indigo-500 justify-between items-center gap-[3px] inline-flex">
        <div className="text-indigo-500 text-sm font-medium leading-none">Title</div>
        <div className="justify-start items-center gap-2 flex">
          <div className="w-4 h-4 p-2 bg-blue-100 rounded-[54px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-xs font-medium leading-none">1</div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[325px] h-[232px] p-3 rounded border border-gray-200 flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch p-2 bg-white rounded border border-gray-200 justify-start items-center gap-3 inline-flex">
        <div className="w-4 h-4 justify-center items-center flex">
          <div className="w-4 h-4 relative">
          </div>
        </div>
        <div className="text-stone-500 text-sm font-normal leading-none">VP of Sales</div>
      </div>
      <div className="self-stretch p-2 bg-white rounded border border-gray-200 justify-start items-center gap-3 inline-flex">
        <div className="w-4 h-4 justify-center items-center flex">
          <div className="w-4 h-4 relative">
          </div>
        </div>
        <div className="text-stone-500 text-sm font-normal leading-none">Sales Manager</div>
      </div>
      <div className="self-stretch p-2 bg-white rounded border border-gray-200 justify-start items-center gap-3 inline-flex">
        <div className="w-4 h-4 justify-center items-center flex">
          <div className="w-4 h-4 relative">
          </div>
        </div>
        <div className="text-stone-500 text-sm font-normal leading-none">Customer Sucess</div>
      </div>
    </div>
  </div>
  <div className="justify-start items-start gap-4 inline-flex">
    <div className="w-[154px] h-8 px-4 py-2 rounded border border-neutral-400 justify-center items-center gap-2 flex">
      <div className="text-center text-neutral-400 text-sm font-medium leading-none">Clean Filters</div>
    </div>
    <div className="w-[154px] h-8 px-4 py-2 bg-sky-50 rounded border border-indigo-500 justify-center items-center gap-2 flex">
      <div className="text-center text-indigo-500 text-sm font-medium leading-none">Save Filters</div>
    </div>
  </div>
</div>
      </Modal>
      <input
        type="text"
        className={combinedClasses}
        value={prompt}
        onChange={e => setPrompt(e.currentTarget.value)}
      />
      <div className="w-40 h-12 px-4 py-2 rounded border border-neutral-400 justify-center items-center gap-2 flex cursor-pointer"
        onClick={() => setFilterModalOpen(true)}
      >
        <div className="text-center text-stone-500 text-base font-medium leading-normal">Filter</div>
        <div className="w-6 h-6 justify-center items-center flex">
          <div className="w-6 h-6 relative">
            <FilterIcon />
          </div>
        </div>
      </div>
    </div> */}
    </>
  )
}

function DateSelect() {
  return (
    <div className="w-[330px] h-14 flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-[330px] p-4 bg-white rounded-lg border border-zinc-300 justify-start items-center gap-6 inline-flex">
        <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
          <div className="grow shrink basis-0 text-zinc-800 text-base font-normal leading-normal">08/28/2023</div>
        </div>
        <div className="w-6 h-6 bg-violet-50 rounded justify-center items-center flex">
          <div className="w-6 h-6 relative">
            <SmallCalendarIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

function TimeSelect() {
  return (
    <div className="h-14 p-4 bg-white rounded-lg border border-zinc-300 justify-start items-center gap-6 flex">
      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
        <div className="grow shrink basis-0 text-zinc-800 text-base font-normal leading-normal">03:45 pm</div>
      </div>
      <div className="w-6 h-6 justify-center items-center flex">
        <div className="w-6 h-6 relative">
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

function FrequencySpecifier() {
  return (
    <>
      <div className="h-14 p-4 bg-white rounded-lg border border-zinc-300 justify-start items-center gap-6 flex">
        <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
          <div className="grow shrink basis-0 text-zinc-800 text-base font-normal leading-normal">2</div>
        </div>
      </div>
      <div className="h-14 p-4 bg-white rounded-lg border border-zinc-300 justify-start items-center gap-6 flex">
        <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
          <div className="grow shrink basis-0 text-zinc-800 text-base font-normal leading-normal">Weeks</div>
        </div>
        <div className="w-6 h-6 justify-center items-center flex">
          <div className="w-6 h-6 relative">
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-6 flex">
        <div className="text-stone-500 text-base font-normal leading-normal">On</div>
        <div className="justify-start items-center gap-2 flex">
          <div className="w-6 h-6 p-2 bg-violet-50 rounded-[40px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-sm font-normal leading-none">S</div>
          </div>
          <div className="w-6 h-6 p-2 bg-blue-400 rounded-[40px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-sm font-normal leading-none">M</div>
          </div>
          <div className="w-6 h-6 p-2 bg-violet-50 rounded-[40px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-sm font-normal leading-none">T</div>
          </div>
          <div className="w-6 h-6 p-2 bg-violet-50 rounded-[40px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-sm font-normal leading-none">W</div>
          </div>
          <div className="w-6 h-6 p-2 bg-blue-400 rounded-[40px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-sm font-normal leading-none">T</div>
          </div>
          <div className="w-6 h-6 p-2 bg-violet-50 rounded-[40px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-sm font-normal leading-none">F</div>
          </div>
          <div className="w-6 h-6 p-2 bg-violet-50 rounded-[40px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-indigo-500 text-sm font-normal leading-none">S</div>
          </div>
        </div>
      </div>
    </>
  )
}

function CalendarConfig() {
  const [runOnce, setRunOnce] = React.useState(false);
  const [endNever, setEndNever] = React.useState(false);
  return (
    <>
      <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch text-zinc-800 text-base font-bold leading-normal">Start</div>
        <div className="self-stretch justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <DateSelect />
          </div>
          <TimeSelect />
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-8 inline-flex">
        <div className="flex-col justify-center items-start gap-4 inline-flex">
          <div className="self-stretch text-zinc-800 text-base font-bold leading-normal">Frequency</div>
          <RadioOption
            text="Run Once"
            selected={runOnce}
            onClick={() => setRunOnce(true)}
          />
          <RadioOption
            text="Run Every"
            selected={!runOnce}
            onClick={() => setRunOnce(false)}
            childOption={<FrequencySpecifier />}
          />
        </div>
      </div>
      {!runOnce ? <div className="w-[1192px] h-44 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch text-zinc-800 text-base font-bold leading-normal">End</div>
        <RadioOption
          text="Never"
          selected={endNever}
          onClick={() => setEndNever(true)}
        />
        <RadioOption
          text="On"
          selected={!endNever}
          onClick={() => setEndNever(false)}
          childOption={<DateSelect />}
        />
      </div> : null}
    </>
  )
}

function TriggerConfig({ triggers, selectedTriggerIndex, setSelectedTriggerIndex }: { triggers: any[], selectedTriggerIndex: number, setSelectedTriggerIndex: (index: number) => void }) {

  return (

    <div className="self-stretch justify-start items-start gap-8 inline-flex">
      <div className="flex-col justify-center items-start gap-4 inline-flex">
        <div className="self-stretch text-zinc-800 text-base font-bold leading-normal">Triggers</div>
        {triggers.map((trigger, index) => (
          <RadioOption
            key={index}
            text={trigger.name}
            selected={selectedTriggerIndex === index}
            onClick={() => setSelectedTriggerIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default function PlaysIndexRoute() {
  /*const data = useLoaderData<typeof loader>();
  const companyname=data.company_name;
    const playList = data.plays;
    const playNavList = data.playNavList;
    const playStatus=data.play_status[0].button_status*/
  const navigate = useNavigate();
  const [playName, setPlayName] = React.useState("Upsell to a target segment");
  const [playDescription, setPlayDescription] = React.useState("Reach out to customers based on high intent upsell signals.");
  const [triggerTypeSelected, setTriggerTypeSelected] = React.useState(true);
  const [selectedTriggerIndex, setSelectedTriggerIndex] = React.useState(0);
  const [fromAddress, setFromAddress] = React.useState("uday@clinchit.io");
  const [playBody, setPlayBody] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  let height = triggerTypeSelected ? 850 : 1000;
  return (
    // @ts-ignore
    <main className="h-full bg-gray-200">
      <GlobalSideNav >
        {/* @ts-ignore */}
        <div className="h-[20px]" />
        <div className="w-[1256px] h-[1632px] flex-col justify-start items-end gap-8 inline-flex">
          <div className={`h-[${height + 21}px] p-8 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-start gap-8 flex`}>{/* h-[753px] */}
            <div className="text-zinc-800 text-2xl font-bold leading-[25px]">Play Configuration</div>
            <div className={`self-stretch h-[${height}px] flex-col justify-start items-end gap-6 flex`}>{/* justify-end to justify-start */}{/* h-[632px] */}
              <TextInput label="Play Name" value={playName} onChange={setPlayName} />
              <TextInput label="Play Description" value={playDescription} onChange={setPlayDescription} />
              {/* <div className="self-stretch h-[88px] flex-col justify-end items-end gap-2 flex">
                <div className="self-stretch text-zinc-800 text-base font-bold leading-normal">Select An Event</div>
                <div className="h-14 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch p-4 bg-white rounded-lg border border-zinc-300 justify-start items-center gap-6 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                      <div className="grow shrink basis-0 text-neutral-400 text-base font-normal leading-normal">Select</div>
                    </div>
                    <div className="w-6 h-6 justify-center items-center flex">
                      <div className="w-6 h-6 relative">
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="self-stretch h-56 flex-col justify-center items-start gap-6 flex">
                <div className="self-stretch justify-between items-center gap-6 inline-flex">
                  <div className="text-zinc-800 text-base font-bold leading-normal">This Play Will Run Based On:</div>
                </div>
                <div className="w-[1192px] justify-start items-center gap-6 inline-flex">
                  <SelectableCard
                    label="Trigger Event"
                    text="The play will run when a specific event occurs, such as your email is opened or a company receives new funding!"
                    selected={triggerTypeSelected}
                    onChange={(selected: any) => setTriggerTypeSelected(selected)}
                    icon={<TriggerIcon />}
                  />
                  <SelectableCard
                    label="Scheduled Event"
                    text="The play will run once or on a specific schedule you set, such as weekly on tuesdays and thurdays"
                    selected={!triggerTypeSelected}
                    onChange={(selected: any) => setTriggerTypeSelected(!selected)}
                    icon={<CalendarIcon />}
                  />
                </div>
              </div>
              {triggerTypeSelected ? <TriggerConfig triggers={triggers} selectedTriggerIndex={selectedTriggerIndex} setSelectedTriggerIndex={setSelectedTriggerIndex} /> : <CalendarConfig />}
            </div>
          </div>
          <div className="h-[767px] p-8 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
              <div className="w-[750px] text-zinc-800 text-base font-bold leading-normal">To:</div>
              <ToField onResponse={(value) => console.log(value)} />
            </div>
            <TextInput label="From:" value={fromAddress} onChange={setFromAddress} />
            <div className="self-stretch h-px bg-zinc-300" />
            <div className="self-stretch justify-start items-end gap-2 inline-flex">
              <div className="w-6 h-6 bg-gradient-to-b from-emerald-400 to-teal-600 rounded flex-col justify-center items-center gap-2 inline-flex"><ClinchAiIcon /></div>
              <div className="text-zinc-800 text-base font-bold leading-normal">Clinch AI</div>
            </div>
            <AiPrompt onChange={setPlayBody} triggers={triggers} selectedTriggerIndex={selectedTriggerIndex} />
            {/* <textarea
              id="message"
              rows={8}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
              placeholder="Generate a text body using the integrated AI."
              value={playBody}
              onChange={e => setPlayBody(e.currentTarget.value)}
            /> */}
            {/* <div className="self-stretch h-[286px] p-4 bg-white rounded-lg border border-zinc-300 flex-col justify-start items-end gap-2 flex">
              <div className="opacity-0 justify-end items-start gap-2 inline-flex">
                <div className="w-6 h-[116px] justify-end items-start gap-2 flex">
                  <div className="w-2 h-[100px] flex-col justify-center items-center inline-flex">
                    <div className="w-2 h-[100px] bg-zinc-300 rounded-[50px]" />                      
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="justify-start items-start gap-8 inline-flex">
            <div className={"w-40 h-12 px-4 py-2 rounded border border-neutral-400 justify-center items-center gap-2 flex " + (submitting ? "bg-gray-300 cursor-wait" : "cursor-pointer")}
              onClick={() => {
                if (submitting) return;
                savePlay(playName, playBody, playDescription, fromAddress, navigate);
                setSubmitting(true);
              }}
            >
              <div className="text-center text-stone-500 text-base font-medium leading-normal">Save</div>
            </div>
            <div className={"w-40 h-12 px-4 py-2 mr-8 rounded border border-indigo-500 justify-center items-center gap-2 flex " + (submitting ? "bg-gray-300 cursor-wait" : "bg-sky-50 cursor-pointer")}
              onClick={() => {
                if (submitting) return;
                activatePlay(playName, playBody, playDescription, fromAddress, navigate);
                setSubmitting(true);
              }}
            >
              <div className="text-center text-blue-800 text-base font-medium leading-normal">Save and activate</div>
            </div>
          </div>
        </div>
        <div className="h-[300px]" />
      </GlobalSideNav>
    </main>
  )
}
