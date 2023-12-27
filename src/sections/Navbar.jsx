import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <section className=" flex py-[2.5rem] md:py-[1.25rem] px-[1.25rem] md:px-[2.5rem] lg:px-[6.25rem] flex-col items-center justify-center self-stretch  ">
        <div className=" flex items-center justify-between self-stretch ">

          {/* DESKTOP */}
          <div className=" hidden lg:flex py-[0.62rem] pr-[0.62rem] items-center self-stretch ">
              <h5 className=" font-poppins text-white100 text-[1.75rem] font-medium ">Ghokit</h5>
          </div>

          {/* TABLET */}
          <div className=" hidden md:flex ">
            <ul className=" flex font-poppins text-white100 text-[0.88rem] gap-[2.5rem] py-[0.63rem] px-[1.25rem] ">
              <li>Home</li>
              <li>Template</li>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <button className=" hidden md:flex bg-primary100 rounded-[6.19rem] py-[1rem] px-[1.25rem] text-center font-poppins text-[1.125rem] text-black100 ">
            Get Template
          </button>

          {/* MOBILE */}
          <div className=" md:hidden flex py-[0.62rem] pr-[0.62rem] items-center self-stretch ">
              <h5 className=" font-poppins text-white100 text-[1.75rem] font-medium ">Ghokit</h5>
          </div>
          <div className=" md:hidden p-[0.62rem] ">
              <img src={menu} alt="menubar" className=" w-[1.13rem] h-[0.5rem] " />
          </div>
        </div>
    </section>
  )
}

export default Navbar