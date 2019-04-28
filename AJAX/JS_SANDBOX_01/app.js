document.getElementById('button').addEventListener('click',
loadData);

function loadData() {
    // Create an XHR Object (Instantiat object)
    const xhr = new XMLHttpRequest();

    // xhr.open = Read XML named data.txt using asynchronous method
    xhr.open('GET', 'data.txt', true);
        console.log('READYSTATE', xhr.readyState);
    // Optional - Used for spinners/loaders
    xhr.onprogress = function (){
        console.log('READYSTATE', xhr.readyState);
    }

    // If xhr with status of 200 render responseText.
    xhr.onload = function () {
            console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
        console.log(this.responseText);
        document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.onerror = function() {
        console.log('Request error...');
    }

    xhr.send();

}

    // READYSTATE VALUES
    // 0: reqeust not initiated
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready       

    // HTTP STATUSES
    // * 200: OK
    // * 403: Forbidden
    // * 404: Not Found
