import axios from 'axios'

export default () => {
  axios.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error)
        this.$router.push('/')
      })
    }
    // // Try request again with new token
    // return TokenStorage.getNewToken()
    //   .then((token) => {
    //     // New request with new token
    //     const config = error.config
    //     config.headers.Authorization = `Bearer ${token}`
    //
    //     return new Promise((resolve, reject) => {
    //       axios.request(config).then(response => {
    //         resolve(response)
    //       }).catch((error) => {
    //         reject(error)
    //       })
    //     })
    //   })
    //   .catch((error) => {
    //     Promise.reject(error)
    //   })
  })
}
