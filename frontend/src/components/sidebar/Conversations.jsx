import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation"


const Conversations = () => {
  const {loading, conversations} = useGetConversations(); 
  console.log("Conversations", conversations);
  console.log("length of conversation", conversations.length);
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {
      conversations.length>0 && conversations.map((conversation, index)=>(
          <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji = {getRandomEmoji()}
          lastIndex= { index === conversations.length -1}
          />
        ))
      }
      {
        loading? <span className="loading loading-spinner mx-auto"></span>: null
      }
    </div>
  )
}

export default Conversations
