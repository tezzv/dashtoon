import React from 'react'
import logoDash from "./images/dashtoon logo1.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='nav1' style={{ background: 'black', width: '100vw', display: 'flex', justifyContent: 'space-around' }}>

                <div className='leftnav' style={{ display: 'flex', background: 'black', width: '100vw' }}>
                    <Link to='/'>
                        <img src={logoDash} style={{ height: '40px', marginTop: '8px' }} alt='Dashtoonlogo' title='DASHTOON LOGO' />
                    </Link>
                </div>



                <div className='rightnav'>
                    {/* <Link to='/story' className='btn previwbtn'>Preview</Link> */}
                </div>
            </div>
        </>
    )
}

export default Navbar