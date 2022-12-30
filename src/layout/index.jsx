import { Navbar } from "./Navbar"

const Pages = ({children})=> {
    return(
       <div>
            <Navbar/>
            {children}
        </div> 
    )
    
}
export default Pages;