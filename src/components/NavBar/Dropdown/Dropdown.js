import React,{useState} from 'react';
import { MenuItems } from './MenuItems';
import {DropdownMenuClicked,DropdownLink,DropdownList,DropdownMenu} from './Dropdown.styles';

const Dropdown = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
    return (
        <>
        {click ? <DropdownMenuClicked></DropdownMenuClicked> : <DropdownMenu onClick={handleClick}>
            {MenuItems.map((item,index)=> {
                return (
                    <DropdownList key={index}>
                        <DropdownLink to={item.path} onClick={()=>setClick(false)}>
                        {item.title}
                        </DropdownLink>
                    </DropdownList>
                )
            })}
            </DropdownMenu>}
         </>
    )
}

export default Dropdown
