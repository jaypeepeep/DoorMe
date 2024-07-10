// MessagesSection.js
import React, { useState } from 'react';

const MessageSection = () => {
  const [activeChat, setActiveChat] = useState(null);
  const messages = [
    { id: 1, name: "Nichole Alpapara", message: "Pwede niyo po ma-visit yung room set lang po kayo ng schedule sa amin", time: "Today | 04:45 PM", avatar: "https://placehold.co/50x50" },
    { id: 2, name: "John Mark", message: "Is the apartment still available?", time: "Today | 05:30 PM", avatar: "https://placehold.co/50x50" },
    { id: 3, name: "Adrian Rafael", message: "Hello po! gusto ko lang po itanong kung kelan po pwede makita apartment", time: "Today | 05:30 PM", avatar: "https://placehold.co/50x50" },
    { id: 4, name: "Kurt Denver", message: "Hi ate open for lease pa rin po ba yung nakapost na apartment niyo dito??", time: "Today | 05:30 PM", avatar: "https://placehold.co/50x50" },
    { id: 5, name: "John Patrick", message: "Is the apartment still available?", time: "Today | 05:30 PM", avatar: "https://placehold.co/50x50" },
  ];

  const handleChatClick = (id) => {
    setActiveChat(id);
  };

  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r border-gray-300 p-4">
        <input 
          type="text" 
          placeholder="Search or start a new chat" 
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        {messages.map((chat) => (
          <div 
            key={chat.id} 
            className={`flex items-center p-2 mb-2 cursor-pointer ${activeChat === chat.id ? "bg-blue-100" : "hover:bg-gray-100"}`}
            onClick={() => handleChatClick(chat.id)}
          >
            <img 
              src={chat.avatar} 
              alt={chat.name} 
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-semibold">{chat.name}</span>
                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-600">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/3 p-4">
        {activeChat ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{messages.find(chat => chat.id === activeChat).name}</h2>
            <div className="flex flex-col space-y-4">
              {/* Add chat messages here */}
              <div className="flex justify-start">
                <div className="p-2 bg-gray-200 rounded-lg">
                  Hi po! Ask ko lang kung meron po bang heater yung shower niyo po
                </div>
              </div>
              <div className="flex justify-end">
                <div className="p-2 bg-blue-500 text-white rounded-lg">
                  Hello! Yes po meron po :)
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <input 
                type="text" 
                placeholder="Type your message here..." 
                className="flex-1 p-2 border border-gray-300 rounded-l-lg"
              />
              <button className="p-2 bg-blue-500 text-white rounded-r-lg">
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="text-gray-500">Select a chat to view messages</div>
        )}
      </div>
    </div>
  );
};

export default MessageSection;
