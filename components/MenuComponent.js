import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxCaretDown } from "react-icons/rx";

const TopLayer = ({ data, onItemClick }) => {
    return (
      <div className="gap-2 font-bold flex text-sub flex-col text-sub">
        {data.map((item) => (
          <div className="cursor-pointer" key={item.id}>
            {item.submenu ? (
              <div className="flex flex-col items-center text-center justify-center border-b-1 h-[60px]" onClick={() => onItemClick(item)}>
                <ul className="flex flex-row items-center gap-2">{item.title} <RxCaretDown size={30} className="-rotate-90"/></ul>


              </div>
            ) : (
              <Link href={item.link} onClick={() => onItemClick(item)}>
                <ul className="flex flex-col items-center text-center justify-center border-b-1 h-[60px]">
                {item.title}

              </ul>
              </Link>
            )}
          </div>
        ))}
      </div>
    );
};
  
const MiddleLayer = ({ data, selectedItem, onItemClick }) => {
return (
    <div className="font-bold flex flex-col w-full text-sub gap-2 ">
    {data.map((item) => (
        <div onClick={() => onItemClick(item)} className="flex cursor-pointer flex-col border-b-1" key={item.id}>
        {item.submenu ? (
              <ul className="font-bold h-[60px] mt-[-7px] rounded-[2px] items-center text-center flex justify-center text-wrap border-white">
                {item.title}<RxCaretDown size={30} className="-rotate-90"/>
              </ul>
        ) : (
            <Link  href={item.link} onClick={() => onItemClick(item)}>
                <ul className="font-bold h-[60px] mt-[-7px] rounded-[2px] items-center text-center flex justify-center text-wrap border-white">
                  {item.title}
                </ul>

            </Link>
        )}
        </div>
    ))}
    </div>
);
};
  
const BottomLayer = ({ selectedItem }) => {
return (
    <div className=" gap-2 text-sub">
    {selectedItem.submenu.map((item) => (
        <Link className="flex flex-col border-b-1" href={item.link} key={item.id}>
              <ul className="font-bold h-[60px] rounded-[2px] items-center text-center flex justify-center text-wrap border-white">
                {item.title}
              </ul>
        </Link>
    ))}
    </div>
);
};

    const MenuComponent = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [layerShowing, setLayerShowing] = useState(0);
    const [history, setHistory] = useState([]);
  
    const handleItemClick = (item) => {
      setHistory([...history, selectedItem]);
      setSelectedItem(item);
      setLayerShowing(layerShowing + 1);
    };
  
    const handleBackClick = () => {
      if (layerShowing > 0) {
        setLayerShowing(layerShowing - 1);
        const previousItem = history.pop();
        setSelectedItem(previousItem || null);
        setHistory([...history]);
      }
    };
  
    return (
      <div className='text-center mb-16'>
   
        {layerShowing === 0 && (
          <TopLayer data={data} onItemClick={handleItemClick} />
        )}
        {layerShowing === 1 && selectedItem && (
          <MiddleLayer
            data={selectedItem.submenu}
            selectedItem={selectedItem}
            onItemClick={handleItemClick}
          />
        )}
        {layerShowing === 2 && selectedItem && (
          <BottomLayer selectedItem={selectedItem} />
        )}
        {layerShowing > 0 && (
          <button className='mt-8 gap-2 flex flex-row items-center justify-center h-[80px] w-full mb-96 text-[20px] font-medium' onClick={handleBackClick}>
            <RxCaretDown className="rotate-90" size={30}/>Back
          </button>
        )}
      </div>
    );
};
  
export default MenuComponent;