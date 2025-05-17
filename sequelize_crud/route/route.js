const express = require('express');
const router = express.Router();
const{getdata,postdata, getdatas, getname, updatedata, postbulk, destroy, posts,postone, finds}=require('../controller/users');


router.post('/post', postdata );
router.post('/postone', postone)
router.post('/postbulk', postbulk);
router.post('/posts', posts);
router.get('/finds', finds);
router.get('/getall', getdatas);
router.get('/getby/:id', getdata);
router.get('/get', getname);
router.put('/update/:id', updatedata)
router.delete('/destroy', destroy)




module.exports = router ;