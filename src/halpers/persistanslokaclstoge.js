export const getItem = key => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log('Error getting data');
        return null
    }
}
export const setItem = (key, data) => {
    try {
        localStorage.setItem(key , JSON.stringify(data))
    } catch (error) {
        console.log('Error getting data');
    }
}

export const removItem = key => {
    try {
       localStorage.removeItem(key) 
    } catch (error) {
        console.log("token ochmadi nimadur xato");
    }
}
