// import Link from 'next/link'
import Layout from '../components/Layout'
import React from 'react'

export default class About extends React.Component {
  state = {
    user: null
  }

componentDidMount(){
  fetch('https://api.github.com/users/RichardSPrins')
  .then(res => res.json())
  .then(data => {
    this.setState({
      user: data
    })
  })
  .then(() => console.log(this.state))


}
  render() {
    return (
      <Layout title="About Me"> 
        <p>A Javascript Developer</p>
        <img src="/static/JS Logo.png" alt="Javascript"/>
      </Layout>
    )
  }
}