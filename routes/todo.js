"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todo = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todo: todo });
});
router.post('/todo', (req, res, next) => {
    const newtodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todo.push(newtodo);
    res.status(201).json({ message: 'added todo', todo: newtodo, todos: todo });
});
router.put('/todo/:todoId', (req, res, next) => {
    const tId = req.params.todoId;
    const todoIndex = todo.findIndex(todoItem => todoItem.id === tId);
    if (todoIndex >= 0) {
        todo[todoIndex] = { id: todo[todoIndex].id, text: req.body.text };
        return res.status(200).json({ mesage: 'updated todo', todo: todo });
    }
    res.status(404).json({ message: 'could not found todo  with this index id' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    todo = todo.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({ message: 'deleted successfully', todo: todo });
});
exports.default = router;
