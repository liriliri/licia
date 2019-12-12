expect(clamp(-10, -5, 5)).to.equal(-5);
expect(clamp(10, -5, 5)).to.equal(5);
expect(clamp(2, -5, 5)).to.equal(2);
expect(clamp(10, 5)).to.equal(5);
expect(clamp(2, 5)).to.equal(2);
