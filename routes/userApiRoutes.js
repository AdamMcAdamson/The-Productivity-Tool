var db = require("../models");

var apiFunc = require("./apiFunctions.js"); 

module.exports = function(app) {


    app.get("/api/get/:id", function(req, res){
        var id = req.params.id;
        apiFunc.findUser(id, function(data){
            res.json(data);
        });
    });

    app.post("/api/add/:type", function(req, res) {
        var type = req.params.type;
        var data = req.body.data;
        apiFunc.create(type, data, function(){
            console.log("Created " + type);
        });
    });

    app.put("/api/update/:type", function(req, res) {
        var type = req.params.type;
        var data = req.body.data;
        var id = req.body.id;
        switch (type) {
            case "topic":
                db.Topic.update(data, { where: { id: id } });
                break;
            case "task":
                db.Task.update(data, { where: { id: id } });
                break;
            case "step_list":
                db.Step_list.update(data, { where: { id: id } });;
                break;
            case "step":
                db.Step.update(data, { where: { id: id } });
                break;
            case "audio_rec":
                db.Audio_rec.update(data, { where: { id: id } });
                break;
            case "audio_time":
                db.Audio_time.update(data, { where: { id: id } });
                break;
            default:
                console.log('---- FROM userApiRoutes.js {{app.post(/api/:type)}} ----');
                console.log('----------------------------------------------------------------');
                console.log('[Error] Invalid type: ' + type);
                console.log('data:   ' + JSON.stringify(data, 2, null));
        }
    });
};
