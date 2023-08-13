import react from 'react'

const Input = () => {
    return (
      <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div className=' mt-[7.125rem] p-0 w-[46.25rem]'>
          <div className='flex justify-between flex-wrap'>
            <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[0.75rem] outline-none'></input>
            <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[0.75rem] hover:border-[#333333] outline-none'></input>
            <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[0.75rem] focus:border-[#2962FF] outline-none'></input>                        
          </div>
        </div>
        <div className=' mt-[7.125rem] p-0 w-[46.25rem]'>
          <div className='flex justify-between flex-wrap'>
            <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#D32F2F] rounded-lg pl-[0.75rem] outline-none'></input>
            <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[0.75rem] hover:border-[#333333] outline-none'></input>
            <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[0.75rem] focus:border-[#D32F2F] outline-none'></input>                        
          </div>
        </div>
        <div className=' mt-[7.125rem] p-0 w-[46.25rem]'>
          <div className='flex justify-between flex-wrap '>
            <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#E0E0E0] rounded-lg pl-[0.75rem] outline-none bg-[#F2F2F2] cursor-not-allowed' readOnly></input>                                   
          </div>
        </div>
        <div className=' mt-[7.125rem] p-0 w-[35.5rem]'>
          <div className='flex justify-between flex-wrap'>
            <div className='flex flex-col'>         
              <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[0.75rem] hover:border-[#333333] outline-none'></input>
              <sub className='mt-[0.25rem]'>Some interesting text</sub>
            </div>
            <div className='flex flex-col'>
              <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#D32F2F] rounded-lg pl-[0.75rem] outline-none'></input>
              <sub className='mt-[0.25rem] text-[#D32F2F]'>Some interesting text</sub>
            </div>
          </div>
        </div>
        <div className=' mt-[7.125rem] p-0 w-[35.5rem]'>
          <div className='flex justify-between'>
              <span className='relative'>
                <span className="material-symbols-outlined text-[#828282] absolute  left-2 top-4 transform translate-x-(-1/2)">call</span>
                <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[2.5rem] outline-none '></input>
              </span>
              <span className='relative'>
                <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[0.75rem] outline-none '></input>
                <span className="material-symbols-outlined text-[#828282] absolute  right-2 top-4 transform translate-x-(-4)">lock</span>
              </span>
          </div>
        </div>
        <div className=' mt-[7.125rem] p-0 w-[35.5rem]'>
          <div className='flex justify-between flex-wrap'>                   
              <input type = "text" placeholder = "Placeholder" value = "Text" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[0.75rem] outline-none'></input>            
          </div>
        </div>
        <div className=' mt-[7.125rem] p-0 w-[35.5rem]'>
          <div className='flex justify-between flex-wrap'>                   
              <input type = "text" placeholder = "Placeholder"  className=' font-["Poppins"] w-[12.5rem] h-[2.5rem] border border-[#828282] rounded-lg pl-[0.75rem]  outline-none'></input>
              <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] h-[3.5rem] border border-[#828282] rounded-lg pl-[0.75rem]  outline-none'></input>            
          </div>
        </div>
        <div className=' mt-[7.125rem] p-0  '>
          <div className='flex justify-between flex-wrap'>                   
              <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-full border border-[#828282] rounded-lg pl-[0.75rem]  outline-none h-[3.5rem]' value="Text"></input>            
          </div>
        </div>
        <div className=' mt-[7.125rem] p-0  '>
          <div className='flex justify-between flex-wrap'>                   
              <input type = "text" placeholder = "Placeholder" className=' font-["Poppins"] w-[12.5rem] border border-[#828282] rounded-lg pl-[0.75rem]  outline-none h-[9.375rem]' ></input>            
          </div>
        </div>
        
      </div>
    )
}

export default Input;
