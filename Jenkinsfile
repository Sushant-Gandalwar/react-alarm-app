@Library('shared-utils') _
 
pipelineUtils(
    scmUrl: 'https://github.com/Sushan-Gandalwar/react-alarm-app.git',
    branch: env.BRANCH_NAME,
    appName: 'alarm',
    dockerDirectory: 'target/docker/stage',
    dockerImage: 'sushantgandalwar/alarm',
    dockerCredentialsId: 'sushantgandalwar',
    unitTests: false
)
