import React from 'react'
import { GoSearch } from "react-icons/go";
import ChatItems from '../components/ChatItems.jsx';

const Chat = () => {
  return (
        <div className='m-auto h-[580px] shadow-2xl my-10 max-w-7xl flex'>
          <div className='h-full overflow-y-auto w-1/3 p-6  shadow-2xl'>
            <h1 className='font-semibold text-xl text-primary'>Chat</h1>
            <div className='flex items-center p-2 border rounded-xl mt-2 mb-4'>
              <GoSearch />
              <input type ="text"
              placeholder='Search'
              className='px-2 outline-none'/>
            </div>
           
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>
              <ChatItems></ChatItems>


            

          </div>
         {/* Chat Area */}
      <div className="w-2/3 flex flex-col ">
        {/* Chat Header */}
        <div className="bg-gray-200 text-white p-4 flex items-center ">
          <img
            src="user1.png"
            alt="User"
            className="w-10 h-10 rounded-full "
          />
          <h2 className="ml-3 text-lg text-black font-semibold">Pawlo Mora</h2>
        </div>

        {/* Messages Section */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
          <div className="flex justify-start">
            <div className="bg-gray-200 p-2 rounded-3xl max-w-xs">Hey, how are you?</div>
          </div>
          <div className="flex justify-end">
            <div className="bg-brand text-white p-2 rounded-3xl max-w-xs">I'm good! You?</div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-300 p-2 rounded-3xl max-w-xs">Doing well. Any plans for today?</div>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white p-3 border-t flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-3xl outline-none"
          />
          <button className="ml-3 bg-brand text-white px-4 py-2 rounded-3xl">
            Send
          </button>
        </div>
      </div>

        </div>
      );
    }
    
  


export default Chat