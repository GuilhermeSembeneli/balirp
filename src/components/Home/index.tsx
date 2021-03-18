import React from 'react'
import { routes_app } from '../../App'
import { Header } from '../Header/Index'

export default function Home() {
    return (
        <>
            <Header link={routes_app.login} text="Login"/>
        </>
    )
}
