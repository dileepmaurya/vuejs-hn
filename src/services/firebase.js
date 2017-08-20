import Firebase from 'firebase/app'
import Database from 'firebase/database'

const firebase = function() {
	const config = {
      databaseURL: 'https://hacker-news.firebaseio.com'
    }
    Firebase.initializeApp(config)

    const version = '/v0'

    return Firebase.database().ref(version)
} 

export default firebase