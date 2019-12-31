pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Devops-Cops/danfoss.devops.frontend.git'
      }
    }
    stage('Checkout') {
        steps {
            checkout([$class: 'GitSCM', 
        branches: [[name: '*/develop']], 
        doGenerateSubmoduleConfigurations: false, 
        extensions: [[$class: 'RelativeTargetDirectory', 
            relativeTargetDir: 'C:/Users/U325661/Tameem/Workspace_2019/Build']], 
        submoduleCfg: [], 
        userRemoteConfigs: [[url: 'https://github.com/Devops-Cops/danfoss.devops.frontend.git']]])   
        }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}