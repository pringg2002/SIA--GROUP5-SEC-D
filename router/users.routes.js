const express = require("express")
const router = express.Router();


const user = [

{name: "Elroy V. Ravadon",
 id: 1,
  role: "user"
},
{name: "Mark Johnpaul Palmis",
 id: 2,
 role: "user"
},
{name: "Crystal Duenn Palopalo",
 id: 3,
  role: "user"
},
{name: "Rattanuel Joseph Z. Ortiz",
 id: 4,
  role: "user"
},
{name: "April Mae Castillon",
 id: 5,
  role: "user"
},
{name: "Dwyane Rasheed Partosa",
 id: 6,
  role: "user"
}

];

router.get("/", (req, res) => {
res.json(users);



});


module.exports = router;