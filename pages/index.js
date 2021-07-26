import Head from 'next/head'
import Image from 'next/image'
import ProductFeed from '../components/ProductFeed';
import styles from '../styles/Home.module.css'




export default function Home({ products }) {
  return (
    <div>
      
      <ProductFeed products={products}/>

    </div>
  )
}

export async function getServerSideProps(context){
  const products = await fetch('https://fe-assignment.vaimo.net').then(
    (res) => res.json()
  );

  return{
    props:{
      products,
    }
  }
}
