var PageRepo = require('../domain/page-repo');

exports.index = function (req, res) {
    PageRepo.getAllPages().then(
        function(pages) {
            res.render('top', {
                username: req.user ? req.user.username : null,
                showActionButtons: req.isAuthenticated(),
                pages: pages
            });
        },
        function(err) {console.log(err);}
    );
};

exports.userTop = function (req, res) {
    PageRepo.getAllPagesByUsername(req.params.username).then(
        function(pages) {
            res.render('top', {
                username: req.user ? req.user.username : null,
                showActionButtons: req.isAuthenticated(),
                pages: pages
            });
        }
    );
};
