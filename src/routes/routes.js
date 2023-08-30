const express = require("express");

const router = express.Router();
const path = require("path");

const blogs = require("../data/blogs");

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../views/blogHome.html"));
  res.render('home');
});

router.get("/blog", (req, res) => {
  // res.sendFile(path.join(__dirname, "../templates/template.html"));
  res.render('blogHome',{blogs: blogs});
});

router.get("/blogpost/:slug", (req, res) => {
  let myblog =  blogs.filter((e)=>{
    return e.slug == req.params.slug
  })
  // res.sendFile(path.join(__dirname, "../templates/blogpage.html"));
  res.render('blogPage',{
    title: myblog[0].title,
    content: myblog[0].content
  })
});


module.exports = router;
