import axios from "axios";

export function fetchUsers (page) {
    return axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
}