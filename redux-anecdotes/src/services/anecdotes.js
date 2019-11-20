import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const createNew = async (data) => {
    const object = {
        content: data,
        votes: 0
    }
    const response = await axios.post(url, object)
    return response.data
}

export default { getAll, createNew }