const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
  core.notice('This is how you print something to step output');

  const input = core.getInput('custom-name');

  exec.exec('ls') // A way to execute any installed command on the runner.

  core.notice(input);
  core.setOutput('js-output', 'Custom js action output value');
}

run();
