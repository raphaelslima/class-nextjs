import styles from './page.module.css'

//https://api.github.com/users/devfraga/repos

interface dataProps {
  id: string,
  name: string,
}

async function getDataDelay(url: string, delay: number){
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url)
  return response.json()
}
  
// async function getData (){
//   const response = await fetch('https://api.github.com/users/devfraga/repos')
//   return response.json()
// }

async function getData (){
  const data = getDataDelay('https://api.github.com/users/devfraga/repos', 3000)
  return data
}


export default async function Home() {

  const data: dataProps[] = await getData()

  console.log(data)

  return (
    <main>
      {
        data.map((item)=>(
          <h1>{item.name}</h1>
        ))
      }
    </main>
  )
}
