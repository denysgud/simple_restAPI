var User = require('mongoose').model('User');

var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) {
        return err.errors[errName].message;
      }
    }
  } else {
    return 'Unknown server error';
  }
};

exports.create = function(req, res, next) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(user);
    }
  });

};

exports.list = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(users);
    }
  });
};

exports.userByID = function(req, res, next, id) {
  User.findById(id, function(err, user) {
    if (err) {
      return next(err);
    } else if (user) {
      req.user = user;
      next();
    } else {
      return next(new Error('Failed to load user ' + id));
    }
  });
};

exports.read = function(req, res) {
  res.json(req.user);
};

exports.update = function(req, res, next) {
  User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(user);
    }
  });
};

exports.delete = function(req, res, next) {
  req.user.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(req.user);
    }
  })
};