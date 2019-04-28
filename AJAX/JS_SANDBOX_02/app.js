document.getElementById('button1').addEventListener
('click', loadCustomer);

// Load Single Customer
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200) {
            //console.log(this.responseText);
        
            // json data must be parsed before being rendered
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.name}</li>
                </ul>
                `;

                document.getElementById('customer').innerHTML =  output;

        }
    }

    xhr.send();
}

document.getElementById('button2').addEventListener
('click', loadCustomers);

// Load Customers
function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);
    xhr.onload = function(){
        if(this.status === 200) {
        //console.log(this.responseText);
            
        // json data must be parsed before being rendered
        const customers = JSON.parse(this.responseText);

        // Loop through Customers array
        let output = '';

        customers.forEach(function(customer){
            output += `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.name}</li>
            </ul>
        `;
        });

        document.getElementById('customers').innerHTML =  output;
    }
}

    xhr.send();
}

