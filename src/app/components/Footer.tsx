export default function Footer() {

    return (

        <div className="w-[1920px] h-[461px] bg-[#043873] pt-[140px] pl-[220px] pr-[220px] pb-[35px] gap-[200px] text-white justify-items-center">

            <div className="w-[1480px] h-[289px] gap-[100px] flex justify-between">

                <div className="w-[295px] hi-[169px] gap-4">
                    <ul>
                        <li> <img src="Logo.png" alt="logo" /></li>
                        <li> <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p></li>
                    </ul>
                </div>
                <div className="w-[295px] hi-[169px] gap-4">
                    <ul>
                        <li><b>Product</b></li>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Customers Stories</li>
                    </ul>
                </div>
                <div className="w-[295px] hi-[169px] gap-4">
                    <ul>
                        <li><b>Resources</b></li>
                        <li>Blogs</li>
                        <li>Guids Tutorials</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="w-[295px] hi-[169px] gap-4">
                    <ul>
                        <li><b>Company</b></li>
                        <li>About us</li>
                        <li>Career</li>
                        <li>Media kit</li>
                    </ul>

                </div>
            </div>
            <h1 className="pb-20">©2021 Whitepace LLC.</h1>
        </div>
    )
};
