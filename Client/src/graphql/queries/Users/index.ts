import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      _id
      email
      password
      username
      picture
      todos {
        content
        isCompleted
        _id
      }
    }
  }
`

export const UPDATE_USER = gql`
  mutation UpdateUserData($updateUserDataId: ID, $data: UpdateUserInput) {
    updateUserData(id: $updateUserDataId, data: $data) {
      _id
      username
      picture
    }
  }
` 