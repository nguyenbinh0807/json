//sync(đồng bộ) là nào trước thì xử lý
//async(bất đòng bộ)
//leep(ngủ)
//setTimeout, setInterval, fetch, XMLHttpRequest, reading file, request animation frame
//callback hell
/**setTimeout(function() {
	console.log(1);
	setTimeout(function() {
		console.log(2);
		setTimeout(function() {
			console.log(3);
		}, 1000)
	}, 1000)
}, 1000)*/
//cách hoạt động của một promise
//new promise
//trong promise là một function có hai tham số là resole, reject
//var promise = new Promise(function(resole, reject) {
       //excutor
       //resole() thành công
       //reject() thất bại
  //        resole(123)
//})
//promise có bạn trạng thái
//1. pendding 
//2. fulfilled thể hiện thành công
//3. rejected thất bại hoàn toàn
/**promise
      .then(function(param) {
            //then thực khi resole
	    console.log(param);
      })
      .catch(function() {
            //catch thực hiện khi thất bại
	    console.log('thất bại');
      })
      .finally(function() {
           console.log('done!')
      })*/
      /** ví dụ 2
      var promise = new Promise(function(resole, reject) {
                  resole()
      })
      promise
      .then(function() {
           return 1;
      })
      .then(function(param) {
             console.log(param);
	     return 2;
      })
      .then(function(param) {
	      console.log(param);
	      return 3;
      })*/
      // ví dụ 3
     /** var promise = new Promise(function(resole) {
	      resole()
      })
      promise
      .then(function() {
	      return new Promise(function(resole) {
		      setTimeout( () => {
			     resole([
				     1,2,3
			     ])
		      }, 1000)
	      })
      })
      .then(function(param) {
	      console.log(param);
      })*/
      //ví dụ 4: xuất 1, 2, 3 sau mỗi lượt 1s sử dụng promise
    /**  function sleep(ms) {
          return new Promise(function(resole) {
                    setTimeout(resole, ms);
          })
     }
     sleep(1000)
     .then(function() {
          console.log(1);
          return sleep(1000);
     })
     .then(function() {
          console.log(2);
          return sleep(1000);
     })
     .then(function() {
          console.log(3);
          
     })*/
     /**function sleep(ms) {
          return new Promise(function(resole) {
               setTimeout(resole, ms);
          })
     }
     sleep(1000)
     .then(function() {
          console.log(1);
          return sleep(1000);
     })
      .then(function() {
          console.log(2);
          return new Promise(function(resole, reject) {
               reject(
                    'co loi!'
               );
          })
     })
      .then(function() {
          console.log(3);
          return sleep(1000);
     })
     .catch(function(param) {
                 console.log(param);
     })*/
     /**promise.resole
      * promise.reject
      * promise.all
      */
     /**var promise = Promise.resolve('thanh cong');
     promise
     .then(function(value) {
          console.log(value);
     })*/
     /**var promise1 = new Promise(function(resole) {
          setTimeout(function() {
                     resole([1]);

          }, 1000)
     })
     var promise2 = new Promise(function(resole) {
          setTimeout(function() {
               resole([2, 3])
          }, 2000)
     })
     Promise.all([promise1, promise2])
     .then(function(result) {
          var resultconcat = result[0].concat(result[1]);
          console.log(resultconcat)
     })*/
var users = [
     {
          id: 1,
          name: 'the binh'       
     },
     {
         id: 2,
         name: 'son dang'
     },
     {
          id: 3,
          name: 'the minh'
     }
];
//the hien noi luu tru cmt
var comments = [
         {
              id: 1,
              user_id: 1,
              content: 'anh son chua ra video?'
         },
         {
              id: 2,
              user_id: 2,
              content: 'vua ra xong em oi!'
         },
            {
                 id: 3,
                 user_id: 1,
                 content: 'cam on anh'
            }
]
//lay cmt
//tu cmt lay user_id
//tu user_id lay ra user tuong ung

//fake api
  function getcoments() {
       return new Promise(function(resole) {
            setTimeout(function() {
                 resole(comments);
            }, 1000)
       })
  }

     function getuserbyids(userids) {
          return new Promise(function(resole) {
               var result = users.filter(function(user) {
                    return userids.includes(user.id);
               })
               setTimeout(function() {
                    resole(result);
               }, 1000)
          })
     }  

  getcoments()
  .then(function(comments) {
       var userids = comments.map(function(comment) {
            return comment.user_id;
       });   
     return  getuserbyids(userids)
       .then(function(users) {
             return {
                  users: users,
                  comments: comments,
             };
        })
})
.then(function(data) {
           var commentbox = document.getElementById('comments-box');
          var html = ' ';
           data.comments.forEach(function(comment) {
                      var user = data.users.find(function(user) {
                           return user.id === comment.user_id;
                      });
                      html += `<li>${user.name}: ${comment.content}</li>`
           })
           commentbox.innerHTML = html;
})