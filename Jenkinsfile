// Jenkinsfile
@Library('shared-utils') _

def pipelineConfig = [
    scmUrl: 'https://github.com/Sushan-Gandalwar/react-alarm-app.git',
    branch: '*/main'
]

shared.utils.PipelineUtils.createPipeline(pipelineConfig)

// Additional stages for building Docker image and accessing it locally
