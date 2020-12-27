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
  let page = data.page
  let response = {};
  const todos = await axios
    .post("movie/getMovieCategory/"+page, {genre: data.genre})
    .catch(function (error) {
         if(error.response.status !== 200) {
          response = {
            result: "failed",
            data: null,
          };
         }
    });
  if(response.result === "failed") {
    return response
  }
  else {
    response = {
      result: "success",
      data: [...todos.data.message],
    };
    console.log(response,todos, "cek response movie")
    return response;
  }
};
