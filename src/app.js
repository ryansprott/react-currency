import jQuery from 'jquery'
window.$ = jQuery
import blockUI from 'block-ui'
import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/Container'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<Container />, document.getElementById('app'))
