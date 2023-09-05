
interface idRepoProps{
    params: {
        id: string
    }
}

const IdRepo = ({params}: idRepoProps) => {
    return(
        <div>
            <h1>Id do repo: {params.id}</h1>
        </div>
    )
}

export default IdRepo