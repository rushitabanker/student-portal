const Tests = require('../models/testModel')
const Users = require('../models/userModel')
const Marks = require('../models/marksModel')

const createTest = async(req,res) => {
    try {
        const {sub,std,date,board,medium,chap,totalMarks} = req.body
        //validation

        //Adding info to test db
        const test = await Tests.create({date, std,sub, medium,board,chap,totalMarks})

        // Add info to marks table
        let users = []
        const tempUsers = await Users.find({std:test.std,medium:test.medium,board:test.board})
        //subject validation
        tempUsers.map((user) => {
            user.sub.map((subb) => {
                if(subb === test.sub) {
                    users = [...users,user]
                    // console.log('hello');
                }
            })
        })

        const userFunc = (users) => {
            const promises = users.map(async (user) => {
                    const marks = await Marks.create({
                    testId:test._id,
                    userId:user._id,  
                    userName:user.firstname + ' ' + user.lastname,
                    marks:0              
                })
            });
            return Promise.all(promises)
        }

        userFunc(users)


        res.status(201).json({test:test,users:users,msg:"Success"})  
        
    } catch (err) {
        res.status(500).json({msg : err.message})        
    }
}

const getTests = async(req,res) => {
    try {
        const tests = await Tests.find()
        res.status(201).json({tests})
        
    } catch (err) {
        res.status(500).json({msg : err.message})
    }
}

const getTest = async(req,res) => {
    try {
        const test = await Tests.findById(req.params.id)

        res.status(201).json({test})
        
    } catch (err) {
        res.status(500).json({msg : err.message})
    }
}

const deleteTest = async(req,res) => {
    try {
        const marks = await Marks.find({testId:req.params.id})

        const deleteFunc = (marks) => {
            const promises = marks.map(async (mark) => {                    
                await Marks.findByIdAndDelete(mark._id)     
            })
            return Promise.all(promises)
        }
        
        deleteFunc(marks)
                
        await Tests.findByIdAndDelete(req.params.id)

        res.status(201).json({msg:"Deleted successfully."})
        
    } catch (err) {
        res.status(500).json({msg : err.message})
    }
}

const editTest = async(req,res) => {
    try {
        const {sub,std,date,board,medium,chap,totalMarks} = req.body
        
        await Tests.findOneAndUpdate({_id:req.params.id},{sub,std,date,board,medium,chap,totalMarks})
        
        res.status(201).json({msg:'Success.'})
        
    } catch (err) {
        res.status(500).json({msg : err.message})
    }
}


module.exports = {getTests, createTest,deleteTest, editTest, getTest}