'use client'

import Link from "next/link"
import { useEffect } from 'react'

const Error = ({error, reset}: {error: Error; reset: ()=> void}) => {

    useEffect(()=>{
        console.log(error)
    },[error])

    return (
        <div>
            <h1>Error</h1>
            <Link href='/' >Voltar para a home</Link>
        </div>
    )
}

export default Error