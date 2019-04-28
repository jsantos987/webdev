document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);


// GET data from local text file
function getText() {
    fetch('test.txt')
    // To return a promise .then is required
    .then(res => res.text())
    // Another .then is required as a promise is returned
    .then(data => {
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// GET data from local json 
function getJson() {
    fetch('posts.json')
    // To return a promise .then is required
    .then(res => res.json())
    // Another .then is required as a promise is returned
    .then(data => {
        console.log(data);
        // Display output requires loop
        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


// GET data from external API
function getApi() {
    fetch('https://api.github.com/users')
    // To return a promise ".then()" is required
    .then(res => res.json())
    .then (data => {
        console.log(data);
        // Display output requires loop
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}




