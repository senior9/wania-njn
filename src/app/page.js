import Navbar from '@/components/navbar/Navbar'
import Slider from '@/components/slider/Slider'
import Image from 'next/image';
import styles from "./styles.module.css"
import Card from '@/components/card/Card';

export default function Home() {


  return (
    <main className=''>

     <Navbar></Navbar>
     <Slider></Slider>
     <Card></Card>
     
    </main>
  )
}
