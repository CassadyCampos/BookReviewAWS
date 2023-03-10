/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createBookReview = /* GraphQL */ `
  mutation CreateBookReview(
    $input: CreateBookReviewInput!
    $condition: ModelBookReviewConditionInput
  ) {
    createBookReview(input: $input, condition: $condition) {
      id
      title
      reviewNotes
      image
      reviewScore
      createdAt
      updatedAt
    }
  }
`;
export const updateBookReview = /* GraphQL */ `
  mutation UpdateBookReview(
    $input: UpdateBookReviewInput!
    $condition: ModelBookReviewConditionInput
  ) {
    updateBookReview(input: $input, condition: $condition) {
      id
      title
      reviewNotes
      image
      reviewScore
      createdAt
      updatedAt
    }
  }
`;
export const deleteBookReview = /* GraphQL */ `
  mutation DeleteBookReview(
    $input: DeleteBookReviewInput!
    $condition: ModelBookReviewConditionInput
  ) {
    deleteBookReview(input: $input, condition: $condition) {
      id
      title
      reviewNotes
      image
      reviewScore
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
