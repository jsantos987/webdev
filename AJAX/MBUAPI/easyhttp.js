function easyHTTP() {
    this.http = new XMLHttpRequest();
}




// GET - Make a HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    // asyncronis
 
    this.http.open('GET', url, true);
    this.http.setRequestHeader('Content-type', 'application/json', {"X-AUTH-TOKEN": 'AAAfb8otjpJpyMTs1tGKFtC7-O5KyTgad50mkYU6hYcpl3apChwMQunbF25LF-P3Jil5yoN0O2XuBPAkm0j5-nphU2PfAvKadyJNunnL8Y151NSTJjVQG9RQ'});

    // Need to create a self varialbe for "this" to work in function
    let self = this;

    this.http.onload = function(){
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}


// POST - Make a HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json', {"X-AUTH-TOKEN": 'AAAfb8otjpJpyMTs1tGKFtC7-O5KyTgad50mkYU6hYcpl3apChwMQunbF25LF-P3Jil5yoN0O2XuBPAkm0j5-nphU2PfAvKadyJNunnL8Y151NSTJjVQG9RQ'});

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// PUT - Make a HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}



// DELETE - Make a HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
    // asyncronis
    this.http.open('DELETE', url, true);

    // Need to create a self varialbe for "this" to work in function
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200) {
            callback(null, 'Post Deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}