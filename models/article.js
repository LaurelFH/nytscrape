// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// make ArticleSchema a Schema
var ArticleSchema = new Schema({

  // title: of the article from nytimes.com
  title: {
    type: String
  },
//the publish date and time of the artilce
  date:{

    type:  Date
  },

  //url of the article on the NYT
  url:{

    type: String
  }
});



// Create the Article  model with the BookSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model so we can use it on our server file.
module.exports = Article;
