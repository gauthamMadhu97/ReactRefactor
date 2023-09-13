import ClassNames from "classnames";
declare type CardContainerProps = {
  icon?: any;
  title?: any;
  titleColor?: string;
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  clicked?: boolean;
  enabled?:boolean;
  buttonText?:string;
  style?: any;
  optional?: boolean;
  styleTitle?: any;
};

export default function CardContainer({
  title,
  icon,
  titleColor="inherit",
  optional = false,
  children,
  className = "",
  clicked = false,
  shadow = true,
  enabled,
  buttonText, 
  style = {},
  styleTitle = {}
}: CardContainerProps) {
  return (
    <div style={style}
      className={ClassNames(
        "w-full",
        "rounded-2xl",
        buttonText ==="Coming Soon"?"bg-gray-100":"bg-white",
        clicked?"clrBlue":"border-rad-cards",
        //"p-6",
        "pt-5",
        "pb-6",
        "pl-6",
        "pr-6",
        "flex",
        "flex-col",
        optional?"justify-start":"justify-between",
        // "justify-between",
        // "shadow-xl",
        {
          shadow: shadow,
        },
        className
      )}
    >     
       {enabled == true && <div className="flex justify-end h-6">
       {(
       <button className=" bg-green-100 px-2  py-0.5 rounded text-sm text-emerald-600">Enabled</button>
       )}
     </div>}

      <div className="flex justify-between">
        <div>{title && !(styleTitle) && (
        <h3 className="mb-4 text-lg font-bold text-gray-800" style={{color: titleColor}}>{title}</h3>
      )}
      {styleTitle && <div className={styleTitle}>{title}</div>}
      </div>
      <div>{icon}</div>
      </div>
      {children}
    </div>
  );
}
