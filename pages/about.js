import Layout from '../components/Layout'
import Error from './_error'
import React from 'react'

export default class About extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/RichardSPrins')
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json()
    
    return {
      user: data,
      statusCode,
    }
  }

  render() {
    const { user, statusCode } = this.props

    if(statusCode){
      return   <Error statusCode={statusCode} />
    }
    return (
      <Layout title="About Me"> 
        <img src={user.avatar_url}></img>
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
        <p>{user.location}</p>
      </Layout>
    )
  }
}