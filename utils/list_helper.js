//let blogs = {	
 //  "title": "Villen 2 blogi",
 //  "author": "Ville",
 //  "url": "http://localhost",
 //  "likes": 6
//}
const dummy = (blogs) => {
   
	//console.log(dummy.length)
	//return dummy.length//...
	return dummy.length
	//console.log(dummy)
}

const totalLikes = (blogs) => {
   
	//return dummy.length//...
	//return blogs['likes']
    return blogs[0].likes 
    //return sum(blogs.likes) 
	//return 5
	//ummy.length
	//console.log(dummy)
}
const totalManyLikes = (blogs) => {
    let su = 0
    //let su2 = 0
    for (i = 0; i < blogs.length; i++) {
       su = blogs[i].likes + su
       
    } 
    //blogs.forEach( => {
    //   su = su + blogs.likes
    //})
	return su 
	//return blogs[0].likes 
}
const favoriteBlog = (blogs) => {
   let suurin = ''
   let su = 0
   let su2 = 0
   for (i = 0; i < blogs.length; i++) {
       su = blogs[i].likes
       if (su > su2){
          suurin = blogs[i]
          su2 = su
       }
    }
    return suurin   
}

module.exports = {
	dummy,
	totalLikes,
	totalManyLikes,
	favoriteBlog
}