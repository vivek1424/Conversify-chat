import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = () => {
        if (!search) return;
        if (search.length < 3) {
            toast.error("search input should be greater than 3 letters")
        }

        const conversation = conversations.find((convrstn) => convrstn.fullName.toLowerCase().includes(search.toLowerCase()))
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch(""); //so that it stops search 
        } else {
            toast.error("No such user found!")
        }
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2">
            <input type="text" placeholder="Search.." className='input input-bordered rounded-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <FaSearch />
            </button>
        </form>
    )
}

export default SearchInput;



// starter code snippet
// import { FaSearch } from "react-icons/fa";
// const SearchInput = () => {
//     return (
//         <form className="flex items-center gap-2">
//             <input type="text" placeholder="Search.." className='input input-bordered rounded-full' />
//             <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//             <FaSearch />
//             </button>
//         </form>
//     )
// }

// export default SearchInput;
