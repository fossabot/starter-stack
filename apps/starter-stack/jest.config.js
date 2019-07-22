module.exports = {
	name: 'starter-stack',
	preset: '../../jest.config.js',
	coverageDirectory: '../../coverage/apps/starter-stack',
	snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
