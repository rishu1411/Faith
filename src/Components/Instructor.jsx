import React from 'react'
import Image from 'next/image'
import photo from '../Images/download.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

export default function Instructor() {
  return (
    <div className='mx-8' id='Instructor'>
      <h4 className='font-bold text-lg my-4 '>About The Instructor</h4>
      <div className='flex flex-col lg:flex-row items-center justify-start space-x-8 space-y-6'>
        <div className='flex '>
          <Image src={ photo} alt='Profile photo' height={150} className='rounded-full'/>
        </div>
        <div className='max-w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sint? Ex culpa quis, perferendis at deserunt placeat? Aut accusantium voluptate hic explicabo, unde dolores vero impedit dolorem rem. Adipisci, sint.
        </div>
        <div className='max-w-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minima quibusdam dicta ipsam optio. Molestias odio iusto quibusdam ullam pariatur totam, delectus amet vero perspiciatis?
        </div>
      </div>

      <div className='flex flex-wrap gap-y-3 justify-center items-center mt-10 gap-x-32'>
        <Link href='https://www.facebook.com/Nityanand.Caran.Das' className='flex gap-x-1 text-sm items-center'>
          <FacebookIcon />
          <p>Facebook</p>
        </Link>
        <div className='flex gap-x-1 text-sm items-center'>
          <TwitterIcon />
          <p>Twitter</p>
        </div>
        <Link href='https://www.instagram.com/nityanand_charan_das/' className='flex gap-x-1 text-sm items-center'>
          <InstagramIcon />
          <p>Instagram</p>
        </Link>
        <Link href='https://www.youtube.com/@NityanandCharanDas' className='flex gap-x-1 text-sm items-center'>
          <YouTubeIcon />
          <p>Youtube</p>
        </Link>
      </div>
    </div>
  )
}
