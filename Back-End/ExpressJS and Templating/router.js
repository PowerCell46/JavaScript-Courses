const getAboutView = require("./controllers/aboutController");
const { getCreateView, postCreateView } = require("./controllers/createController");
const { getDetailsView } = require("./controllers/detailsController");
const { getErrorView } = require("./controllers/errorController");
const { getHomeView, postHomeView } = require("./controllers/homeController");

const router = require("express").Router();


/* #region Main */

router.route("/")
.get((req, res) => {
    // ... 
})
.post((req, res) => {
    // ...
})
.put((req, res) => {
    // ...
})
.delete((req, res) => {
    // ...
});
/* #endregion */

router.route("/")
.get(getHomeView)
.post(postHomeView);


router.get("/about", getAboutView);


router.route("/create")
.get(getCreateView)
.post(postCreateView);


router.route("/details/:id")
.get(getDetailsView);


router.route("*")
.get(getErrorView);


module.exports = router;