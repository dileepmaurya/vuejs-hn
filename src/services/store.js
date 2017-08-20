import firebase from './firebase'
import { Promise } from 'es6-promise'

class Store {
  constructor () {
    this.api = new firebase()
  }

  getTopStories = function () {
      return new Promise((resolve, reject) => {
        this.api.child('topstories').once('value', snapshot => {
          resolve(snapshot.val())
        }, reject)
      })
  }

  getItem = function (id) {
    return new Promise((resolve, reject) => {
      this.api.child('item/' + id).once('value', snapshot => {
        resolve(snapshot.val())
      }, reject)
    })
  }
}

export default Store
