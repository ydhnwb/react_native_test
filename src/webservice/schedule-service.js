import axios from 'axios'

export const fetchBusSchedule = async (id) => {
    try {
        const url = "https://bdbusticket.firebaseio.com/buses/"
        let status;
        const response = await axios.get(url+id+'.json', {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((data) => {
                status = data.status;
                return data.data;
            }).catch((err) => {
                if (err.response) {
                    status = err.response.status
                    return err.response.data
                }
                status = null
                return null
            })
        return { data: response, status: status }
    } catch (e) {
        console.log(`Exception occured on get discover buses: ${e}`);
        return { data: null, status: null }
    }

}