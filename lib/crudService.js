const chalk = require("chalk");
const axios = require("axios");

// Add Service Functionality
const addService = (name, location, status, description) => {
    try {
        axios
            .post('http://localhost:4000/api/services', {
                name,
                location,
                status,
                description
            })
            .then((response) => {
                console.log(response);
                console.log(chalk.inverse.green("New Service Added"));
            })
    } catch (ex) {
        console.log(ex);
        console.log(chalk.inverse.red("Service Name Already Taken"));
    }
};

// Read Service Functionality
const readService = id => {
    try {
        axios
            .get('http://localhost:4000/api/services/' + id)
            .then((response) => {
                console.log(chalk.inverse.green("Your service :"));
                console.log(`${chalk.inverse(response.data.name)} ${response.data.location} ${response.data.status} ${response.data.description}`);
            })
    } catch (ex) {
        console.log(ex);
        console.log(chalk.inverse.red("Can't Find This Service"));
    }
};

// Update Service Functionality
const updateService = (id, name, location, status, description) => {
    try {
        axios
            .put('http://localhost:4000/api/services/' + id, {
                name,
                location,
                description,
                status
            })
            .then((response) => {
                console.log(response);
                console.log(chalk.inverse.green("Service Updated"));
            });
    } catch (ex) {
        console.log(ex);
        console.log(chalk.inverse.red("Service Not Found"));
    }
};

// Remove Service from data.json Functionality
const removeService = id => {
    try {
        axios
            .delete('http://localhost:4000/api/services/' + id)
            .then((response) => {
                console.log(response);
                console.log(chalk.inverse.green("Removed Service"));
            });
    } catch (ex) {
        console.log(ex);
        console.log(chalk.inverse.red("No Service Found"));
    }
};

// Read All Services Functionality
const listServices = () => {
    try {
        axios
            .get('http://localhost:4000/api/services')
            .then(response => {
                const services = response.data;
                console.log(chalk.inverse("Your Services"));
                services.forEach((service) =>
                    console.log(`${service._id} : ${chalk.bold(service.name)} ${service.location} ${service.status} ${service.description}`)
                );
            });
    } catch (ex) {
        console.log(ex);
        console.log(chalk.inverse.red("No Services Found"));
    }
};

// Export all functions
module.exports = {
    addService,
    removeService,
    listServices,
    readService,
    updateService
};