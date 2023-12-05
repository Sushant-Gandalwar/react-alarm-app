// Jenkinsfile
@Library('shared-utils') _

def pipelineParams = [
    scmUrl: 'https://github.com/Sushan-Gandalwar/react-alarm-app.git',
    branch: env.BRANCH_NAME,
    appName: 'alarm',
    dockerImage: 'sushantgandalwar/alarm',
    unitTests: false
]

pipelineUtils(pipelineParams)
