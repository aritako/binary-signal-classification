"use client"
import { useState } from "react";
type FormData = {
  signal1: string;
  signal2: string;
  signal3: string;
  signal4: string;
  signal5: string;
  signal6: string;
  signal7: string;
  signal8: string;
  signal9: string;
  signal10: string;
};
export default function Form(){  
  const [formData, setFormData] = useState<FormData>({
    signal1: "",
    signal2: "",
    signal3: "",
    signal4: "",
    signal5: "",
    signal6: "",
    signal7: "",
    signal8: "",
    signal9: "",
    signal10: "",
  })
  console.log(formData)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target as HTMLInputElement;
    setFormData((prevFormData) => ({...prevFormData, [name]: value}))
  }
  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return(
    <div className="flex flex-col items-center">
      <form onSubmit = {handleSubmit} className="flex flex-col items-center gap-2">
          { [...Array(10)].map((_, i) => (
            <div key = {i+1} className = "grid grid-cols-2">
              <label className="text-xl">Signal {i + 1}</label>
              <input className="rounded-lg text-slate-900 text-sm pl-2" type="text" placeholder="Enter Signal" 
                name = {`signal${i + 1}`} onChange = {handleChange} value = {formData[`signal${i + 1}` as keyof FormData]}
              />
            </div>
          ))  
          }
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Submit</button>
      </form>
    </div>
  )
}