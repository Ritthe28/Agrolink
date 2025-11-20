import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const List_sell = () => {
const [images , setimages ]= useState({
  1:false,
  2:false,
  3:false,
  4:false,
})
const [name , setname ]= useState();

const [price , setprice]= useState();

const [type , settype ]= useState();

const [address , setadress]= useState({
  "Village" :"",
  "city" :"",
  "dist":""
})

const submithandler = ()=>{

}


  return (
    <div className=' w-full flex  items-center justify-center'>
      <form action="" onSubmit={submithandler} className='flex flex-col gap-3 p-2 sm:p-4 backdrop-blur-2xl bg-green-400/20 w-fit rounded-2xl'>
<div className=' flex flex-col sm:flex-row gap-1 sm:gap-1.5 '>
<label htmlFor="name" className='w-40'>
  Enter Product Name :
</label>
  <input className='rounded border'  type="text" onChange={(e)=>{
    setname(e.target.value)
  }}  id='name' value={name}/>

</div>
<div className='flex flex-col sm:flex-row gap-1 sm:gap-1.5 '>
<label htmlFor="price" className='w-40'>
  Enter Product Price  
</label>
  <input type="number" id='price' className='border rounded' onChange={(e)=>setprice(e.target.value)}/>
</div>
<div className='flex flex-col sm:flex-row gap-1 sm:gap-1.5 '>
<label htmlFor="select"className='w-40'>
 Select Category of Product           :
</label>
  <select name="" id="select" className='rounded border w-20 sm:w-30 text-center sm:text-xl hover:cursor-pointer' onChange={(e)=>{
    settype(e.target.value)
  }}>
    <option className='text-xs sm:text-lg bg-slate-300' value="">select</option>
    <option value="Organic" className='text-xs sm:text-lg'>Organic </option>
    <option value="In-Organic" className='bg-slate-400 text-xs sm:text-lg' >In Organic </option>
  </select>
</div>

<div>
  {/* 
  Image Area 
   */}
{
  Object.keys(images).map((element, index)=>{
    return(
      <div className='flex flex-col sm:flex-row gap-2.5'>
        {images[element]? <img className='w-20 rounded-2xl' src={URL.createObjectURL(images[element])}/> :<>
        <label htmlFor={element}  >
          <img className='w-8 sm:w-20 mt-2 rounded-2xl hover:cursor-pointer' src={assets.upload_area} alt="" />
           </label>
        <input  type='file' id={element} className='w-10' hidden onChange={(e)=>{
          setimages({...images,[element]:e.target.files[0]})
          
          
        }}/></>}
              </div>
    )

  })
}


</div>
<div className='w-full flex justify-center align-middle'>


<button className='bg-blue-800 rounded p-2 w-[100px] sm:w-[150px]  hover:cursor-pointer'>
  Submit
</button>
</div>
      </form>


    
    </div>
  )
}

export default List_sell
