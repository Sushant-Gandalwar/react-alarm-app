// Jenkinsfile
@Library('shared-utils') _

def scmUrl = 'https://github.com/Sushan-Gandalwar/react-alarm-app.git'
def branch = env.BRANCH_NAME
def appName = 'alarm'
def buildCommand = 'echo "Building the project"'
def imageName = 'sushantgandalwar/alarm'
def dockerfile = 'Dockerfile'
def portMapping = '8085:80'

checkoutAndBuildProject(scmUrl, branch, appName, buildCommand)
buildDockerImage(imageName, dockerfile)
runDockerContainer(portMapping, imageName)
