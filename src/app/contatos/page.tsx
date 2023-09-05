import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contatos',
    description: 'Aprendendo Next.js',
    keywords: ['Next.js', 'TypeScript', 'React.js'],
    openGraph:{
      images: ['https://sujeitoprogramador.com/wp-content/uploads/2020/10/demoproj.png']
    },
    robots:{
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      }
    }
  }

const Contatos = () => {
    return(
        <div>
            <h1>Contatos</h1>
        </div>
    )
}

export default Contatos