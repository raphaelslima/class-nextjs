import Link from "next/link"

const NotFound = () =>{
    return(
        <div>
            <h2>Página não encontrda</h2>
            <Link href='/'>Voltar a home</Link>
        </div>
    )
}

export default NotFound