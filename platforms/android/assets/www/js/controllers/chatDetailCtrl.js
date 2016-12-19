'use strict';

app.controller('ChatDetailCtrl', function($scope, $rootScope, $state, $stateParams, ChatService, $ionicHistory) {
  function gotoBottom(id){
    setTimeout(function(){
      var ele = document.getElementById(id)
      ele.scrollTop = ele.scrollHeight
    }, 0)
  }
  $scope.gotoBottom = gotoBottom
  $scope.calendar = function(t) {
    return moment(t).calendar()
  }
  $scope.messages = [];

  $scope.$on('$ionicView.enter', function(e) {
    ChatService.getChatByCid($stateParams.chatId).then(function(chat) {
      $scope.chat = chat
        ChatService.getMessagesByCid($stateParams.chatId).then(function(messages) {
          if ($scope.messages.length < 1 || chat.unread_by.indexOf($rootScope.user._id) > -1) {
            $scope.messages = $scope.messages.concat(messages)
            setTimeout(function() {
              gotoBottom('chat-message-list')
            }, 0)
          }
        }, function(error) {})
    }, function(err) {})
  })

  $rootScope.$on('onResume', function(){
    if ($state.current.name == 'tab.chat-detail') {
      ChatService.getChatByCid($stateParams.chatId).then(function(chat) {
        $scope.chat = chat
        ChatService.getMessagesByCid($stateParams.chatId).then(function(messages) {
          $scope.messages = $scope.messages.concat(messages)
          setTimeout(function() {
            gotoBottom('chat-message-list')
            if ($scope.chat.unread_by.indexOf($rootScope.user._id) > -1) {
              $rootScope.chatBadge = $rootScope.chatBadge > 0 ? ($rootScope.chatBadge-1) : 0;
            }
          }, 0)
        }, function(error) {})
      }, function(err) {})
    }
  })

  $scope.input = {
    message: ''
  }
  $scope.sendMessage = function() {
    var messagePayload = {
      chat: $scope.chat._id,
      content: $scope.input.message,
      from: $rootScope.user._id
    }
    $scope.input = {
      message: ''
    }
    ChatService.createChatMessage(messagePayload).then(function(res) {
      if (res.success) {
        res.message.from = $rootScope.user
      }
      $scope.messages.push(res.message)
      setTimeout(function() {
        gotoBottom('chat-message-list')
      }, 0)
    }, function(error) {})
  }
})
