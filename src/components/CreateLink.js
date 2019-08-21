import React from 'react'

import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

function CreateLink({ history }) {
  let descInput, urlInput
  const [
    createLink,
    {
      loading: mutationLoading,
      error: mutationError,
    }
  ] = useMutation(
    POST_MUTATION,
    { onCompleted: () => history.push('/') }
  )

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          ref={node => { descInput = node }}
          className="mb2"
          type="text"
          placeholder="A description for the link"
        />
        <input
          ref={node => { urlInput = node }}
          className="mb2"
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <button
        onClick={e => {
          e.preventDefault()
          createLink({ variables: {
            description: descInput.value,
            url: urlInput.value
          }})
          descInput.value = ''
          urlInput.value = ''
        }}
      >
        Submit
      </button>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </div>
  )
}

export default CreateLink
