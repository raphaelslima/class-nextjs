import styles from './page.module.css'

//https://api.github.com/users/devfraga/repos

import ShowPhoto from '@/components/showPhoto'

interface dataProps {
  id: string,
  name: string,
  owner: {
    avatar_url: string
  }
}

async function getDataDelay(url: string, delay: number){
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url, {next: { revalidate: 60}})
  return response.json()
}
  
// async function getData (){
//   const response = await fetch('https://api.github.com/users/devfraga/repos')
//   return response.json()
// }

async function getData (){
  const data = getDataDelay('https://api.github.com/users/devfraga/repos', 0)
  return data
}


export default async function Home() {

  const data: dataProps[] = await getData()

  return (
    <main>
      {
        data.map((item)=>(
          <div>
            <h1>{item.name}</h1>
            <ShowPhoto photo={item.owner.avatar_url}/>
          </div>
        ))
      }
    </main>
  )
}
