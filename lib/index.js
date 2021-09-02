const incstr = require( 'incstr' )
const hashsum = require( 'hash-sum' )

const DEFAULT_ALPHABET =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

let map = new Map()
const legalClassnameRegexp = /^[A-Za-z]/
let globalGenerate = null

// file should be relative path
exports.minify = function minify( file, localName, options = {} ) {
  const {
    alphabet = DEFAULT_ALPHABET,
    useHash = true,
    prefix = '',
    suffix = ''
  } = options

  if ( !globalGenerate ) {
    globalGenerate = incstr.idGenerator( {
      alphabet
    } )
  }

  let generator = map.get( file )

  if ( !generator ) {
    generator = {
      id: useHash ? hashsum( file ) : globalGenerate(),
      generate: incstr.idGenerator( {
        alphabet
      } )
    }

    map.set( file, generator )
  }

  // because hash length is always 8, so we don't need sep
  return ensureLegalClassname(
    `${ prefix }${ generator.generate() }${ useHash ? '' : '-' }${
      generator.id
    }${ suffix }`
  )
}

// only for test
exports.__reset = function () {
  map = new Map()
  globalGenerate = null
}

function ensureLegalClassname( classname ) {
  if ( !legalClassnameRegexp.test( classname ) ) {
    return `_${ classname }`
  }

  return classname
}
