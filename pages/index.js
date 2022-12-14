import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

//import colors from '../data/colors.json'

// data/colors.json
const colors = [
  { "name": "Illuminating", "hex": "#F5DF4D" },
  { "name": "Classic Blue", "hex": "#0f4c81" },
  { "name": "Living Coral", "hex": "#FA7268" },
  { "name": "Ultra Violet", "hex": "#5f4b8b" },
  { "name": "Greenery", "hex": "#88b04b" },
  { "name": "Rose Quartz", "hex": "#F7CAC9" },
  { "name": "Marsala", "hex": "#B57170" },
  { "name": "Radiant Orchid", "hex": "#b067a1" }
]


export default function Home() {
  return (
    <div>
      <Head>
        <title>Colors!</title>
        <meta name="description" content="App that displays pretty colors to learn Next!" />
      </Head>
      <Link href={colors[0].name}>
      <h2>{colors[0].name}</h2>
      </Link>
      <Link href={colors[1].name}>
      <h2>{colors[1].name}</h2>
      </Link>
      <Link href={colors[2].name}>
      <h2>{colors[2].name}</h2>
      </Link>
      <Link href={colors[3].name}>
      <h2>{colors[3].name}</h2>
      </Link>
      <Link href={colors[4].name}>
      <h2>{colors[4].name}</h2>
      </Link>
      <Link href={colors[5].name}>
      <h2>{colors[5].name}</h2>
      </Link>
    </div>
  )
}
