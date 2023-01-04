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

    async edit(postData, id){
        const response = await this.client.put(`/posts/${id}`,postData);

        return response;
    }

    async delete(id){
        const response = await this.client.delete(`/posts/${id}`);

        return response;
    }

}
export const postService = new PostService();