import Navbar from '@/components/navbar/Navbar'
import Slider from '@/components/slider/Slider'
import Image from 'next/image'

export default function Home() {


  return (
    <main className='container mx-auto'>
     <Navbar></Navbar>
     <Slider></Slider>
    </main>
  )
}
