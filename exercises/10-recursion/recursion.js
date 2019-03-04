const { departmentStores } = require('./recursion-departmentStores-data');
const { tree } = require('./recursion-tree-data');

/**
 * Using recursion, find the object in the node tree that has a given id.
 * You will be looping through the data in *recursion-find-id-data.json*.
 *
 * @param {number} id
 * @returns {Object} the object that the id is in
 *
 * @example
 * findId(1234);
 * // This should return:
 * {
 *    id: 567897,
 *    name: 'Consultants, Reviewers, and National Geographic Exploration',
 *    activityId: 'ZNRAE749BSD0CTGHY888SSSZ',
 *    nodeType: 'activity',
 *    suppressed: false,
 *    hidden: false
 * }
 */
const findId = (data, id) => {};

/**
 * Using recursion, remove the object from the node tree that has a given id.
 * You will be looping through the data in *recursion-delete-store.json*
 *
 * @param {number} id
 * @returns {Object} the entire data source, except it won't have the
 * object with the matching id
 *
 * @example
 * //deleteStore(567897);
 * // This should return:
 * {
 *   id: 1234567,
 *   store: 'Walmart',
 *   // ...
 * },
 * {
 *   branches: [
 *     // This branch is removed because it has id 567897
 *     {
 *       id: 567890,
 *       store: 'Walmart',
 *       // ...
 *     }
 *   ]
 * }
 */

const deleteStore = (stores, id) => {};

module.exports = {
  findId,
  deleteStore
};
