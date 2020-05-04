module.exports = class Cache {

  constructor(fn) {
    this.cache = new Map();
    this.fn = fn;
  }

  async process(...obj) {

    let key = JSON.stringify(obj);

    if (!this.cache.has(key)) {

      let result = await this.fn(...obj);
      this.cache.set(key, result);

      return result;
    }

    console.log(this.cache)

    return this.cache.get(key);
  }

<<<<<<< HEAD
  processSync(...obj) {
=======
  processSync() {

>>>>>>> 3f207d278ae8394754b0a6e8d15063fcb2056c50
    let key = JSON.stringify(obj);

    if (!this.cache.has(key)) {
  
      let result = this.fn(...obj);
      this.cache.set(key, result);

      return result;
    }

    return this.cache.get(key);
  }

}

/*

module.exports.addCachingToSync = (fn) => {

  let cache = new Map();

  return (...obj) => {

    let key = JSON.stringify(obj);

    if (!this.cache.has(key)) {

      let result = this.fn(...obj);
      this.cache.set(key, result);

      return result;
    }

    return this.cache.get(key);
  }
}

module.exports.addCachingToAsync = (fn) => {

  let cache = new Map();

  return async (...obj) => {

    let key = JSON.stringify(obj);

    if (!this.cache.has(key)) {

      let result = await this.fn(...obj);
      this.cache.set(key, result);

      return result;
    }

    return this.cache.get(key);
  }
}

*/