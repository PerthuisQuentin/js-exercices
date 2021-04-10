function get(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()

        request.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE) {
                if (this.status == 200) {
                    const data = JSON.parse(request.responseText)
                    resolve(data)
                } else {
                    reject(this.status)
                }
            }
        }
        
        request.open('GET', url)
        request.send() 
    })
}
