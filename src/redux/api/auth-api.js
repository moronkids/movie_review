import  defaultAxios  from "axios";
import React, { useContext, useState, useEffect } from "react";
// import { firebaseAuth } from "../../Provider/AuthProvider";
// import { authMethods } from "../../firebase/AuthMethods";
// import { db } from "../../firebase/FireBaseIndex";
const axios = defaultAxios.create({
  baseURL: "https://reqres.in/api", //firebaseku
  // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

// Get All Todos
export const signIn = async (data) => {
  console.log(data, "tes login")
  // try {
    // const todos = await axios.get("todolist.json)
    let datax ={};
    const todos = await axios.post("/login", data).catch(function (error) {
      console.log(error.response.status, "tes");
      if(error.response.status === 400) {
            datax = {
              result: "success",
              data: error.response.data.error,
            };
      }
    });
    if("result" in datax) {
      console.log("jelb")
      return datax

    }
    else {
      localStorage.setItem("token", todos.data.token)
      datax = {
        result : "success",
        data: todos.data.token
      }
      return datax;
    }


};
// export const getAllTodos = async () => {
//   try {
//     // const todos = await axios.get("todolist.json)
//     const todos = await axios.get(
//       "todolist.json?auth=" + localStorage.getItem("token")
//     );
//     console.log(todos, "get");
//     return todos.data;
//   } catch (err) {
//     authMethods.signout();
//     localStorage.setItem("error", err);
//     console.error(err, "loggin");
//     return console.error(err);
//   }
// };

// // Create New Todo
// export const createNewTodo = async (title) => {
//   console.log(title, "payload");
//   try {
//     const todo = await axios.post(
//       "todolist.json?auth=" + localStorage.getItem("token"),
//       title
//     );
//     console.log(todo, "ini todo");
//     const key = todo.data.name;
//     const susun = {
//       [key]: title,
//     };

//     return susun;
//   } catch (err) {
//     return console.error(err);
//   }
// };

// // Delete existed todo
// export const deleteExistedTodo = async (id) => {
//   console.log(id, "delet");
//   try {
//     let userRef = db.ref("todolist/" + id);
//     userRef.remove();

//     return id;
//   } catch (err) {
//     return console.error(err);
//   }
// };
