import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const nameToGreet = core.getInput('who-to-greet', { required: true });
    core.info(`Hello ${nameToGreet}`);

    const time = new Date().toTimeString();
    core.setOutput('time', time);
  }
  catch (error) {
    if (error instanceof Error) {
      core.setFailed(`Action failed: ${error.message}`);
    }
  }
}

run();
