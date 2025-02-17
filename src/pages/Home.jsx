import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    /* From Uiverse.io by sahilxkhadka */ 
<div class="mx-auto mt-3 card w-100 bg-white p-5 shadow-md shadow-gray-200 rounded-md">
  <ul class="w-full flex flex-col gap-2">
    <Link to ="/userlist"
      class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
    >
      <button
        class="p-16-semibold flex gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-gray-200 "
      >
        UserList
      </button>
    </Link>
    <Link to ="/friendrequestlist"
      class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
    >
      <button
        class="p-16-semibold flex gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-gray-200 "
      >
        
        FrienRequestList
      </button>
    </Link>
    <Link to="/friendlist"
      class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
    >
      <button
        class="p-16-semibold flex  gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-gray-200"
      >
       
        FriendList
      </button>
    </Link>
    <Link to = "/blocklist"
      class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
    >
      <button
        class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-gray-200 "
      >
       
       BlockList
      </button>
    </Link>
  </ul>
</div>


  )
}

export default Home