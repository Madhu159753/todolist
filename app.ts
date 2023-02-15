//const express=require('express');
import express from 'express'
const app=express();
import todoRouter from './routes/todo';

import bodyParser  from 'body-parser';
app.use(bodyParser.json());
app.use(todoRouter);
app.listen(3000);