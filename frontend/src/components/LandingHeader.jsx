import Homelogo from "../../public/Finance-home-logo.png"
import { Typewriter } from 'react-simple-typewriter'
function LandingHeader() {
    return (
        <div className="w-[100%] flex flex-col-reverse justify-evenly items-center md:flex-row ">


            <div className="flex flex-col w-[50%] items-center md:scale-125">
                <span className="flex">
                    <h1 className="w-[145px] ">
                        <Typewriter
                            words={['GROW', 'SAVE', 'EARN']}
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={80}
                            deleteSpeed={70}
                            delaySpeed={1000}
                        />
                    </h1>
                    <pre>{""}</pre>
                    <h1>Together</h1>
                </span>
                <h5 className="w-[250px] text-center m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas modi minus ab aliquid! Voluptas impedit jcbejb</h5>
                <button className="bg-blue-600 w-[120px] p-2 pl-3 pr-3 rounded-[18px] text-white m-auto mt-2 transition-all hover:bg-blue-500">Get Started</button>
            </div>



            <img src={Homelogo} alt="" className="w-[50%] bg-white" />


        </div>
    );
}

export default LandingHeader;