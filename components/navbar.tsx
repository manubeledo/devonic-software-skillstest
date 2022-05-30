import React from 'react'
import navStyles from '../styles/Navbar.module.css'

interface Props {
    name: string;
}

const Navbar = ({name} : Props)  => {

    return(
        <>
        <div className={navStyles.navigationContainer}>
            <div className={navStyles.mainNavigation}>
                <h1>DEMO Streaming</h1>
            </div>
            <div className={navStyles.secondaryNavigation}>
                <div className={navStyles.logIn}>
                    <h3>Log In</h3>
                </div>
                <div className={navStyles.freeTrial}>
                    <h3>Start your free trial</h3>
                </div>
            </div>
        </div>
        <div className={navStyles.secondaryNavbar}>
            <h2 className={navStyles.secondaryNavbarTitle}>Popular {name}</h2>
        </div>
        </>
    )
}

export default Navbar