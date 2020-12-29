import  defaultAxios  from "axios";
import React, { useContext, useState, useEffect } from "react";
const axios = defaultAxios.create({
  baseURL: "http://13.212.6.137:3000/", //firebaseku
  headers: {
    // "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
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
        data: todos.data.token,
        user: todos.data.user
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
        data: todos.data
      }
      console.log(bro, "datax ")
      return bro;
    }
};
export const getMyReview = async () => {
  console.log("my reviews")
  let datax ={};
    const todos = await axios
      .get("user/getMyReview")
      .catch(function (error) {
        console.log(error, "tesx");
        if (error.response.status !== 200) {
          console.log(error.response, "wuu");
          datax = {
            result: "failed",
            logged: false,
          };
        }
      });
    if(datax.result === "failed") {
      console.log("jelb")
      return datax
    }
    else {
   const bro = {
     result: "success",
     data: [...todos.data.message.result],
   };
   console.log(bro, "datax ");
   return bro;
    }
};
export const savedMovie = async () => {
  console.log("my reviews")
  let datax ={};
    const todos = await axios.get("user/getWatchList").catch(function (error) {
      console.log(error, "tesx");
      if (error.response.status !== 200) {
        console.log(error.response, "wuu");
        datax = {
          result: "failed",
          logged: false,
        };
      }
    });
    if(datax.result === "failed") {
      console.log("jelb")
      return datax
    }
    else {
   const bro = {
     result: "success",
     data: [...todos.data.message[0].watchList],
   };
   console.log(bro, "datax ");
   return bro;
    }
};

