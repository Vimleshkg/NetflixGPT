import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GptToggler, changeLang } from '../Utils/ConfigSlice';
import GptResponse from './GptResponse';
import openai from '../Utils/OpenAI';
import CloseIcon from '@mui/icons-material/Close';


const GptPage = () => {

    const dispatch=useDispatch();
    const langSelect = useSelector((store)=>store.config.langConfig.langSelect);
    const langChange = useSelector((store)=>store.config.langConfig.langChange);

   // OpenAi api for interacting with ai and get movie suggestions
      /**async function getGPTResponse() {
          const completion = await openai.chat.completions.create({
           messages: [
            { role: "user", content: "Who won the world series in 2020?" },
           ],
           model: "gpt-3.5-turbo-1106",
           response_format: { type: "json_object" },
        });
        console.log(completion.choices[0].message.content);
      }
      **/

  return (
    <div className=' flex justify-end h-full '>
        <div className=' w-[53%] md:w-[30%] h-full bg-gray-300 justify border-black border-l-2 border-y-2 border-red-700'>
            
            <div className='flex justify-between'>

            <button onClick={()=> dispatch(GptToggler())} className=' mt-2 ml-1  md:ml-4  px-1 md:m-2 rounded-md text-sm bg-black text-white'> <CloseIcon/> </button>
            
            <select onChange={(e)=> dispatch(changeLang(e.target.value)) } className='mt-2 mr-1 md:mr-4  md:m-3 rounded-md border-2 text-sm border-black '>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
            </select>

            </div>

           
            
            <GptResponse/>
             
            {/* SearchBar */}

            <div className=' absolute mt-10 ml-2 md:mt-0 z-50 bg-black md:p-[2px] w-[48%] md:w-[27%] md:top-[88%] rounded-md mx-1 md:mx-4 '>
                <form className=' grid grid-cols-12 pl-[1px] md:pl-1 ' onSubmit={(e)=>e.preventDefault()}>
                    <input  className='bg-white text-xs md:text-base rounded-md py-1  px-2 my-1 mx-[2px] border-black col-span-8 md:col-span-9 border' type="text" placeholder={langChange[langSelect].placeholder} />
                    <button className='bg-red-600 mx-[2px] text-xs md:mx-2 md:text-base font-medium rounded-md col-span-4 my-1 overflow-x-auto no-scrollbar md:col-span-3'> {langChange[langSelect].searchBtn} </button>
                </form>
            </div>
       
        </div>
        </div>
  )
}

export default GptPage