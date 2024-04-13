const router = require('express').Router();
const controller = require('../../controllers/authController');

router.route('/login').post(controller.login)
router.route('/signup').post(controller.createNewUser)
router.route('/logout').get(controller.logOut)
router.route('/user').get(controller.getUserInfo).patch(controller.updatePwd).delete(controller.deleteUser)

module.exports = router;