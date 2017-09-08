import Firebase from 'firebase/app'
import Database from 'firebase/database'

const firebase = function() {
	const config = {
      databaseURL: 'https://hacker-news.firebaseio.com'
    }

    try {
    	Firebase.initializeApp(config)
    }catch(err) {
    	// we skip the "already exists" message which is
		// not an actual error when we're hot-reloading
		if (!/already exists/.test(err.message)) {
		console.error('Firebase initialization error', err.stack)
		}
    }
    
    const version = '/v0'

    return Firebase.database().ref(version)
} 

export default firebase