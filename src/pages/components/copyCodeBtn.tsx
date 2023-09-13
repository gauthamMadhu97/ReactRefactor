import React ,{useState} from 'react'

interface TooltipProps {
    message: string;
    children: any;
    showToolTip: boolean;
}
export const Tooltip: React.FC<TooltipProps> = ({ message, showToolTip, children }) => {
    return <div className="relative inline-block">{children}
        {showToolTip && (<span className='absolute flex items-center justify-center w-16  px-6 py-1 rounded h-23 z-1 top-[-40px] left-1/3 transition-opacity duration-300 text-white bg-gray-800 text-center transform -translate-x-1/2 py-1 px-1 font-semibold text-xs'>{message}</span>)}
    </div>;
};

export const CopyCodeBtn = (props: any) => {
    const [isCopied, setIsCopied] = useState(false)
    const { scriptText } = props
    const handleCopy = (script: string) => {

        navigator.clipboard.writeText(script).then(() => {
            setIsCopied(true)
        })
        setTimeout(() => {
            setIsCopied(false)
        }, 3000)

    }
    return (
        <>
            <div onClick={() => handleCopy(scriptText)}>
                <Tooltip message="Copied" showToolTip={isCopied}>
                    <img
                        className="h-8 w-auto cursor-pointer"
                        src="/copy-code.png"
                        alt="CopyCode Logo"
                    />
                </Tooltip>
            </div>
        </>
    )
}

