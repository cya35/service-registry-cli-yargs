const yargs = require("yargs");
const crudService = require("./lib/crudService");

// Create  Add command
yargs.command({
    command: "register",
    describe: "make a post HTTP request to add a new service",
    builder: {
        name: {
            describe: "Add the new service name",
            demandOption: true,
            type: "string"
        },
        location: {
            describe: "Add the new service location",
            demandOption: true,
            type: "string"
        },
        status: {
            describe: "Add the new service status",
            demandOption: true,
            type: "boolean",
            default: false
        },
        description: {
            describe: "Add the new service description",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        crudService.addService(argv.name, argv.location, argv.status, argv.description);
    }
});

// Create Remove Command
yargs.command({
    command: "unregister",
    describe: "make a delete HTTP request to remove a service",
    builder: {
        id: {
            describe: "Service _id",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        crudService.removeService(argv.id);
    }
});

// Create Read Command
yargs.command({
    command: "get",
    describe: "make a get HTTP request to read a service",
    builder: {
        id: {
            describe: "Service _id",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        crudService.readService(argv.id);
    }
});

// Create Update Command
yargs.command({
    command: "set",
    describe: "make a put HTTP request to update a service",
    builder: {
        id: {
            describe: "Service _id",
            demandOption: true,
            type: "string"
        },
        name: {
            describe: "Add the new service name",
            demandOption: true,
            type: "string"
        },
        location: {
            describe: "Add the new service location",
            demandOption: true,
            type: "string"
        },
        status: {
            describe: "Add the new service status",
            demandOption: true,
            type: "boolean",
            default: false
        },
        description: {
            describe: "Add the new service description",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        crudService.updateService(argv.id, argv.name, argv.location, argv.status, argv.description);
    }
});

// Create List Command
yargs.command({
    command: "list",
    describe: "make a get HTTP request to read a services list",
    handler: () => {
        crudService.listServices();
    }
});

yargs.parse();