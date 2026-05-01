const core = require('@actions/core');

async function run() {

    try {
        const input = core.getInput('pr-title');
        if (input.startsWith('feat')) {
            core.info("This PR is a feature!");
            core.setOutput('is-feature', 'true');
        } else {
            core.setFailed('This PR is not a feature');
        }
    } catch (e) {
      core.setFailed(e.message);
    }

}

run();