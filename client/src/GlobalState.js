import { createContext,  useState, useEffect } from "react";
import axios from 'axios'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token,setToken] = useState('')
    const [isLogged,setIsLogged] = useState(false)
    
    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')

        if(firstLogin)
        {
            const refreshtoken = async () => {
                const res = await axios.get('/user/refresh_token')
                setToken(res.data.accesstoken)
                setTimeout(()=>{refreshtoken()},10 * 60 * 1000)
            }
            refreshtoken()            
        }
    },[])

    useEffect(() => {
        if(token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/info',
                    {
                        headers: {Authorization: token}
                    })
                    setIsLogged(true)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }

    },[token])

    
    const [isSidebar,setIsSidebar] = useState(false)
    const [option,setOption] = useState('')
    const [subject,setSubject] = useState('All')
    const [isAdmin,setIsAdmin] = useState(false)


    const openSidebar = () => {
        setIsSidebar(true)
    }
    const closeSidebar = () => {
        setIsSidebar(false)
    }

    

    const state = {
        isSidebar : [isSidebar,setIsSidebar],
        openSidebar,
        closeSidebar,
        option : [option,setOption],
        subject: [subject,setSubject],
        token: [token],
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin,setIsAdmin],
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}