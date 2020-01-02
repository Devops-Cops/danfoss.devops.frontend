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
        extensions: [], 
        submoduleCfg: [], 
        userRemoteConfigs: [[url: 'https://github.com/Devops-Cops/danfoss.devops.frontend.git']]])   
        }
    }
     stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }
     stage('Test') {
      steps {
        bat 'npm run test-headless'
      }
    }
  }
}
