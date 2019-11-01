import React from 'react'
import { Link } from 'gatsby'
import { RichText, Date } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import { CalendarAlt } from 'styled-icons/boxicons-regular/CalendarAlt'
import { UserCircle } from 'styled-icons/boxicons-solid/UserCircle'
import { Time, HeaderInfo, Button } from '../../styles/base'

import * as S from './styled'

const PostSummary = ({ post }) => {
  let postDate = Date(post.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(postDate)
    : ''

  // Default title when post has no title set
  const defaultTitle = 'Untitled'

  return (
    <S.PostSummary key={post.id}>
      {post.img && <S.Image src={post.img.url} alt={post.img.alt} />}
      <S.Info>
        <HeaderInfo>
          <Time>{post.label}</Time>
          <span>
            <CalendarAlt /> {postDate}
          </span>
          <span>
            <UserCircle /> {post.author}
          </span>
        </HeaderInfo>
        <S.Title>
          <Link to={linkResolver(post._meta)}>
            {RichText.asText(post.title).length !== 0
              ? RichText.asText(post.title)
              : defaultTitle}
          </Link>
        </S.Title>
        <S.Description>{RichText.render(post.description)}</S.Description>
      </S.Info>
    </S.PostSummary>
  )
}

export default ({ posts }) => {
  if (!posts) return null

  return (
    <div className='blog-posts container'>
      {posts.map(post => {
        return <PostSummary post={post.node} key={post.node._meta.id} />
      })}
      <Button type='button'>Ver mais</Button>
    </div>
  )
}
