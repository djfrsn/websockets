const redis = require('redis');
const promise = require('bluebird');

promise.promisifyAll(redis.RedisClient.prototype);
promise.promisifyAll(redis.Multi.prototype);

const client = () => {
  return new Promise((resolve, reject) => {
    const connector = redis.createClient({
      port: process.env.REDIS_PORT, // replace with your port
      host: process.env.REDIS_URL, // replace with your hostanme or IP address
      password: process.env.REDIS_PW
    });

    connector.on('error', () => {
      reject('Redis Connection failed');
    });

    connector.on('connect', () => {
      resolve(connector);
    });
  });
};
module.exports.client = client;

module.exports.fetchMessages = () => {
  return new Promise((resolve, reject) => {
    client().then(
      res => {
        res.lrangeAsync('messages', 0, -1).then(
          messages => {
            resolve(messages);
          },
          err => {
            reject(err);
          }
        );
      },
      err => {
        reject('Redis connection failed: ' + err);
      }
    );
  });
};

module.exports.addMessage = message => {
  return new Promise((resolve, reject) => {
    client().then(
      res => {
        res
          .multi()
          .rpush('messages', message)
          .execAsync()
          .then(
            res => {
              resolve(res);
            },
            err => {
              reject(err);
            }
          );
      },
      err => {
        reject('Redis connection failed: ' + err);
      }
    );
  });
};
