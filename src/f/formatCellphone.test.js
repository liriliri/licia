it('basic', function () {
  expect(formatCellphone('0820000000', '+27', true)).to.equal('+27820000000');
  expect(formatCellphone('0820000000', '+27')).to.equal('0820000000');
  expect(formatCellphone('0820000000', '+44', true)).to.equal('+44820000000');
  expect(formatCellphone('0820000000', '+44')).to.equal('0820000000');
  expect(formatCellphone('042111111', '+593', true)).to.equal('+59342111111');
  expect(formatCellphone('042111111', '+593')).to.equal('042111111');
});

it('international', function () {
  expect(formatCellphone('+27820000000', '+27', true)).to.equal('+27820000000');
  expect(formatCellphone('+27820000000', '+27')).to.equal('0820000000');
  expect(formatCellphone('+44820000000', '+44', true)).to.equal('+44820000000');
  expect(formatCellphone('+44820000000', '+44')).to.equal('0820000000');
  expect(formatCellphone('+59342111111', '+593', true)).to.equal('+59342111111');
  expect(formatCellphone('+59342111111', '+593')).to.equal('042111111');
});

it('local', function() {
  expect(formatCellphone('820000000', '+27', true)).to.equal('+27820000000');
  expect(formatCellphone('820000000', '+27')).to.equal('820000000');
  expect(formatCellphone('820000000', '+44', true)).to.equal('+44820000000');
  expect(formatCellphone('820000000', '+44')).to.equal('820000000');
  expect(formatCellphone('42111111', '+593', true)).to.equal('+59342111111');
  expect(formatCellphone('42111111', '+593')).to.equal('42111111');
});
