const { createHash } = require( 'crypto' )

function getHash( content = '' ) {
  return createHash( 'sha256' )
    .update( content )
    .digest( 'hex' )
    .slice( 0, 8 ) // eslint-disable-line no-magic-numbers
}

const legalClassnameRegexp = /^[A-Za-z]/
function ensureLegalClassname( classname ) {
  if ( !legalClassnameRegexp.test( classname ) ) {
    return `_${ classname }`
  }

  return classname
}

exports.ensureLegalClassname = ensureLegalClassname
exports.getHash = getHash
