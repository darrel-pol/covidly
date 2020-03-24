module.exports = {
  name: 'covidly',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/covidly',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
