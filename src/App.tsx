
function App() {
  return (
    <>
    <div className="flex justify-center flex-col m-auto mt-14  w-72 h-72 rounded-xl bg-zinc-500">
    <label className="ml-3 mt-4">Email</label>
    <input type="text" placeholder="Enter Email" className=" bg-black ml-2 mt-1  w-64 p-1 rounded-md text-white " />
    <label className="ml-3 mt-4">Password</label>
    <input type="password" placeholder="Enter Email" className=" bg-black  ml-2 mt-2 w-64 p-1 rounded-md text-white" />
    <button className="bg-black  mt-6 m-auto w-32 p-1 rounded-md text-white">Login</button>
    </div>
    </>
  )
}

export default App

