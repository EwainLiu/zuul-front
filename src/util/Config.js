import axios from "axios";

let api = axios.create({
    baseURL: `/api`
    // baseURL: `https://07be00e9-6808-49f1-b493-9cc63986a6d4.mock.pstmn.io`    // postman测试
});
export default api;