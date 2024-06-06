export default function Form(){
  return(
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-center gap-1">
          { [...Array(10)].map((_, i) => (
            <div key = {i} className = "grid grid-cols-2">
              <label key = {i} className="text-xl">Signal {i + 1}</label>
              <input key = {i} className="border-2 border-black rounded-lg text-slate-900" type="text" placeholder="Enter Signal" />
            </div>
          ))  
          }
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  )
}