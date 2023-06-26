export const compare = (a, b) => {
    if(a[Symbol.iterator]) {
      const l = Math.min(a.length, b.length);
      for(let i = 0; i < l; i++) {
        const cmp = a[i] - b[i];
        if(cmp) return cmp
      }
      return a.length - b.length
    }
  
    return a < b ? -1 : a > b ? 1 : 0
}
   
function has(range, name) {
return Object.hasOwnProperty.call(range, name)
}

function hasKey(range, name) {
return Object.hasOwnProperty.call(range, name) && name
}
  
export const lowerBoundKey = range => hasKey(range, 'gt')
|| hasKey(range, 'gte')
|| hasKey(range, 'min')
|| (range.reverse ? hasKey(range, 'end') : hasKey(range, 'start'))
|| undefined
  
export const lowerBound = (range, def) => {
    const k = lowerBoundKey(range);
    return k ? range[k] : def
  }
  
export const lowerBoundInclusive = range => has(range, 'gt') ? false : true
  
export const upperBoundInclusive =
    range => (has(range, 'lt') /*&& !range.maxEx*/) ? false : true
  
export const lowerBoundExclusive =
    range => !lowerBoundInclusive(range)
  
export const upperBoundExclusive =
    range => !upperBoundInclusive(range)
  
export const upperBoundKey = range => hasKey(range, 'lt')
|| hasKey(range, 'lte')
|| hasKey(range, 'max')
|| (range.reverse ? hasKey(range, 'start') : hasKey(range, 'end'));
  
export const upperBound = (range, def) => {
    const k = upperBoundKey(range);
    return k ? range[k] : def
};
  
export const start = (range, def) => range.reverse ? upperBound(range, def) : lowerBound(range, def);
export const end = (range, def) => range.reverse ? lowerBound(range, def) : upperBound(range, def);
export const startInclusive = range => range.reverse
? upperBoundInclusive(range)
: lowerBoundInclusive(range);

export const endInclusive = range => range.reverse
? lowerBoundInclusive(range)
: upperBoundInclusive(range);
 
export const toLtgt = function(range, _range = {}, map = (x) => x, lower, upper) {
    const defaults = arguments.length > 3;
    lowerBoundKey(range)
    upperBoundKey(range)
    if(lb) {
      if(lb === 'gt') _range.gt = map(range.gt, false)
      else            _range.gte = map(range[lb], false)
    }
    else if(defaults)
      _range.gte = map(lower, false)

    if(ub) {
      if(ub === 'lt') _range.lt = map(range.lt, true)
      else            _range.lte = map(range[ub], true)
    }
    else if(defaults)
      _range.lte = map(upper, true)

    if(range.reverse != null)
      _range.reverse = !!range.reverse

    //if range was used mutably
    //(in level-sublevel it's part of an options object
    //that has more properties on it.)
    if(has(_range, 'max'))   delete _range.max
    if(has(_range, 'min'))   delete _range.min
    if(has(_range, 'start')) delete _range.start
    if(has(_range, 'end'))   delete _range.end

    return _range
  }
  
export const contains = (range, key, comparee=compare) => {
    
    // to be compatible with the current abstract-leveldown tests
    // nullish or empty strings.
    // I could use !!val but I want to permit numbers and booleans,
    // if possible.

    const lb = lowerBound(range);
    if(lb) {
      var cmp = comparee(key, lb)
      if(cmp < 0 || (cmp === 0 && lowerBoundExclusive(range)))
        return false
    }
  
    const ub = upperBound(range);
    if(ub) {
      var cmp = comparee(key, ub)
      if(cmp > 0 || (cmp === 0) && upperBoundExclusive(range))
        return false
    }
  
    return true
  }
  
export const filter = (range, compare) => key => contains(range, key, compare);
export {
    compare,
    lowerBoundKey,
    lowerBound,
    lowerBoundInclusive,
    upperBoundInclusive,
    lowerBoundExclusive,
    upperBoundExclusive,
    upperBoundKey,
    upperBound,
    start,
    end,
    startInclusive,
    endInclusive,
    toLtgt,
    contains,
    filter,
};
