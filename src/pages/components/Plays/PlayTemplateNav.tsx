
type PlayTemplateNavButtonProps = {
    label: string;
    count?: number;
    active?: boolean;
      className?: string;
    onClick: React.MouseEventHandler<HTMLAnchorElement>
  };
  
  
  export default function PlayTemplateNavButton({
      label,
      count = 0,
      active = false,
      onClick,
      ...rootDOMAttributes
  }:PlayTemplateNavButtonProps) {
    return (
        <>
            <li className="mr-2 w-40 sm:w-auto">
                
                <a href="#" onClick={onClick} className={`${active
                        ? " border-b-2 border-blue-600 text-blue-600 active "
                        : "border-transparent hover:text-gray-600 hover:border-gray-300"
                    } inline-block py-4 sm:p-4 border-b-2 rounded-t-lg text-xs sm:text-md`}>
                              {label}
                    <span className="inline-flex items-center justify-center w-6 h-6 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">{count}</span>
                          </a>
          </li>
            </>
      );
  }
  