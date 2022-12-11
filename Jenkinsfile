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
        sh '''npm install
npm run buidl'''
      }
    }

    stage('Deploy') {
      steps {
        sh 'ls'
      }
    }

  }
}