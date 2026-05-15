import { SearchBar } from "./SearchBar"
import { Header } from "./Header"
import { Logo } from "./Logo"
export function HeaderNav(){
    return(
        <>
        <header className="flex items-center justify-between">
       <Logo/>
       <SearchBar/>
        <Header/>
        
        </header>
        </>
    )
}