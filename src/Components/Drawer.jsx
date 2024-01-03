'use client'
import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function Drawer_Slide() {
    const [IsOpen, setIsOpen] = useState(false)
    
    return (
        <div className='flex sm:hidden'>
            <button className='mr-4' onClick={()=> setIsOpen(!IsOpen)}><MenuIcon/></button>
      <Drawer anchor='right' open={IsOpen} onClose={()=> setIsOpen(!IsOpen)}>
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <div className='space-y-4'>
                        <h4 className='font-semibold text-base underline underline-offset-2'>Menu</h4>
                        <ul className='space-y-4'>
                            <li className='text-violet-400 border-b-2 py-2'><Link href='#About' onClick={()=>setIsOpen(!IsOpen)}>About</Link></li>
                            <li className='text-violet-400 border-b-2 py-2'><Link href='#Instructor' onClick={()=>setIsOpen(!IsOpen)}>Instructor</Link></li>
                            <li className='text-violet-400 border-b-2 py-2'><Link href='#Reviews' onClick={()=>setIsOpen(!IsOpen)}>Reviews</Link></li>
                        </ul>
                    </div>
        </Box>
            </Drawer>
            </div>
  )
}
