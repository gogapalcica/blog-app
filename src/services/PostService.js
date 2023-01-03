import ApiService from "./ApiService";

class PostService extends ApiService{
    async getAll(){
        const {data} = await this.client.get("/posts");
        return data;
    }

    async get(id){
        const {data} = await this.client.get(`/posts/${id}`);

        return data;
    }
    async create(postData){
        const response = await this.client.post("/posts",postData);

        return response;
    }
}
export const postService = new PostService();