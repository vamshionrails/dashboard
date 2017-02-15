// load the things we need
var express = require('express');
var app = express();
var fs = require('fs');

const inventories = [
        { id: 1, name: 'host1'  },
        { id: 2, name: 'host2'  },
        { id: 3, name: 'host3'  }
    ]

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
 app.get('/', function(req, res) {
    
    var tagline = "Dashboard";

    res.render('pages/index', {
        inventories: inventories,
        tagline: tagline
    });
});


//inventory with id
 app.get('/inventory/:id', (req, res) => {
  // find the post in the `posts` array
  const inventory = inventories.filter((inventory) => {
    return inventory.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('partials/inventory', { 
    name: inventory.name,
    inventories: inventories
  })
})




// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
