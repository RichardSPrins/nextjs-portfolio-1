import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({ slug, title}) => {
  return (
    <li>
      <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}


export default () => { 
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug="first-post" title="First"/>
        <PostLink slug="second-post" title="Second"/>
        <PostLink slug="third-post" title="Third"/>
        <PostLink slug="fourth-post" title="Fourth"/>
      </ul>
    </Layout>
  )
}