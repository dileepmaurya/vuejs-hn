import firebase from './firebase'
import { Promise } from 'es6-promise'

class Store {
  constructor () {
    this.api = new firebase()
    this.items = {
      topstories: [],
      newstories: [],
      beststories: [],
    };
  }

  getTopStories = function () {
    return this.getStories('topstories');
  }

  getNewStories = function () {
    return this.getStories('newstories');
  }

  getBestStories = function () {
    return this.getStories('beststories');
  }

  getAskStories = function () {
    return this.getStories('askstories');
  }

  getShowStories = function () {
    return this.getStories('showstories');
  }

  getJobStories = function () {
    return this.getStories('jobstories');
  }

  getStories = function(type) {
    let that = this;

    return new Promise((resolve, reject) => {

      that.getItems(type).then((items) => {
        var promises = items.map(id => {
          return that.getItem(id).then((item) => {
            return item;
          }).catch((err) => {
            console.log(err)
          })
        })
        Promise.all(promises).then((values) => {
          // that.items[type] = [].concat(values);
          // console.log(that);
          resolve(values);
        })
      }).catch((err) => {
        console.log(err)
      })
    })
  }

  getItems = function(type) {
    return new Promise((resolve, reject) => {
      this.api.child(type).once('value', snapshot => {
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
