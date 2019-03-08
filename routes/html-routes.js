const path = require("path");

// Routes
// =============================================================

module.exports =function(app) {
    app.get("/users", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/users.html"));
    });
    
}