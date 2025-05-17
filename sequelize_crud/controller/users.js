
const { where } = require('sequelize');
const db = require('../models/index');
const { json } = require('body-parser');
const {User,user2} = db ;

 
  const postdata =  async (req,res) => {
    const {name,age,courseid} = req.body ; 
    try{
        const newcreate =  await User.create({name,age,courseid})

        res.status(200).json("create data is created");        
       }
       catch(Error){
        res.send(500).send(Error)
       };
}

const postone = async (req,res)=>{
    const {courseid,tech,email,userId} = req.body ;
    try{
        const data = await user2.create({courseid,tech,email,userId});
        res.status(200).json("T2 Craete data succesfull")
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

const postbulk = async (req,res)=>{
    const users = req.body ;
    try{
        const data = await User.bulkCreate(users)
        res.status(200).json("Your bulk post create Success")
    }
    catch(err){
        res.status(500).json(err.message)
    }
} 

const posts = async (req,res)=>{
    const user = req.body ;
    try{
        const data = await user2.bulkCreate(user)
        res.status(200).json("T2 datas is bulkposted")
    }
    catch(err){
        res.status(500).json('ERROR '+err.message)
    }
}

const finds = async (req,res)=>{
   // const {id} = req.params ;
    try{
        const data = await user2.findAll({include : [{model : User , as:'T2'}]})
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

const getdatas = async (req,res) => {
    try{
        const get =await User.findAll({attributes:['id','name','age'],order:[['age','ASC']],limit:5,offset:3})
        res.status(200).json(get)
    }
    catch(err) {
        res.status(500).json(err.message)
    }
}

const getdata = async (req,res) => {

    const {id} = req.params;
    try{

        const data = await User.findByPk(id);

        if(data)
            {
                res.status(200).json(data)
            }
        else
            {
            res.status(400).json({message:"User not found"})
            }
       }
    catch(err){
        res.status(400).json(err.message)
        
    }
}

const getname = async(req,res)=>{
    const {name} = req.body ;
    try{
        const data = await User.findOne( { where:{name} } )
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404)
        }
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

const updatedata = async(req,res)=>{
    const {id} = req.params ;
    const {name,age} = req.body ;
    try{
        const data = await User.update({name,age},{where:{id}})
        res.status(200).json(data)
    }
    catch(err){
        res.status(404).send(err)
    }
}

const destroy = async (req,res)=>{
    const {id} = req.params ;
    const {name} = req.body ;
    try{
        const data = await User.destroy({where:{name}})
        res.status(200).json(data)
    }
    catch(err){
        res.status(404).json(err)
    }
}



module.exports = {getdatas,postdata,getdata,getname,updatedata,postbulk,destroy,posts,postone,finds};   


