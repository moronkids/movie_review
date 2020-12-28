import defaultAxios from "axios";
const axios = defaultAxios.create({
  baseURL: "http://13.212.6.137:3000/", //firebaseku
  headers: {
    "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  withCredentials: false,
  crossorigin: true,
});

export const getByCategory = async (data) => {
  console.log("masuk get api movie");
  let response = {};
  let todos;
  if (data.genre === "all") {
    let page = data.page;
     todos = await axios
      .get("movie/getAllMovie/" + page)
      .catch(function (error) {
        if (error.response.status !== 200) {
          console.log(error.response, "ini error");
          response = {
            result: "failed",
            data: [],
          };
        }
      });
  }
  else {
    let page = data.page;
     todos = await axios
      .post("movie/getMovieCategory/" + page, {genre : data.genre})
      .catch(function (error) {
        if (error.response.status !== 200) {
          console.log(error.response, "ini error");
          response = {
            result: "failed",
            data: [],
          };
        }
      });
  }
  if (response.result === "failed") {
    console.log(response, "gagal");
    return response;
  } else {
    response = {
      result: "success",
      data: [...todos.data.message.result],
    };
    console.log(response, todos, "cek response movie");
    return response;
  }
};
export const getAllCategory = async (data) => {
  console.log("masuk get api movie");
  let response = {};
  const todos = await axios
    .get("movie/getAllCategory/")
    .catch(function (error) {
      if (error.response.status !== 200) {
        console.log(error.response, "ini error");
        response = {
          result: "failed",
          data: [],
        };
      }
    });
  if (response.result === "failed") {
    console.log(response, "gagal");
    return response;
  } else {
    console.log(response, todos, "cek response movie");
    response = {
      result: "success",
      data: [...todos.data.message.Category],
    };
    return response;
  }
};
export const getById = async (data) => {
  console.log("masuk get api movie", data);
  const id = data;
  let response = {};
  const todos = await axios
    .get("movie/getMovieById/" + id)
    .catch(function (error) {
      if (error.response.status !== 200) {
        response = {
          result: "failed",
          data: null,
        };
      }
    });
  if (response.result === "failed") {
    return response;
  } else {
    response = {
      result: "success",
      data: [...todos.data.message],
    };
    console.log(response, todos, "cek response movie");
    return response;
  }
};
export const getByQuery = async (data) => {
  console.log("masuk get api movie cari", data);
  let page = data.page;
  let response = {};
  const todos = await axios
    .post("/movie/search/" + page, { query: data.query })
    .catch(function (error) {
      if (error.response.status !== 200) {
        response = {
          result: "failed",
          data: null,
          query: data.query,
        };
      }
    });
  if (response.result === "failed") {
    return response;
  } else {
    console.log(response, todos, "astajim");
    response = {
      result: "success",
      data: [...todos.data.message],
      query: data.query,
    };
    return response;
  }
};
