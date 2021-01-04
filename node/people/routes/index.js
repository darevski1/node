var express = require('express');
var router = express.Router();
const faker = require('faker');

const app = express();




const users = [
  {
    id: 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  },
  {
    id: 2,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  },
]

/* GET home page. */
router

  // get all post
  .get('/userlist', (req, res) => {
    res.send({
      message: "This is list of all register users",
      items: users,
    })
  })

  // get single post
  .get("/userlist/:id", (req, res) => {
    const findid = users.some(user => user.id === parseInt(req.params.id))

    if (!findid) {
      // throw new Error(`The request user with id of ${findid} was not found`)
      return res.json(`The request user with id of ${findid} was not found`);
    }
    else {
      res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }
    // res.send(req.params.id);
  })


  // create new post 
  .post('/userlist', (req, res) => {

    if (req.body.randomName == "") {
      let msg = "Please provide first name"
      throw new Error(msg);
    }
    else {
      // find the bigest id
      let max = 0;
      users.forEach(user => {
        if (user.id > max) {
          max = user.id;
          console.log(max)
        }
      });
      // new user object
      let newuser = {
        id: max + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      }
      // users.push(res.body)
      users.push(newuser)
      // res.json(newuser)
      res.send({
        message: "We just update the user list",
        items: users,
      })
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    }
  })
  // update user
  .patch("/userlist/:id", (req, res) => {
    const findid = users.some(user => user.id === parseInt(req.params.id))

    if (findid) {
      const updateMember = (req.body);

      users.forEach(user => {
        if (user.id === parseInt(req.params.id)) {
          user.randomName = updateMember.randomName ? updateMember.randomName : user.randomName;
          // user.randomEmail = updateMember.randomEmail ? updateMember.randomEmail : user.randomEmail;
          return res.json("Success")
        }

      })

    }

  })


  .delete("/userlist/:id", (req, res) => {
    const findid = users.some(user => user.id === parseInt(req.params.id))

    if (findid) {
      res.json(users.filter(user => user.id !== parseInt(req.params.id)))
    } else {
      throw new Error();
    }

  });

module.exports = router;
