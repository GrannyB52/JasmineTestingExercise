
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 70000, years: 20, rate: 5.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('469.74')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 1200, years: 1, rate: 0
  };
  expect(calculateMonthlyPayment(values)).toEqual('100.00')
});

/// etc
