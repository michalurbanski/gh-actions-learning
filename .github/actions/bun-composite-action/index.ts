import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const nameToGreet = core.getInput('INPUT_WHO_TO_GREET');
    core.info(`Hello ${nameToGreet}`);

    // const time = new Date().toTimeString();
    const time = "outputvalue";
    core.setOutput('time', time);
  }
  catch (error) {
    if (error instanceof Error) {
      core.setFailed(`Action failed: ${error.message}`);
    }
  }
}

run();
