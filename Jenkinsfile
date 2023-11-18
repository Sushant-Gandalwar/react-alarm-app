@Library('jenkins_file')_
pipeline {
    agent any

    stages {
        stage('build image') {
            steps {
                script{
                   build_image()
                }
            }
        }
         stage('local image') {
            steps {
                script{
                   deploy_image_localy()
                }
            }
        }
    }
}
