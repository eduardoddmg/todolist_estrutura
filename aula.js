const funco = () => {
    fetch()
    .then()
    .then(json => setData(json))
}

useEffect(() => {
    axios.get('/users').then(res => {
        setUsers(res.data)
    })
}, [])