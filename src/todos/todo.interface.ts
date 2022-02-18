/**
 * There will be scenarios where you only need to assert the todo's structure without its id,
 * such as when you get a payload to create a new todo or update an existing one.
 * In those types of requests, POST and PUT, the client sends the todo id as a query parameter.
 * For those cases, you'll use the BaseTodo interface.
 */

export interface BaseTodo {
    title: string;
    description: string;
}

export interface Todo extends BaseTodo {
    id: number;
}
