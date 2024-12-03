import React from "react";
const Navbar=() => {
    return(
        <div>
            <div className="w-[1920px] h-[92px] bg-[#043873] justify-between pr-[120px] pl-[120px] pt-[60px] pb-[60px] flex items-center ">
              
                <div className="w-[191px] h-[34] justify-between">
                    <img src="logo.png" alt="logo" />
                </div>
                <div className="flex w-[737.5px] h-[60] gap-[60px] items-center">
                     <ul className="flex w-[549px] h-[23px] gap-[32px] text-white ">
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Resourses</li>
                    <li>Pricing</li>
                    </ul>
                    <button className="w-[126px] h-[60px] rounded-lg pr-10 pb-4 pt-4 pl-10 bg-[#FFE492] gap-[10px] ">Login</button>
                    </div>
            
            </div>
        </div>
    )
}

export default Navbar