/**
 * Data Model Interfaces
 */
import { BaseTodo, Todo } from './todo.interface'
import { Todos } from './todos.interface'

/**
 * In-Memory Store
 */
const todos: Todos = {
  1: {
    id: 1,
    title: 'Burger',
    description: 'Tasty'
  },
  2: {
    id: 2,
    title: 'Pizza',
    description: 'Cheesy'
  },
  3: {
    id: 3,
    title: 'Tea',
    description: 'Informative'
  }
}

/**
 * Service Methods
 */
export const findAll = async (): Promise<Todo[]> => Object.values(todos)

export const find = async (id: number): Promise<Todo> => todos[id]

export const create = async (newItem: BaseTodo): Promise<Todo> => {
  const id = new Date().valueOf()

  todos[id] = {
    id,
    ...newItem
  }

  return todos[id]
}

export const update = async (
  id: number,
  todoUpdate: BaseTodo
): Promise<Todo | null> => {
  const todo = await find(id)

  if (!todo) {
    return null
  }

  todos[id] = { id, ...todoUpdate }

  return todos[id]
}

export const remove = async (id: number): Promise<null | void> => {
  const todo = await find(id)

  if (!todo) {
    return null
  }

  delete todos[id]
}
