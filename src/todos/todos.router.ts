/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from 'express';
 import { findAll, find, create, update, remove } from './todos.controller'

/**
 * Router Definition
 */
 export const todosRouter = express.Router();

// GET todos
todosRouter.get("/", findAll);

// GET todos/:id
todosRouter.get("/:id", find);

// POST todos
todosRouter.post("/", create);

// PUT todos/:id
todosRouter.put("/:id", update);

// DELETE todos/:id
todosRouter.delete("/:id", remove);


