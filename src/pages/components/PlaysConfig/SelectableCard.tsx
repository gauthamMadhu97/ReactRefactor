export default function SelectableCard({ label, text, selected, onChange, icon }: { label: string, text: string, selected: boolean, onChange: (value: boolean) => void, icon: React.ReactNode }) {
    const selectedClasses = "grow shrink basis-0 h-40 p-6 bg-slate-50 rounded border border-indigo-500 justify-start items-center gap-8 flex cursor-pointer";
    const unselectedClasses = "grow shrink basis-0 h-40 p-6 bg-white rounded border border-gray-200 justify-start items-center gap-8 flex cursor-pointer";
    return (
        <div
            className={selected ? selectedClasses : unselectedClasses}
            onClick={() => onChange(true)}
        >
            <Dot selected={selected} />
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                <div className="self-stretch text-stone-500 text-base font-medium leading-normal">{label}</div>
                <div className="self-stretch text-stone-500 text-sm font-normal leading-none">{text}</div>
            </div>
            {icon}
        </div>
    )
}

// function RadioOptions({ options, selected, onChange }: { options: { label: string, text: string, icon: React.ReactNode }[], selected: number, onChange: (value: number) => void }) {
//     return (
//         <div className="grid grid-cols-2 gap-4">
//             {options.map((option, i) => (
//                 <RadioOption
//                     key={i}
//                     text={option.text}
//                     selected={i === selected}
//                     onChange={() => onChange(i)}
//                 />
//             ))}
//         </div>
//     )
// }

export function RadioOption({ text, selected, childOption, onClick }: { text: string, selected: boolean, childOption?: React.ReactNode, onClick: () => void }) {
    let child = selected ? childOption : <div className="text-stone-500 text-base font-normal leading-normal">. . .</div>;
    return (
        <div className="self-stretch justify-start items-center gap-6 inline-flex h-[35px] cursor-pointer">
            <div
                className="justify-start items-center gap-2 inline-flex"
                onClick={() => onClick()}
            >
                <Dot selected={selected} />
                <div className="text-stone-500 text-base font-normal leading-normal">{text}</div>
            </div>
            {childOption ? child : null}
        </div>
    )
}

export function SelectOption({ text, selected, onClick }: { text: string, selected: boolean, onClick: () => void }) {
    return (
        <div
            className="justify-start items-center gap-2 inline-flex"
            onClick={() => onClick()}
        >
            <Check selected={selected} />
            <div className="text-stone-500 text-base font-normal leading-normal">{text}</div>
        </div>
    )
}

function Dot({ selected }: { selected: boolean }) {
    if (selected) {
        return (
            <div className="w-6 h-6 relative">
                <div className="w-5 h-5 left-[2px] top-[2px] absolute rounded-[50px] border border-blue-400" />
                <div className="w-3.5 h-3.5 left-[5px] top-[5px] absolute bg-blue-400 rounded-[50px]" />
            </div>
        )
    }
    return (
        <div className="w-6 h-6 relative">
            <div className="w-5 h-5 left-[2px] top-[2px] absolute rounded-[50px] border border-blue-400" />
        </div>
    )
}

function Check({ selected }: { selected: boolean }) {
    if (selected) {
        return (
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7933 1.33301H5.20659C2.77992 1.33301 1.33325 2.77967 1.33325 5.20634V10.7863C1.33325 13.2197 2.77992 14.6663 5.20659 14.6663H10.7866C13.2133 14.6663 14.6599 13.2197 14.6599 10.793V5.20634C14.6666 2.77967 13.2199 1.33301 10.7933 1.33301ZM11.1866 6.46634L7.40659 10.2463C7.31325 10.3397 7.18659 10.393 7.05325 10.393C6.91992 10.393 6.79325 10.3397 6.69992 10.2463L4.81325 8.35967C4.61992 8.16634 4.61992 7.84634 4.81325 7.65301C5.00659 7.45967 5.32659 7.45967 5.51992 7.65301L7.05325 9.18634L10.4799 5.75968C10.6733 5.56634 10.9933 5.56634 11.1866 5.75968C11.3799 5.95301 11.3799 6.26634 11.1866 6.46634Z" fill="#77A5E2" />
            </svg>
        )
    }
    return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99992 14.6663H9.99992C13.3333 14.6663 14.6666 13.333 14.6666 9.99967V5.99967C14.6666 2.66634 13.3333 1.33301 9.99992 1.33301H5.99992C2.66659 1.33301 1.33325 2.66634 1.33325 5.99967V9.99967C1.33325 13.333 2.66659 14.6663 5.99992 14.6663Z" stroke="#77A5E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}