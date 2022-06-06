const { Octokit } = require("@octokit/rest");

let actionsApprovedOrg = 'actions-approved';
let actionsApproverTeam = 'actions-approvers'

module.exports = async ({github, context, options}) => {
    let octokit = new Octokit({
        auth: options.token,
        baseUrl: options.baseUrl
    });

    console.log(JSON.stringify(context));

    try {
        let membership = await octokit.request(`GET /orgs/${actionsApprovedOrg}/teams/${actionsApproverTeam}/memberships/${options.actor}`, {
            org: actionsApprovedOrg,
            team_slug: actionsApproverTeam,
            username: options.actor
        })

        console.log(`membership: ${JSON.stringify(membership)}`);
    } catch (error) {
        console.log(`error: ${error}`);
    }
    
}