import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
  import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';

  

function Search() {
  return (
    <div className='p-3 bg-white rounded-md md:p-5 md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center  w-[60%]'>
        <Select>
  <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Тип" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
<Separator orientation="vertical" className="hidden md:block"/>
<Select>
  <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Марка" />
  </SelectTrigger>
  <SelectContent>
    {Data.CarMakes.map((maker, index) => (
    <SelectItem key={maker.id} value={maker.name}>{maker.name}</SelectItem>
    ))}
  </SelectContent>
</Select>
<Separator orientation="vertical" className="hidden md:block"/>
<Select>
  <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Ціна" />
  </SelectTrigger>
  <SelectContent>
  {Data.Pricing.map((price, index) => (
    <SelectItem key={price.id} value={price.amount}>{price.amount}</SelectItem>
    ))}
  </SelectContent>
</Select>
<div>
<CiSearch className='text-[50px] bg-primary text-white hover:scale-105 transition-all cursor-pointer rounded-full p-3'/>
</div>
    </div>
  )
}

export default Search