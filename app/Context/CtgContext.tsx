"use client"

import { ReactNode, createContext,useContext,useState } from "react"

export const CtgContext = createContext({
    ctg:"",
    setCtg:()=>{}
})

type Props ={
    children?: ReactNode
}

export const CtgProvider = ({children}:Props)=>{
    const [ctg,setCtg]:any = useState("")

    

    return(
        <CtgContext.Provider value={{ctg,setCtg}}>
            {children}
        </CtgContext.Provider>
    )

}
export const useCtg = ()=>{
    return useContext(CtgContext)
    }