function NavBar() {
  return (
    <>
      <div className="w-full h-auto bg-slate-200">
        <div className="flex w-full h-16 bg-blue-600">
          <img
            src="src\assets\KS white Logo.png"
            alt="KS Logo"
            className=" h-8 ml-12 mt-4 text-white"
          />
          <p className=" ml-4 mt-5 text-white font-medium ">Knowledge Stream</p>
          <p className=" flex justify-center items-center ml-6 mt-3 mb-4 p-2 text-white border-slate-200 border-2 cursor-pointer">
            Visit website
          </p>
          <div className="flex">
            <div className="flex flex-col bg-blue-700 justify-center items-center ml-6 mt-1 mb-4 p-6 text-white border-slate-200 border-2 cursor-pointer ">
              <p>Abdullah Awais</p>
              <p>Student</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
