const incstr = require( 'incstr' )
const { getHash, ensureLegalClassname } = require( './shared' )

const DEFAULT_ALPHABET =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

function createMinify() {
  const map = new Map()
  let globalGenerate = null

  // file should be relative path
  return function minify( file, localName, options = {} ) {
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
        id: useHash ? getHash( file ) : globalGenerate(),
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
}

exports.createMinify = createMinify
exports.minify = createMinify
