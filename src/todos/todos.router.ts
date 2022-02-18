/**
 * Required External Modules and Interfaces
 */
import express from 'express'
import { findAll, find, create, update, remove } from './todos.controller'
import { checkJwt } from '../middleware/auth.middleware'

import { checkPermissions } from '../middleware/permissions.middleware'
import { TodoPermission } from './todo-permission'

/**
 * Router Definition
 */
export const todosRouter = express.Router()

// GET todos
todosRouter.get('/', findAll)

// GET todos/:id
todosRouter.get('/:id', find)

// Mount authorization middleware
todosRouter.use(checkJwt)

// POST todos
todosRouter.post('/', checkPermissions(TodoPermission.CreateTodos), create)

// PUT todos/:id
todosRouter.put('/:id', checkPermissions(TodoPermission.UpdateTodos), update)

// DELETE todos/:id
todosRouter.delete('/:id', checkPermissions(TodoPermission.DeleteTodos), remove)
