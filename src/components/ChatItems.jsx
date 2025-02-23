import React from "react";

const ChatItems = () => {
return (
    // <div className="flex items-center justify-between gap-5  shadow-sm bg-red-500 my-2">
    // <div className="w-[50px] h-[50px] my-2 ">
    //     <img src="/user3.png" alt="user" className="w-full rounded-full" />
    // </div>
    // <h2 className="text-lg font-medium">Pawlo Mora </h2>
    // <p className="ml-auto text-2xl cursor-pointer">abc@gmail.com</p>
    // </div>

    <div className="flex items-center justify-between  my-2 rounded-lg">
    <div className="flex items-center gap-4">
        <img src="user1.png" alt="user" className="w-12 h-12 rounded-full" />
        <h2 className="text-lg font-medium">Pawlo Mora</h2>
    </div>
    <p className="ml-auto text-sm ">abc@gmail.com</p>
</div>
);
};

export default ChatItems;
