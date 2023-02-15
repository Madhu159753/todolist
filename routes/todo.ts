import {Router} from 'express';
import { type } from 'os';

import {madhu} from '../model/todo'
//alies type
 type requestBody= {text: string};
 type requestParams={todoId:string}
const router=Router();
let todo: madhu[] =[];

router.get('/',(req,res,next)=>{
    res.status(200).json({todo:todo})
});
 router.post('/todo',(req,res,next)=>{
     const body=req.body as requestBody ;
    const newtodo:madhu={
        id:new Date().toISOString(),
        text:body.text,
    };
    todo.push(newtodo);
    res.status(201).json({message:'added todo',todo:newtodo,todos:todo})
 });
  router.put('/todo/:todoId',(req,res,next)=>{
    const params=req.params as requestParams;
    const tId=params.todoId;
    const body=req.body as requestBody;
    const todoIndex=todo.findIndex((todoItem => todoItem.id===tId))
    if(todoIndex >=0){
     todo[todoIndex]={id:todo[todoIndex].id,text:body.text}
     return res.status(200).json({mesage:'updated todo',todo:todo})
    }
    res.status(404).json({message:'could not found todo  with this index id'})
  })
 router.delete('/todo/:todoId',(req,res,next)=>{
  const params=req.body as requestParams;
  todo=todo.filter(todoItem=>todoItem.id !==params.todoId);
  res.status(200).json({message:'deleted successfully',todo:todo})
 })

export default router;

// add  "start":"node dist/app.js",
//add  ts file in rootDir to './src' 
//outdir: '/dist'  for js file