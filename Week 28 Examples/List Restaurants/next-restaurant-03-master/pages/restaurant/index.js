import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Home() {

  const restaurants = [
    { name : "Olive Garden" },
    { name : "Mod Pizza" },
    { name : "Pizza Hut" }
  ]


  return (
    <>
      <h1>Restaurant List</h1>
      { restaurants.map((restaurant, index) => {
        return <div>
          <Link as={'/restaurant/' + restaurant.name } href='/restaurant/[restaurant]' key={index}>
            <a>{ restaurant.name }</a>
          </Link>
        </div>
        }
      )}
    </>
  )
}
