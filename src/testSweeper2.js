function testSweeper2(a, b) {
  return a + b;
}

function not_covered(a, b) {
  return not_covered2(a, b);
}

function not_covered2(a, b) {
  return a + b;
}
module.exports = testSweeper2;
