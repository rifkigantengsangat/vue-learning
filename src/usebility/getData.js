import axios from "axios";
import { ref,computed } from "vue"
import { useStore } from "vuex";
const getData=()=>{
const data = ref([]);
const store = useStore();

const loading=ref(false);
const error = ref(false);
const fetchingData = async()=>{
    try {
        loading.value=true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        store.commit("PUSH_DATA",response.data);
    } catch (error) {
        console.log(error.message);
    }finally{
        loading.value=false;
    
    }
}

return{data,loading,fetchingData}
}
export default getData;