import axios from "axios";
import { ref } from "vue"
const getData=()=>{
const data = ref([]);
const loading=ref(false);
const error = ref(false);
const fetchingData = async()=>{
    try {
        loading.value=true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        data.value=response.data;
    } catch (error) {
        console.log(error.message);
    }finally{
        loading.value=false;
    
    }
}

return{data,loading,fetchingData}
}
export default getData;