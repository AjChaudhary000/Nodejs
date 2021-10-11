const os = require("os");

try {

    console.log("CPU ARCHITECTURE = " + os.arch());
    console.log("Free Memory = " + (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " GB");
    console.log("Total Memory = " + (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB");
    console.log("User INFO = " + os.userInfo());

} catch (e) {
    console.log("Error " + e);
}