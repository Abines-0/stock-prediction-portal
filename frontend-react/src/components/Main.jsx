import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>stock prediction portal</h1>
                <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eius aspernatur ducimus vitae. Mollitia itaque porro, nisi earum laborum, explicabo at autem quidem adipisci dolorum velit rerum dignissimos sed molestias.</p>
                <Button text='Explore Now' class='btn-info' url='/dashboard'/>
            </div>
        </div>
    </>
  )
}

export default Main