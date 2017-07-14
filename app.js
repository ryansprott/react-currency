import jQuery from 'jquery'
window.$ = jQuery
import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/Container'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import blockUI from 'block-ui'

ReactDOM.render(<Container />, document.getElementById('app'))
