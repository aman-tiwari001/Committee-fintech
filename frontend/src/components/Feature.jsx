import feature1 from "../../public/feature1.png"
import feature2 from "../../public/feature2.png"
import feature3 from "../../public/feature3.png"
import feature4 from "../../public/feature4.png"
function Features() {
    return (
        <>
            <h1 className="m-5 text-center">Features</h1>
            <div className="grid  w-[100%] place-items-center sm:grid-cols-2 grid-rows-2 gap-4">



                <div className="flex w-[90%] sm:w-[350px] h-fit sm:flex flex-col items-center md:flex-row md:w-[600px]">
                    <img src={feature1} alt="" className="w-[70%] object-cover md:w-[50%] md:translate-x-[40px]" />
                    <div className="flex flex-col items-center justify-center md:translate-x-[-20px]">
                        <h2>Instant Loan</h2>
                        <h4 className="w-[70%] text-center text-[15px] md:w-[70%] ">Quickly accessible funds for urgent needs, providing immediate financial solutions with minimal processing requirements.</h4>
                    </div>
                </div>
                <div className="flex w-[90%] sm:w-[350px] h-fit sm:flex flex-col items-center md:flex-row md:w-[600px]">
                    <img src={feature2} alt="" className="w-[70%] object-cover md:w-[50%] md:translate-x-[40px]" />
                    <div className="flex flex-col items-center justify-center md:translate-x-[-20px]">
                        <h2>Committee at click</h2>
                        <h4 className="w-[70%] text-center text-[15px] md:w-[70%] ">
                            Digital platform for group savings: transparent transactions, efficient communication, and streamlined management for participants.</h4>
                    </div>
                </div>
                <div className="flex w-[90%] sm:w-[350px] h-fit sm:flex flex-col items-center md:flex-row md:w-[600px]">
                    <img src={feature3} alt="" className="w-[70%] object-cover md:w-[50%] md:translate-x-[40px]" />
                    <div className="flex flex-col items-center justify-center md:translate-x-[-20px]">
                        <h2>Saving on the go</h2>
                        <h4 className="w-[70%] text-center text-[15px] md:w-[70%] ">Pooling funds for periodic draws, encouraging group savings and investment, fostering financial discipline and community support.
                        </h4>
                    </div>
                </div>
                <div className="flex w-[90%] sm:w-[350px] h-fit sm:flex flex-col items-center md:flex-row md:w-[600px]">
                    <img src={feature4} alt="" className="w-[70%] object-cover md:w-[50%] md:translate-x-[40px]" />
                    <div className="flex flex-col items-center justify-center md:translate-x-[-20px]">
                        <h2>Safety & Security</h2>
                        <h4 className="w-[70%] text-center text-[15px] md:w-[70%] ">
                            Ensuring safety in group savings  through transparent processes, regulatory compliance, and secure transaction mechanisms.</h4>
                    </div>
                </div>




            </div>


            <div className="flex justify-center">
                <img src="../../public/team.png" alt="" className="md:w-[50%]" />
            </div>

        </>
    );
}

export default Features;