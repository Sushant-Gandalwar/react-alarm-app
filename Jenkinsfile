// projectA/Jenkinsfile

@Library('shared-library-repo') _

pipeline {
    agent any

    parameters {
        string(name: 'GIT_URL', description: 'GitHub Repository URL for Project A')
        string(name: 'IMAGE_NAME', description: 'Docker Image Name for Project A', defaultValue: 'projecta-image')
        string(name: 'PORT', description: 'Port for Project A', defaultValue: '8086')
    }

    stages {
        script {
            commonFunctions.callCheckout(this, params.GIT_URL)
        }

        script {
            commonFunctions.buildImage(this, params.IMAGE_NAME)
        }

        script {
            commonFunctions.accessImageLocally(this, params.PORT, params.IMAGE_NAME)
        }
    }
}
