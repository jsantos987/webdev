const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

/*
function createPost(post) {
    // mimik server, set timeout to 2 seconds
    setTimeout(function() {
        posts.push(post);
    }, 2000);
}

function getPosts(){
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
createPost({title: 'Post Three', body: 'This is post three'});

getPosts();
*/

function createPost(post, callback) {
    // mimik server, use post callback and set timeout to 2 seconds
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post){
            output += `<ul><li>${post.title}</li></ul>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);