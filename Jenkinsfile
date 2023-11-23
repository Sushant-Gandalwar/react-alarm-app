// Jenkinsfile
@Library('shared-utils') _

def pipelineConfig = [
    scmUrl: 'https://github.com/Sushan-Gandalwar/react-alarm-app.git',
    branch: '*/main'
]

shared.utils.PipelineUtils.createPipeline(pipelineConfig)

// Additional stages for building Docker image and accessing it locally
stage('Build Image') {
    steps {
        script {
            sh 'docker build -t jaydeep .'
        }
    }
}

stage('Access Image Locally') {
    steps {
        script {
            sh 'docker run -p 8085:3000 jaydeep'
        }
    }
}
