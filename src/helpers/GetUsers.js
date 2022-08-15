import axios from "axios";

export function getUsers (page) {
    return axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
}

export function getToken () {
    return axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
}

export function postUser (token1, formData1) {
    return fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
        method: "POST",
        headers: {
            "Token": token1,
        },
        body: formData1
    })
}