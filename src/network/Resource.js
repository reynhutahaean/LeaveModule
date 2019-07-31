import Request from "./Request";
import URI from "../config/Uri"

class Resource {
  async getLeave(){
    const header = {
      // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let res = await Request.get(URI.API_BASE_URL + URI.ENDPOINT_GET_LEAVES, header);
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async createLeave(body){
    const header = {
      // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    console.log(JSON.stringify(body))

    let res = await Request.post(URI.API_BASE_URL + URI.ENDPOINT_CREATE_LEAVES, header, JSON.stringify(body));
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async editLeave(body, id){
    const header = {
      // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
      "Accept": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_EDIT_LEAVES.replace(/{(id)}/, id)
    let res = await Request.put(endPoint, header, JSON.stringify(body));
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async deteleLeave(id){
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_DELETE_LEAVES.replace(/{(id)}/, id)
    let res = await Request.delete(endPoint, header);
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async approveLeaveSM(body, id){
    const header = {
      // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
      "Accept": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_APPROVE_SM_LEAVES.replace(/{(id)}/, id)
    let res = await Request.post(endPoint, header, JSON.stringify(body));
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async rejectedLeaveSM(body, id){
    const header = {
      // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
      "Accept": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_REJECTED_SM_LEAVES.replace(/{(id)}/, id)
    let res = await Request.post(endPoint, header, JSON.stringify(body));
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }
  
  async approveLeaveHR(body, id){
    const header = {
      // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
      "Accept": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_APPROVE_HR_LEAVES.replace(/{(id)}/, id)
    let res = await Request.post(endPoint, header, JSON.stringify(body));
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }  

  async rejectedLeaveHR(body, id){
    const header = {
      // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
      "Accept": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_REJECTED_HR_LEAVES.replace(/{(id)}/, id)
    let res = await Request.post(endPoint, header, JSON.stringify(body));
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }
} 

export default new Resource();