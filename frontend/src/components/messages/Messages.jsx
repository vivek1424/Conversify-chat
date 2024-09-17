import React from 'react'
import Message from './Message'
import { useEffect, useRef } from "react";
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';




const Messages = () => {
	const { messages, loading } = useGetMessages();
	console.log("messages", messages);
	useListenMessages()
	const lastMessageRef= useRef()
	
	useEffect( ()=> { 
		setTimeout(()=> {
			lastMessageRef.current?.scrollIntoView( { behavior: "smooth" });
		}, 100)
		
	}, [messages]); 

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{ loading && [...Array(3)].map((_, index)=> <MessageSkeleton key={index} /> )}
			{ !loading && messages.length ===0 &&( 
				<p className='text-center'>Send a message to start the conversation</p>
			)}
			{ !loading && messages.length> 0 && (
				messages.map((message)=> ( 
					<div key={message._id}
						ref={lastMessageRef}
					>
						<Message message={message}  />
					</div>
					
				))
			) }
		</div>
	);
};
export default Messages;




//STARTING CODE SNIPPET 
// import React from 'react'
// import Message from './Message'
// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
      
//     </div>
//   )
// }

// export default Messages
