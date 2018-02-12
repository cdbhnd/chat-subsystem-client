if (typeof module !== 'undefined' && module.exports) {
    var chatApi = require("./chat.api.client");
} else {
    var chatApi = window.ChatApiClient;
}

(function () {

    var ca = new chatApi("https", "chat-subsystem.herokuapp.com", "aad04cbb-91e1-c5fb-a3d7-e587c2266afd", "5a5c8c878795ea34528e7de6");
    var credentials = {
        username: "paja",
        password: "paja2138"
    };
    var convId = null;
    var userId = null;

    chatAuthentification()
        .then(getConversations)
        .then(createConversation)
        .then(getConversations)
        .then(getOneConversation)
        .then(getUsers)
        .then(createUser)
        .then(getUsers)
        .then(getOneUser)
        .then(addUserInConversation)
        .then(getOneConversation)
        .then(sendMessage)
        .then(getAllMessages)
        .then(removeUserFromConversation)
        .then(getOneConversation)
        .then(deleteUser)
        .then(getUsers)
        .then(deleteConversation)
        .then(getConversations);

    /////////////////////////////////////////////////////

    function chatAuthentification() {
        print('Chat Authentification');
        return ca.authenticate(credentials.username, credentials.password)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function getConversations() {
        print('Get All Conversations');
        return ca.getConversations()
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function createConversation() {
        print('Create Conversation');
        return ca.createConversation("tesla")
            .then(function (res) {
                console.log(res);
                convId = res.message.id;
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function getOneConversation() {
        print('Get One Conversation');
        return ca.getConversation(convId)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function deleteConversation() {
        print('Delete Conversation');
        return ca.deleteConversation(convId)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function getUsers() {
        print('Get All Users');
        return ca.getUsers()
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function createUser() {
        print('Create User');
        return ca.createUser("Nikola", "Tesla", "Dzoni")
            .then(function (res) {
                console.log(res);
                userId = res.message.id;
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function getOneUser() {
        print('Get One User');
        return ca.getUser(userId)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function deleteUser() {
        print('Delete User');
        return ca.deleteUser(userId)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function addUserInConversation() {
        print('Add User To Conversation');
        return ca.addUserToConversation(userId, convId)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function removeUserFromConversation() {
        print('Remove User From Conversation');
        return ca.removeUserFromConversation(userId, convId)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function sendMessage() {
        print('Send Message');
        return ca.sendMessage(userId, convId, "Hello from the otherside")
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function getAllMessages() {
        print('Get All Messages');
        return ca.getMessages(userId, convId)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function print(title) {
        console.log();
        console.log('********************************************************');
        console.log(title);
        console.log('********************************************************');
        console.log();
    }
}());