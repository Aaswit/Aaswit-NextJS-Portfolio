import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import Link from 'next/link'

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <Link href="https://www.youtube.com/" className="relative text-[15px] z-[1000] ml-[6px]">Youtube</Link>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <Link href="https://github.com/Aaswit/" className="relative text-[15px] z-[1000] ml-[6px]">Github</Link>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <Link href="https://www.discord.com/" className="relative text-[15px] z-[1000] ml-[6px]">Discord</Link>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxInstagramLogo />
                    <Link href="https://www.instagram.com/aaswit_kanhed/" className="relative text-[15px] z-[1000] ml-[6px]">Instagram</Link>
                    </p>

                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxTwitterLogo />
                        <Link href="https://www.twitter.com/" className="relative text-[15px] z-[1000] ml-[6px]">Twitter</Link>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <Link href="https://www.linkedin.com/in/aaswit-kanhed/" className="relative text-[15px] z-[1000] ml-[6px]">Linkedin</Link>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Coding Platforms</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <Link href="https://www.interviewbit.com/profile/aaswit" className="relative text-[15px] z-[1000] ml-[6px]">Interviewbit</Link>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <Link href="https://www.hackerrank.com/profile/kanhedaaswit" className="relative text-[15px] z-[1000] ml-[6px]">Hackerrank</Link>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                    <Link href="mailto:kanhedaaswit@gmail.com" className="relative text-[15px] z-[1000] ml-[6px]">kanhedaaswit@gmail.com</Link>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Aaswit Portfolio Dev 2023-24 Inc. | All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer