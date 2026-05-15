import { useState } from "react";
import { FaSearch } from "react-icons/fa"
import type {FormEventHandler, ChangeEventHandler} from "react";

export function SearchBar(){
    const [search, setSearch] = useState("");

    const handleSubmit:
    FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log("buscando")
    };
    const handleChange:
     ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault()
    }
    

  
    return (<>
    
    <form onSubmit={handleSubmit} className="pl-79">
        <FaSearch className="absolute left-85 mt-4 text-gray-400 top-1/2-translate-y-1/2"/>
    <input
    type="text"
    placeholder="Search"
    className="py-2 px-59 pl-12 text-xl flex-1 outline-none bg-white mb-2 rounded-full text-gray-800"
    ></input>
    </form>
    </>)
}