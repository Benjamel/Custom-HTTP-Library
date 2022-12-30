//ES5 old way 

// function easyHTTP() {
//     this.http = new XMLHttpRequest();
// }

// Make an HTTP GET request
// easyHTTP.prototype.get = function(url, callback) {
//     this.http.open('GET', url, true);

//     let self = this;
//     this.http.onload = function() {
//         if(self.http.status === 200) {
//             callback(null, self.http.responseText);
//         } else {
//             callback('error: ' + self.http.status)
//         }
//     }

//     this.http.send();
// }

// Make an HTTP POST request
// easyHTTP.prototype.post = function(url, data, callback) {
//     this.http.open('OPEN', url, true); 
//     this.http.setRequestHeader('Content-type', 'application/json');

//     let self = this;
//     this.http.onload = function() {
//         callback(null, self.http.responseText);
//     }

//     this.http.send(JSON.stringify(data));
// }


// Make an HTTP PUT request
// easyHTTP.prototype.put = function(url, data, callback) {
//     this.http.open('PUT', url, true); 
//     this.http.setRequestHeader('Content-type', 'application/json');

//     let self = this;
//     this.http.onload = function() {
//         callback(null, self.http.responseText);
//     }

//     this.http.send(JSON.stringify(data));
// }

// Make an HTTP DELETE request
// easyHTTP.prototype.delete = function(url, data, callback) {
//     this.http.open('DELETE', url, true); 

//     let self = this;
//     this.http.onload = function() {
//         if(self.http.status === 200) {
//             callback(null, 'Post Deleted')
//         } else {
//             callback('error: ' + self.http.status);
//         }
//     }

//     this.http.send();
// }

//ES6 new way

/** 
* EasyHTTP Library
* Library for making HTTP requests
*
* @version 3.0.0
* @Author Benjamin Meldal
* @License MIT
*
**/

//make an HTTP get request
// class EasyHTTP {
//     get(url) {
//         return new Promise((resolve, reject) => {
//         fetch(url)
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//         })
//     }
// }

//make an HTTP post request
// class EasyHTTP {
//     get(url, data) {
//         return new Promise((resolve, reject) => {
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//         })
//     }

//make http put request
// put(url, data) {
//     return new Promise((resolve, reject) => {
//     fetch(url, {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(data => resolve(data))
//     .catch(err => reject(err));
//     })
// }

    //make an http delete request
//     delete(url) {
//         return new Promise((resolve, reject) => {
//         fetch(url, {
//             method: 'DELETE',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         .then(res => res.json())
//         .then(() => resolve('Resource deleted'))
//         .catch(err => reject(err));
//         })
//     }
// }

//ES7 newest way 
// class EasyHTTP {
    //make an HTTP get request
//    async get(url) {
//         const response = await fetch(url);
//         const result = await response.json();
//         return result;
//     }
// }

//make an HTTP post request
class EasyHTTP {
    // async post(url, data) {
    //    const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //    });

    //    const result = await response.json();
    //    return result;
    // }

    //make http put request
    // async put(url, data) {
    //     const response = await fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     const result = await response.json();
    //     return result;
    // }

    //make an http delete request
        async delete(url) {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await 'Resource deleted';
            return result;
        }
    }

