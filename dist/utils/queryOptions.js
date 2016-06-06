// Generated by CoffeeScript 1.10.0

/* jshint node:true */


/* jshint -W097 */

(function() {
  'use strict';
  var _queryOptionsDefaults, errors, mergeOptions, normalizeOptions,
    slice = [].slice,
    hasProp = {}.hasOwnProperty;

  errors = require('./errors');

  mergeOptions = function() {
    var args, i, index, key, options, ref, result;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (args.length === 0) {
      return {};
    }
    result = {};
    for (index = i = ref = args.length - 1; ref <= 0 ? i <= 0 : i >= 0; index = ref <= 0 ? ++i : --i) {
      options = args[index];
      for (key in options) {
        if (!hasProp.call(options, key)) continue;
        result[key] = options[key];
      }
    }
    return result;
  };

  _queryOptionsDefaults = {
    QueryType: 'DMQL2',
    Format: 'COMPACT',
    Count: 1,
    StandardNames: 0,
    RestrictedIndicator: '***',
    Limit: 'NONE'
  };

  normalizeOptions = function(queryOptions) {
    if (!queryOptions) {
      throw errors.RetsParamError('search', 'queryOptions is required.');
    }
    if (!queryOptions.SearchType) {
      throw errors.RetsProcessingError('search', 'searchType is required (ex: Property');
    }
    if (!queryOptions["Class"]) {
      throw errors.RetsProcessingError('search', 'class is required (ex: RESI)');
    }

    if (!queryOptions.Query) {
      throw errors.RetsProcessingError('search', 'query is required (ex: (MatrixModifiedDT=2014-01-01T00:00:00.000+) )');
    }

    return mergeOptions(queryOptions, _queryOptionsDefaults);
  };

  module.exports = {
    mergeOptions: mergeOptions,
    normalizeOptions: normalizeOptions
  };

}).call(this);
