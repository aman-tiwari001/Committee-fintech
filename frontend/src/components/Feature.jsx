import Homelogo from "../../public/Finance-home-logo.png"
function Features() {
    return (
        <>
            <h1 className="m-5 text-center">Features</h1>
            <div className="grid  w-[100%] place-items-center sm:grid-cols-2 grid-rows-2 gap-4">



                <div className="flex w-[90%] sm:w-[350px] h-fit sm:flex flex-col items-center md:flex-row md:w-[600px]">
                    <img src={Homelogo} alt="" className="w-[70%] object-cover md:w-[50%] md:translate-x-[40px]" />
                    <div className="flex flex-col items-center justify-center md:translate-x-[-20px]">
                        <h2>Heading 1</h2>
                        <h4 className="w-[70%] text-center text-[15px] md:w-[70%] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam saepe perferendis qui atque tempore assumenda</h4>
                    </div>
                </div>
                <div className="flex w-[90%] sm:w-[350px] h-fit sm:flex flex-col items-center md:flex-row md:w-[600px]">
                    <img src={Homelogo} alt="" className="w-[70%] object-cover md:w-[50%] md:translate-x-[40px]" />
                    <div className="flex flex-col items-center justify-center md:translate-x-[-20px]">
                        <h2>Heading 1</h2>
                        <h4 className="w-[70%] text-center text-[15px] md:w-[70%] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam saepe perferendis qui atque tempore assumenda</h4>
                    </div>
                </div>
                <div className="flex w-[90%] sm:w-[350px] h-fit sm:flex flex-col items-center md:flex-row md:w-[600px]">
                    <img src={Homelogo} alt="" className="w-[70%] object-cover md:w-[50%] md:translate-x-[40px]" />
                    <div className="flex flex-col items-center justify-center md:translate-x-[-20px]">
                        <h2>Heading 1</h2>
                        <h4 className="w-[70%] text-center text-[15px] md:w-[70%] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam saepe perferendis qui atque tempore assumenda</h4>
                    </div>
                </div>
                <div className="flex w-[90%] sm:w-[350px] h-fit sm:flex flex-col items-center md:flex-row md:w-[600px]">
                    <img src={Homelogo} alt="" className="w-[70%] object-cover md:w-[50%] md:translate-x-[40px]" />
                    <div className="flex flex-col items-center justify-center md:translate-x-[-20px]">
                        <h2>Heading 1</h2>
                        <h4 className="w-[70%] text-center text-[15px] md:w-[70%] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam saepe perferendis qui atque tempore assumenda</h4>
                    </div>
                </div>

                

                
            </div>


            <div className="flex justify-center">
                <img src="../../public/team.png" alt="" className="md:w-[50%]"/>
            </div>

        </>
    );
}

export default Features;