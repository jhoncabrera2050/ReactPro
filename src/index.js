import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {   UseCard } from './Greeting'
import  {Button} from './Button'
import { TaskCard } from "./Task";
import {Post} from "./Post"
const root = ReactDOM.createRoot(document.getElementById
("root"));
// ESTO ES UNA FUNCION


// ESTO RETORNA
// los comentarios deben estar dentro de las llaves
root.render(
  <>
    <TaskCard/>
    <Post/>
    {/* <Button text="Click me"/>
    <Button text="go to"/>
    <Button text="hello worls"/> */}
    {/* <UseCard 
    name="Jhon cabrera"
    amount={3000}
    married={true}
    point={[99,33.3,22.2]}
    address={{street : "av san antonio", city :"New York"}}  
    greet={function() {alert('hola')}}/>
    <UseCard
    name="Diego cabrera"
    amount={5000}
    married={false}
    point={[200,500]}
    address={{street : "av la marina", city :"New York"}} /> */}
  </>
);


