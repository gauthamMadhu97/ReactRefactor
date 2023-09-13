

import React, { useState, useEffect } from "react";
import PlayTemplateNavButton from "./PlayTemplateNav";
import PlayTemplateCard from "./PlayTemplateCard";


type PlayList = {
    plays: [];
    playsNavList:[],
    play_status:any
 }

const navComparator = (a: any, b: any) => {
    if (a.navsection === "My Plays") {
        return -1;
    }
    return 0;
}

const PlaysList = (props: any ) => {
  const [filter, setFilter] = useState("all");
  const [playTemplates, setPlayTemplates] = useState([]);

      useEffect(() => {
    setPlayTemplates(props.plays);
    console.log(props.plays)
      }, []);
    
    useEffect(() => {
        setPlayTemplates([]);
        const filtered : any = props && props.plays && props.plays.map((p:any) => ({
      ...p,
      filtered: filterTemplate(p)
        }));
    setPlayTemplates(filtered);
    }, [filter]);


    
    const filterTemplate=(item: any)=>{
        if (filter == "all")
        {
            return true;
        }
        else if( filter=="recommended") {
            return item.recommended == "Yes"
        }
        else {
            return item.navsection ==filter
        }
    }

    const recommendedCount = ():number => {
        var tmp = playTemplates && playTemplates.filter((x: any) => {
           return x.recommended =="Yes"
        });
        return tmp && tmp.length;
    }

    let sortedNavList = props && props.playsNavList && props.playsNavList.sort(navComparator);

    return (<>
                  <nav className="bg-white border-gray-200 ">

                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px w-auto justify-center sm:justify-start">
                    <PlayTemplateNavButton label="All Templates" count={playTemplates && playTemplates.length} active={filter === "all"} onClick={() => setFilter("all")} />
                    <PlayTemplateNavButton label="Recommended" count={recommendedCount()} active={filter === "recommended"}  onClick={() => setFilter("recommended")}/>
                    { sortedNavList && sortedNavList.map((navItem: any) => (
                        <PlayTemplateNavButton label={navItem.navsection} count={navItem.count} onClick={() => setFilter(navItem.navsection)} active={filter === navItem.navsection}/>
                    )) }

                </ul>
            </div>
            </nav>
                    

        <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        
            {playTemplates && playTemplates.map((item : any) => (
          item.filtered === true ? <PlayTemplateCard datas={item}  play_status={props.play_status} title={item.playname} description={item.playdescription} icon={item.playlogo} buttonText={item.playstatus}  enabled ={item.enabled}/> :""

                    )) }

        </div>
    </>
    )

}

export default PlaysList