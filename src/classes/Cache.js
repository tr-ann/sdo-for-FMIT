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

    return this.cache.get(key);
  }

  processSync() {

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