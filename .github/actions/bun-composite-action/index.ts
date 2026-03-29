import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    // !!! Notice, that INPUT_WHO_TO_GREET is passed, but here there's no INPUT_ and it works correctly. Has to be like this.
    const nameToGreet = core.getInput('WHO_TO_GREET');
    core.info(`Hello ${nameToGreet}`);

    // returning date causes some parsing error for the output
    // const time = new Date().toTimeString();

    // so, returning a simple value instead
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
