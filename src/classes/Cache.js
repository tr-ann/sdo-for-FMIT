class Cache {

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

  processSync(...obj) {
    let key = JSON.stringify(obj);

    if (!this.cache.has(key)) {
  
      let result = this.fn(...obj);
      this.cache.set(key, result);

      return result;
    }

    return this.cache.get(key);
  }

}

module.exports = Cache;