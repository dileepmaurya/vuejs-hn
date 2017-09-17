import firebase from './firebase'
import { Promise } from 'es6-promise'

let instance = null;

class Store {
  constructor () {
    if(!instance){
      instance = this;
    }

    this.api = new firebase()
    this.items = {};
    this.storiesPerPage = 50;

    return instance;
  }

  getTotalItem = function(type) {
    if (typeof this.items[type] !== 'undefined') {
      return this.items[type].length;
    }

    return 0;
  }

  getStoriesPerPage = function () {
    return this.storiesPerPage
  }

  setStoriesPerPage = function (storiesPerPage) {
    this.storiesPerPage = storiesPerPage;
  }

  getPageItems = function (type, page = 1) {
    const start = (page - 1) * this.storiesPerPage
    const end = page * this.storiesPerPage
    return this.items[type].slice(start, end);
  }

  fetchDataByPage = function (type, page = 1) {
    return new Promise((resolve, reject) => {
      if (typeof this.items[type] !== 'undefined' && this.items[type].length) {
        resolve(this.getPageItems(type, page));
      } else {
        this.getStories(type).then((items) => {
          resolve(this.getPageItems(type, page));
        }).catch(function(err){
            console.log(err)
        })
      }
    })
  }

  getStories = function (type) {
    return new Promise((resolve, reject) => {

      this.getItems(type).then((items) => {
        var promises = items.map(id => {
          return this.getItem(id).then((item) => {
            return item;
          }).catch((err) => {
            console.log(err)
          })
        })

        Promise.all(promises).then((values) => {
          this.items[type] = [].concat(values);
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
