const { createMinify, minify: defaultMinify } = require( '../' )

test( 'exports', () => {
  expect( typeof createMinify ).toBe( 'function' )
  expect( typeof ( createMinify() ) ).toBe( 'function' )
  expect( typeof defaultMinify ).toBe( 'function' )
} )

test( `basic`, () => {
  const minify = createMinify()

  const class0 = minify( 'src/button/index.module.less', 'button' )
  const class1 = minify( 'src/button/index.module.less', 'text' )
  expect( class0 ).toBe( 'a2715f34c' )
  expect( class1 ).toBe( 'b2715f34c' )
} )

test( `alphabet`, () => {
  const minify = createMinify()

  const options = {
    useHash: false
  }
  const class0 = minify( 'src/button/index.module.less', 'button', options )
  const class1 = minify( 'src/button/index.module.less', 'text', options )
  expect( class0 ).toBe( 'a-a' )
  expect( class1 ).toBe( 'b-a' )
} )

test( `custom alphabet`, () => {
  const minify = createMinify()

  const options = {
    alphabet: 'cde',
    useHash: false
  }
  const class0 = minify( 'src/button/index.module.less', 'button', options )
  expect( class0 ).toBe( 'c-c' )
} )

test( `prefix and suffix`, () => {
  const minify = createMinify()

  const options = {
    useHash: false,
    prefix: 'x-',
    suffix: '-y'
  }
  const class0 = minify( 'src/button/index.module.less', 'button', options )
  const class1 = minify( 'src/button/index.module.less', 'text', options )
  expect( class0 ).toBe( 'x-a-a-y' )
  expect( class1 ).toBe( 'x-b-a-y' )
} )
