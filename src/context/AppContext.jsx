import { useState, createContext } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();
 
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    async function fetchData(page){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data?.page);
            setPosts(data?.posts);
            setTotalPages(data?.totalPages);
        }
        catch(e){
            alert(e);
        }
        setLoading(false);
        
    }

    function pageChangeHandler(page){
        setPage(page);
        fetchData(page);
    }

    const value = {
        posts,setPosts,
        loading,setLoading,
        page,setPage,
        totalPages,setTotalPages,
        fetchData,
        pageChangeHandler
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}