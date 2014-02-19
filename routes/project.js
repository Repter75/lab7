var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  // query for the specific project here
  // send a response using res.json(...);
  models.Project
    .find({"_id":projectID})
    .exec(foundProjectInfo);

  function foundProjectInfo(err, data) {
    if(err) console.log(err);
    res.json(data[0]);
  }
}



exports.addProject = function(req, res) {
  var form_data = req.body;

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  var newData = new models.Project(form_data);
  newData.save(callback);

  function callback(err, data) {
    if (err) console.log(err);
    res.send("OK");
  }
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
   models.Project
    .find({"_id":projectID})
    .remove()
    .exec(callback);

    function callback() {
      res.send("OK");
    }
}