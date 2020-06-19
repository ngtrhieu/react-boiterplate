import _ from 'lodash';

/**
 * promisify setTimeout
 */
export default ms =>
  new Promise(resolve =>
    _.isNumber(ms) && ms > 0 ? setTimeout(resolve, ms) : setImmediate(resolve),
  );
