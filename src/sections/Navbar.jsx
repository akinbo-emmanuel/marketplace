import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <section className=" flex py-[2.5rem] px-[1.25rem] flex-col items-center justify-center self-stretch  ">
        <div className=" flex items-center self-stretch ">
            <div className=" flex py-[0.62rem] pr-[0.62rem] items-center self-stretch w-[19.5rem] ">
                <h5 className=" font-poppins text-white100 text-[1.75rem] font-medium ">Ghokit</h5>
            </div>
            <div className=" p-[0.62rem] ">
                <img src={menu} alt="menubar" className=" w-[1.13rem] h-[0.5rem] " />
            </div>
        </div>
    </section>
  )
}

export default Navbar