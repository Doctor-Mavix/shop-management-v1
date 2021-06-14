import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";
// axios.defaults.baseURL = 'https://api.afriford.com/api'

axios.defaults.headers.common["auth-token"] = localStorage.getItem("token");

axios.defaults.headers.common["Content-Type"] = "application/json";
