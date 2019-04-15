//DB info Collection Constructor
function DBinfo(account, server, instance, dataCenter) {
    this.account = account;
    this.server = server;
    this.instance = instance;
    this.dataCenter = dataCenter;
}

// UI Constructor
function UI() {}

// Add DB User Scripts to list
UI.prototype.constructDBUser = function(dbINFO){
    //console.log(book);
    const list = document.getElementById('backupUser');
    // Create tr element
    const row = document.createElement('tr');
    // console.log(row);
    // Insert cols
    row.innerHTML = `
        <td>
        <strong>DB User Creation Script</strong>
        <p>This is a test ${dbINFO.account}-${dbINFO.server}<br />
        This is database ${dbINFO.instance}<br />
        This is a test ${dbINFO.account}-${dbINFO.server}<br />
        This is the rman catalog ${dbINFO.dataCenter}</p>
     
        <strong>Catalog User Creation Script</strong>
        <p>This is a test ${dbINFO.account}-${dbINFO.server}<br />
        This is database ${dbINFO.instance}<br />
        This is a test ${dbINFO.account}-${dbINFO.server}</p>
   
        <strong>Connections Strings</strong>
        <p>This is a test ${dbINFO.account}-${dbINFO.server}<br />
        This is database ${dbINFO.instance}<br />
        This is a test ${dbINFO.account}-${dbINFO.server}</p>
        </td>
        
        <td><a href="#" class="delete">X<a></td>`;

    list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
    // Create div
    const div = document.createElement('div');
    
    // Add class
    div.className = `alert ${className}`;
    
    // Add text
    div.appendChild(document.createTextNode(message));
    
    // Get Parent
    const container = document.querySelector('.container');
    
    // Get Form
    const form = document.querySelector('#db-form');
    
    // Insert alert
    container.insertBefore(div, form);

    // Message timout after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();}, 
        2000);
    
}

// Delete DB scripts from list
UI.prototype.deleteDBinfo = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
    

// Clear Fields
UI.prototype.clearFields = function (){
    document.getElementById('account').value = '';
    document.getElementById('server').value = '';
    document.getElementById('instance').value = '';
    document.getElementById('dataCenter').value = 'Select_DC';
}

// Event Listeners for add DB info to scripts
document.getElementById('db-form').addEventListener('submit',
function(e){
    // Get Form Values
    const account = document.getElementById('account').value,
          server = document.getElementById('server').value,
          instance = document.getElementById('instance').value,
          dataCenter = document.getElementById('dataCenter').value
    // console.log(account, server, instance);


    
    // Instantiate DB info
    const dbINFO = new DBinfo(account, server, instance, dataCenter);
   // console.log(dbINFO);



    // Instantiate UI
    const ui = new UI();
    //console.log(ui);
    

    // validate (form complete)
    if(account === '' || server === '' || instance == ''|| dataCenter === 'Select_DC') {
        //Error Alert
        ui.showAlert('Please fill in all fields', 'error');

    } else {
        // Add DB user scripts and diplay in table
        ui.constructDBUser(dbINFO);
        //console.log(book);
    
        // Show Success
        ui.showAlert('Oracle Scripts Generated!', 'success');

        //Clear Fields
        ui.clearFields();

    }

    e.preventDefault();
});


// Event Listner for delete
document.getElementById('backupUser').addEventListener('click', function(e){
    //console.log(123);

    // Instantiate UI
    const ui = new UI();

    // Delete DB scripts from list
    ui.deleteDBinfo(e.target);

    // Show alet upon successful delete
    ui.showAlert('Oracle Scripts Removed!', 'success');

    e.preventDefault();
});