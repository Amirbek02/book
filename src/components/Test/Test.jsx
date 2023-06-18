import React from 'react'
import { Link} from 'react-router-dom'

import './tests.scss'

function Test() {
  return (
    <div className='test'>
      <Link className='test__item' to='/test1'>Бірінші тесті тапсыру</Link>
      <Link className='test__item' to='/test2'>Екінші тесті тапсыру</Link>
      <Link className='test__item' to='/test3'>Үшінші тесті тапсыру</Link>
    </div>
    
  )
}

export default Test