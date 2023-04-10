import React, { Component } from "react";
import Cust from '../assets/profilecust/cust.png';
import Edit2 from '../assets/profilecust/edit-3.svg';
import Logout from '../assets/profilecust/log-out.svg';
import PathDown from '../assets/profileseller/small-down.svg';

class ProfileCust extends Component {
    render() {
        return (
            <>
                <section className="bg-[#F9F9F9]">
                    <div className="grid justify-items-center justify-center">
                        <p className="text-3xl font-normal pt-[30px] pb-[20px]">Profile</p>
                        <p className="pb-[60px]">See your notifications for the latest updates</p>
                    </div>
                </section>
                <section className="px-[150px] pt-[50px] text-2xl">
                    <ul className="flex gap-20">
                        <li className="flex cursor-pointer hover:text-black active:underline underline-offset-8">Profile</li>
                        <li className="flex cursor-pointer hover:text-black active:underline underline-offset-8 gap-2 items-center text-slate-400">My Product <img src={PathDown} alt="" className="w-[15px] hover:color-black" /> </li>
                        <li className="flex cursor-pointer hover:text-black active:underline underline-offset-8 gap-2 items-center text-slate-400">Selling Product <img src={PathDown} alt="" className="w-[15px] hover:color-black" /> </li>
                        <li className="flex cursor-pointer hover:text-black active:underline underline-offset-8 gap-2 items-center text-slate-400">My Order <img src={PathDown} alt="" className="w-[15px] fill-black hover:fill-black" /> </li>
                    </ul>
                </section>
                <section className="flex px-[150px] py-[100px] gap-10">
                    <div className="">
                        <img src={Cust} alt="" />
                    </div>
                    <div className="flex flex-wrap w-[100px] h-[50px] gap-2 items-center pt-[15px]">
                        <p className="font-bold text-2xl">Syifa</p>
                        <img src={Edit2} alt="" className="w-[25px]" />
                        <p className="items-start">as Customer</p>
                    </div>
                </section>
                <section className="grid mx-[150px] border-2 mb-[100px]">
                    <div className="flex px-[50px] py-[50px] border-b-2">
                        <form className="grow">
                            <label>Gender</label>
                            <br></br>
                            <input type="text" placeholder="Female" className="" />
                        </form>
                        <div className="grow-0 flex gap-2 font-bold">
                            <button className="">EDIT</button>
                            <img src={Edit2} alt="" className="w-[15px]" />
                        </div>
                    </div>
                    <div className="flex px-[50px] py-[50px] border-b-2">
                        <form className="grow">
                            <label>Your Email</label>
                            <br></br>
                            <input type="text" placeholder="syifa@gamil.com" className="" />
                        </form>
                        <div className="grow-0 flex gap-2 font-bold">
                            <button className="">EDIT</button>
                            <img src={Edit2} alt="" className="w-[15px]" />
                        </div>
                    </div>
                    <div className="flex px-[50px] py-[50px] border-b-2">
                        <form className="grow">
                            <label>Store Name</label>
                            <br></br>
                            <input type="text" placeholder="Apple Store" className="" />
                        </form>
                        <div className="grow-0 flex gap-2 font-bold">
                            <button className="">EDIT</button>
                            <img src={Edit2} alt="" className="w-[15px]" />
                        </div>
                    </div>
                    <div className="flex px-[50px] py-[50px]">
                        <form className="grow">
                            <label>Store Description</label>
                            <br></br>
                            <input type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit." className="" />
                        </form>
                        <div className="grow-0 flex gap-2 font-bold">
                            <button className="">EDIT</button>
                            <img src={Edit2} alt="" className="w-[15px]" />
                        </div>
                    </div>
                </section>
                <section className="px-[150px] pb-[100px]">
                    <button className="flex bg-[#D94141] px-[50px] py-[15px] rounded-md gap-2"><img src={Logout} alt="" /> LOGOUT</button>
                </section>
            </>
        )
    }
}

export default ProfileCust;