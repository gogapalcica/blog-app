import ApiService from "./ApiService";

class PostService extends ApiService{
    async getAll(){
        const {data} = await this.client.get("/posts");
        return data;
    }
}
export const postService = new PostService();