import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'

export default props => (
    //class no html no react vira className
    <div className="container">
        <Menu />
        <Routes />
    </div>
)