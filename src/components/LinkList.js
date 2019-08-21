import React from 'react'
import Link from './Link'

import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        url
        description
        createdAt
      }
    }
  }
`

function LinkList() {
  const { loading, error, data } = useQuery(FEED_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return data.feed.links.map(link => (
    <Link key={link.id} link={link} />
  ))
}

export default LinkList
