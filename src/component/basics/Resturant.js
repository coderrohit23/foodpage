import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from './navbar';
const uniqueList= [...new Set(Menu.map((curElem)=> {
  return curElem.category;
})
),
"ALL",
]

const Resturant = () => {
const[MenuData,setmenuData]=useState(Menu)
const [MenuList ,setmenuList]=useState(uniqueList)
 const filterItem =(category) =>{
  
  if(category==="ALL")
 {
    setmenuData(Menu);
    return;
  }
  const updatedlist=Menu.filter((curElem)=>{
    return curElem.category === category;
  });
    setmenuData(updatedlist);
 };
  return (
    <>
      <Navbar filterItem={filterItem} MenuList={MenuList}/>
     <MenuCard menuData={MenuData}/>
    </>
  )
}

export default Resturant;
