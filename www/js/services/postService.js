'use strict';

app.factory('PostService', function($http, $rootScope, $q, Config) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [{
    content: "hello michael",
    created_at: moment(new Date("2015-12-24T04:01:18.828Z")).fromNow(),
    id: "567b6e0e990c04114e3d3fff",
    images: [{src: 'img/i1.jpg'}, {src: 'img/i2.jpg'}, {src: 'img/i3.jpg'}, {src: 'img/i4.jpg'}, {src: 'img/i1.jpg'}, {src: 'img/i2.jpg'}, {src: 'img/i3.jpg'}, {src: 'img/i4.jpg'}],
    user:{
      uid: "567a11bc6d7ca1142e8e2640",
      username: "michael@bond.co",
      face: 'img/ben.png'
    },
    likes: [
      {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }
    ],
    comments: [
      {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '太牛逼了',
        created_at: "2015-12-23T04:01:18.828Z"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '赞一个',
        created_at: "2015-12-23T04:01:18.828Z"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '梁山圈不孬',
        created_at: "2015-12-23T04:01:18.828Z"
      }
    ]
  }, {
    content: "hello emily",
    created_at: moment(new Date("2015-12-23T04:01:18.828Z")).fromNow(),
    id: "567b6e0e990c04114e3d3ffe",
    images: [{src: 'img/i2.jpg', sub: 'hello emily'}],
    user:{
      uid: "567a11bc6d7ca1142e8e2640",
      username: "michael@bond.co",
      face: 'img/max.png'
    },
    likes: [
      {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }
    ],
    comments: [
      {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '太牛逼了',
        created_at: "2015-12-23T04:01:18.828Z"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '赞一个',
        created_at: "2015-12-23T04:01:18.828Z"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '梁山圈不孬',
        created_at: "2015-12-23T04:01:18.828Z"
      }
    ]
  }, {
    content: "hello melody",
    created_at: moment(new Date("2015-12-24T22:01:18.828Z")).fromNow(),
    id: "567b6e0e990c04114e3d3ffc",
    images: [{src: 'img/i3.jpg'}, {src: 'img/i4.jpg'}],
    user:{
      uid: "567a11bc6d7ca1142e8e2640",
      username: "michael@bond.co",
      face: 'img/perry.png'
    },
    likes: [
      {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }
    ],
    comments: [
      {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '太牛逼了',
        created_at: "2015-12-23T04:01:18.828Z"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '赞一个',
        created_at: "2015-12-23T04:01:18.828Z"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '梁山圈不孬',
        created_at: "2015-12-23T04:01:18.828Z"
      }
    ]
  }, {
    content: "hello mat",
    created_at: moment(new Date("2015-11-24T04:01:18.828Z")).fromNow(),
    id: "567b6e0e990c04114e3d3ffa",
    images: [],
    user:{
      uid: "567a11bc6d7ca1142e8e2640",
      username: "michael@bond.co",
      face: 'img/perry.png'
    },
    likes: [
      {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co"
      }
    ],
    comments: [
      {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '太牛逼了',
        created_at: "2015-12-23T04:01:18.828Z"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '赞一个',
        created_at: "2015-12-23T04:01:18.828Z"
      }, {
        uid: "567a11bc6d7ca1142e8e2640",
        username: "michael@bond.co",
        content: '梁山圈不孬',
        created_at: "2015-12-23T04:01:18.828Z"
      }
    ]
  }];

  return {
    create: function(data) {
      if (data.images.length > 0) {
        data.images = JSON.stringify(data.images);
      } else {
        delete data.images;
      }
      console.log(data);
      return $q(function(resolve, reject) {
        $http.post(Config.apiEndpoint() + 'api/v1/posts',
          data,
          {
            headers: {
              'pk': $rootScope.keys.pk,
              'sk': $rootScope.keys.sk
            }
        })
        .success(function(data, status, headers, config) {
          resolve(data);
        })
        .error(function(data, status, headers, config) {
          reject(data);
        });
      });
    },
    all: function() {
      return $q(function(resolve, reject) {
        $http.get(Config.apiEndpoint() + 'posts')
        .success(function(data, status, headers, config) {
          resolve(data);
        })
        .error(function(data, status, headers, config) {
          reject(data);
        });
      });
    },
    getTwenty: function(created_at) {
      return $q(function(resolve, reject) {
        $http.get(Config.apiEndpoint() + 'twenty-posts/' + created_at)
        .success(function(data, status, headers, config) {
          resolve(data);
        })
        .error(function(data, status, headers, config) {
          reject(data);
        });
      });
    },
    getNew: function(from_now) {
      return $q(function(resolve, reject) {
        $http.get(Config.apiEndpoint() + 'new-posts/' + from_now)
        .success(function(data, status, headers, config) {
          resolve(data);
        })
        .error(function(data, status, headers, config) {
          reject(data);
        });
      });
    },
    like: function(post) {
      return $q(function(resolve, reject) {
        $http.post(Config.apiEndpoint() + 'api/v1/posts/' + post._id + '/likes',
          {
            like_from: $rootScope.user._id
          },
          {
            headers: {
              'pk': $rootScope.keys.pk,
              'sk': $rootScope.keys.sk
            }
        })
        .success(function(data, status, headers, config) {
          resolve(data);
        })
        .error(function(data, status, headers, config) {
          reject(data);
        });
      });
    },
    comment: function(post) {
      return $q(function(resolve, reject) {
        $http.post(Config.apiEndpoint() + 'api/v1/posts/' + post._id + '/comments',
          {
            text: post.newComment,
            comment_from: $rootScope.user._id,
            reply_to: post.reply_to
          },
          {
            headers: {
              'pk': $rootScope.keys.pk,
              'sk': $rootScope.keys.sk
            }
        })
        .success(function(data, status, headers, config) {
          resolve(data);
        })
        .error(function(data, status, headers, config) {
          reject(data);
        });
      });
    },



    remove: function(post) {
      posts.splice(posts.indexOf(post), 1);
    },
    get: function(postId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(postId)) {
          return posts[i];
        }
      }
      return null;
    }
  };
});
