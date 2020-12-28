import  defaultAxios  from "axios";
import React, { useContext, useState, useEffect } from "react";
// import { firebaseAuth } from "../../Provider/AuthProvider";
// import { authMethods } from "../../firebase/AuthMethods";
// import { db } from "../../firebase/FireBaseIndex";
const axios = defaultAxios.create({
  baseURL: "http://13.212.6.137:3000/", //firebaseku
  // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  headers: {
    // "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  withCredentials: false,
  crossorigin: true,
});

export const signIn = async (data) => {
  console.log(data, "tes login")
    let datax ={};
    const todos = await axios.post("/user/login", data).catch(function (error) {
      console.log(error, "tesx");
      if(error.response.status !== 200) {
        console.log(error.response, "wuu")
            datax = {
              result: "failed",
              logged: false,
            };
            if("errors" in error.response.data) {
              if ("email" in error.response.data.errors) {
                datax.data = error.response.data.errors.email.msg;
              }
              if ("password" in error.response.data.errors) {
                datax.data = error.response.data.errors.password.msg;
              }
            }else if ("message" in error.response.data) {
              datax.data = error.response.data.message;
            }
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
        logged: true,
        data: todos.data.token
      }
      return datax;
    }
};
export const signUp = async (data) => {
  console.log(data, "tes signup")

  let datax ={};
    const todos = await axios.post("/user/signup", data).catch(function (error) {
      console.log(error, "tesx");
      if(error.response.status !== 200) {
        console.log(error.response, "wuu")
            datax = {
              result: "failed",
              logged: false,
            };
            if("errors" in error.response.data) {
              if ("email" in error.response.data.errors) {
                datax.data = error.response.data.errors.email.msg;
              }
              if ("password" in error.response.data.errors) {
                datax.data = error.response.data.errors.password.msg;
              }
              if ("fullName" in error.response.data.errors) {
                datax.data = error.response.data.errors.fullName.msg;
              }
              if ("passwordConfirmation" in error.response.data.errors) {
                datax.data =
                  error.response.data.errors.passwordConfirmation.msg;
              }
            }else if ("message" in error.response.data) {
              datax.data = error.response.data.message;
            }
      }
    });
    if(datax.result === "failed") {
      console.log("jelb")
      return datax
    }
    else {
      localStorage.setItem("token", todos.data.token)

      const bro = {
        result : "success",
        logged: true,
        data: todos.data.token
      }
      console.log(bro, "datax ")
      return bro;
    }
};

