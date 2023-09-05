'use client'

import Image from "next/image"
import {useState} from 'react'

interface ShowPhotoProps{
    photo: string
}

function ShowPhoto({ photo}: ShowPhotoProps)  {

    const [showAvatarPhoto, setShowAvatarPhoto] = useState(false)
    const [msgBtn, setMsgBtn] = useState('Mostrar Avatar')

    const handleShowAvatar = () => {
        showAvatarPhoto ? setMsgBtn('Mostrar Avatar') : setMsgBtn('Ocultar avatar')
        setShowAvatarPhoto(!showAvatarPhoto)
    }

    return(
        <div>
            <button onClick={()=> handleShowAvatar()}>{msgBtn}</button>
            <div>
                {
                    showAvatarPhoto && (
                        <Image src={photo} width={100} height={100} alt="Avatar foto"/>
                    )
                }
            </div>
        </div>
    )
}

export default ShowPhoto