const { minify, __reset } = require( '../' )

test( `basic`, () => {
  __reset()

  const class0 = minify( 'src/button/index.module.less', 'button' )
  const class1 = minify( 'src/button/index.module.less', 'text' )
  expect( class0 ).toBe( 'a2715f34c' )
  expect( class1 ).toBe( 'b2715f34c' )
} )

test( `alphabet`, () => {
  __reset()

  const options = {
    useHash: false
  }
  const class0 = minify( 'src/button/index.module.less', 'button', options )
  const class1 = minify( 'src/button/index.module.less', 'text', options )
  expect( class0 ).toBe( 'a-a' )
  expect( class1 ).toBe( 'b-a' )
} )

test( `custom alphabet`, () => {
  __reset()

  const options = {
    alphabet: 'cde',
    useHash: false
  }
  const class0 = minify( 'src/button/index.module.less', 'button', options )
  expect( class0 ).toBe( 'c-c' )
} )

test( `prefix and suffix`, () => {
  __reset()

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
