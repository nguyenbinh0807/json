//muốn dùng fetch phải hiểu promise
//font-end: xd giao diện người dùng
//back-end: xd logic xử lý + cở sở dữ liệu
//back end trả về api cho font end
//font end fetch api ---> JSON/XML
//JSON.parse ---> JS type
//API(URL) là application programming interface
var postapi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postapi) //fetch la mot promise
.then(function(response) {
       return response.json(); 
})
.then(function(post) {
	var result = post.map(function(value) {
		return `
		  <li>
		    <h2>${value.title}</h2> 
		    <p>${value.body}</p>
		  </li>	`
	})
	var html = result.join(' ');
	document.getElementById('api-post').innerHTML = html;
})


