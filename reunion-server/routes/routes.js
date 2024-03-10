const express = require('express');

const router = express.Router();
const Person = require('../Models/person');

router.post('/post', async (req, res, next) => {
  try {
    const person = new Person({
      name: req.body.name,
      payPalName:req.body.payPalName,
      plusOne: req.body.plusOne,
      paid: req.body.paid
    })
    const personToSave = await person.save();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(personToSave);
    return personToSave;
    
  } catch (error) {
    res.status(400).json({message: error.message})
  }
  return null;
});

router.get('/getAll', async (req, res, next) => {
  try {
    const people = await Person.find();
    res.json(people);
    return people;
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

async function getOne(id) {
  try {
    const person = await Person.findById(id);
    console.log(person)
    return person;
  } catch (error) {
    console.error(error.message)
  }
}
router.get('/getOne/:id', getOne);

router.patch('/update/:id', async (req, res, next) => {
  try {
    // console.log(req.body.paid)
    const id = req.params.id
    const person = await getOne(id);
    const updatedPerson = {};
    updatedPerson['name'] = req.body.name ? req.body.name : person.name;
    updatedPerson['payPalName'] = req.body.payPalName ? req.body.payPalName : person.payPalName;
    updatedPerson['plusOne'] = req.body.plusOne ? req.body.plusOne : person.plusOne;
    updatedPerson['paid'] = req.body.paid !=null ? req.body.paid : person.paid;
    // console.log(updatedPerson)
    const options = { new: true };

    const result = await Person.findByIdAndUpdate(id, updatedPerson, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

router.delete('/delete/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const person = await Person.findByIdAndDelete(id);
    res.send(`Person with ${person.name} has been deleted.`)
  } catch (error) {
    res.status(400).json({message: error.message})
  }  
});

module.exports = router;
