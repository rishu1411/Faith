import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import Instructor from '@/Components/Instructor'
import Reviews from '../Components/Reviews'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Instructor />
      <Reviews/>
      
      
    </div>
  )
}

export default page