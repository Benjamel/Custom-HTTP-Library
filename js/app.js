//ES5 - old way

// const http = new easyHTTP;

//get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(posts)
//     }
// })

//create data
// const data = {
//     title: 'Custom posts',
//     body: 'This is a custom post'
// };

//create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//delete post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

//ES6 - new way

// const http = new EasyHTTP;

//get users
// http.get('https://jsonplaceholder.typicode.com/posts')
// .then(data => console.log(data))
// .catch(err => console.log(err));

//user data 
// const data = {
//     username: 'johndoe',
//     name: 'John Doe',
//     email: 'johndoe@something.com'
// }

//create users
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//update users
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//delete users
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(data => console.log(data))
// .catch(err => console.log(err));


//ES7 newest way 