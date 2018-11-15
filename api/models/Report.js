n/**
 * Report.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id:{
      type: 'string',
      required: true,
      unique: true
    },

    date: {
      type: 'string',
      required: true
    },

    category: {
      type:'string',
      required: true
    },
    
    message:{
      type:'string',
      required: false
    }
    

  },

};

