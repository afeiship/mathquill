(function () {

  const MathQuill = require('../src/mathquill');

  describe('api.basic test', () => {
    test('MathQuill.getInterface should exists', function () {
      expect(typeof MathQuill.getInterface).toBe('function');
    });

    test('MQ.StaticMath should be function', function () {
      const MQ = MathQuill.getInterface(2);
      expect(typeof MQ.StaticMath).toBe('function');
    });
  });
})();
