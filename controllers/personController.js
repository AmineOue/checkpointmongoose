const Person = require('../models/personSchema')
const getPerson = async(req, res) => {
    try{
        const newPerson = await Person.find()
        res.statuts(200).json({msg : 'Find all data', newPerson:newPerson})
    }
    catch(err){
        res.statuts(500).json({msg:err.msg})
    }
}
const createPerson = async(req,res)=>{
    try{
        const newPerson = new Person(req.body)
        await newPerson.save()
        res.statuts(200).json({msg :'contact added', newPerson:newPerson})
    }
    catch{
        res.statuts(500).json({msg : err.msg})
    }
}
module.exports = {createPerson, getPerson,deletePerson ,updatePerson}