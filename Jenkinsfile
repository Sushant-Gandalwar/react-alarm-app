// Jenkinsfile

@Library('my-shared-library') _

pipeline {
    agent any

    parameters {
        string(name: 'GIT_URL', description: 'GitHub Repository URL')
    }

    stages {
        script {
            // Call the shared library function for Git checkout
            commonFunctions.callCheckout(this, params.GIT_URL)
        }

        script {
            // Call the shared library function for building the image
            commonFunctions.buildImage(this)
        }

        script {
            // Call the shared library function for accessing the image locally
            commonFunctions.accessImageLocally(this)
        }
    }
}
