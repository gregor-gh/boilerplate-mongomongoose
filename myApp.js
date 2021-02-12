const { Mongoose } = require('mongoose');

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true})
  .then(() => {
    console.log("MongoDB connected.")
  })
  .catch(e => console.log(e));
  
  const Schema = mongoose.Schema

  const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });
    
  const Person = mongoose.model("Person", personSchema);

  const createAndSavePerson = (done) => {
    const gregor = new Person({
      name: "Gregor",
      age: 28,
      favoriteFoods: ["Pizza","Chicken Nuggets","Ice Cream"]
    });
  
    gregor.save((err,data) => {
      if(err) return console.log(err);
      done(null,data)
    });
  };

  const arrayOfPeople = [
    {
      name: "Olivia",
      age: 26,
      favoriteFoods: ["Cheese","Wine","Chocolate"]
    },
    {
      name: "Louise",
      age:26,
      favoriteFoods: ["Chocolate","Choccies","Mayonaise"]
    },
    {
      name:"Gavin",
      age:26,
      favoriteFoods: ["Chicken","Burgers","Kebab"]
    }
  ];

  const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err,data) => {
      if(err)
        console.log(err);
      done(null , data);
    });
  };

  const findPeopleByName = (personName, done) => {
    Person.find({name: personName},(err,data) => {
      if(err)
        console.log(err);
      done(null, data);
    });
  };

  const findOneByFood = (food, done) => {
    done(null /*, data*/);
  };
    
    const findPersonById = (personId, done) => {
      done(null /*, data*/);
    };
    
    const findEditThenSave = (personId, done) => {
      const foodToAdd = "hamburger";
    
      done(null /*, data*/);
    };
    
    const findAndUpdate = (personName, done) => {
      const ageToSet = 20;
    
      done(null /*, data*/);
    };
    
    const removeById = (personId, done) => {
      done(null /*, data*/);
    };
    
    const removeManyPeople = (done) => {
      const nameToRemove = "Mary";
    
      done(null /*, data*/);
    };
    
    const queryChain = (done) => {
      const foodToSearch = "burrito";
    
      done(null /*, data*/);
    };
    
    /** **Well Done !!**
    /* You completed these challenges, let's go celebrate !
     */
    
    //----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------
    
    exports.PersonModel = Person;
    exports.createAndSavePerson = createAndSavePerson;
    exports.findPeopleByName = findPeopleByName;
    exports.findOneByFood = findOneByFood;
    exports.findPersonById = findPersonById;
    exports.findEditThenSave = findEditThenSave;
    exports.findAndUpdate = findAndUpdate;
    exports.createManyPeople = createManyPeople;
    exports.removeById = removeById;
    exports.removeManyPeople = removeManyPeople;
    exports.queryChain = queryChain;


/*
const db = mongoose.connection;

db.on("error",console.error.bind(console, "connection error:"));
db.once("open", () => {

  const kittySchema = new mongoose.Schema({
    name: String
  });

});
*/

