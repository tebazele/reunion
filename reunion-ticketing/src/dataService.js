import { api } from "./AxiosService";
class DataService {
  async storeAttendee(data) {
    const res = await api.post('/api/post', data);
    // console.log(res.data);
    if (res) {
      return true;
    }
    return false;
  }

  async update(id, updateData) {
    const res = await api.patch('/api/update/'+ id, updateData)
    return res;
  }
}

export const dataService = new DataService();