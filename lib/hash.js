const { createHash } = require( 'crypto' )

module.exports = function getHash( content = '' ) {
  return createHash( 'sha256' )
    .update( content )
    .digest( 'hex' )
    .slice( 0, 8 ) // eslint-disable-line no-magic-numbers
}
