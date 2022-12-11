pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        sh 'git pull'
      }
    }

    stage('Packaging') {
      steps {
        sh '''npm run install
npm run buidl'''
      }
    }

  }
}