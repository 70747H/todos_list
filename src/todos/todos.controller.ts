/**
 * Required External Modules and Interfaces
 */
import { Request, Response } from 'express'
import * as TodoService from './todos.service'
import { BaseTodo, Todo } from './todo.interface'

/**
 * Controller Methods
 */
export const findAll = async (req: Request, res: Response) => {
  try {
    const todos: Todo[] = await TodoService.findAll()

    res.status(200).send(todos)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

export const find = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10)

  try {
    const todo: Todo = await TodoService.find(id)

    if (todo) {
      return res.status(200).send(todo)
    }

    res.status(404).send('item not found')
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

export const create = async (req: Request, res: Response) => {
  try {
    const todo: BaseTodo = req.body

    const newTodo = await TodoService.create(todo)

    res.status(201).json(newTodo)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

export const update = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10)

  try {
    const todoUpdate: Todo = req.body

    const existingTodo: Todo = await TodoService.find(id)

    if (existingTodo) {
      const updatedTodo = await TodoService.update(id, todoUpdate)
      return res.status(200).json(updatedTodo)
    }

    const newTodo = await TodoService.create(todoUpdate)

    res.status(201).json(newTodo)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10)
    await TodoService.remove(id)

    res.sendStatus(204)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}
