pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
         git branch: 'main', url: 'https://github.com/Koushik0802/Calculator'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Build') {
      steps {
        bat 'npm  build'
      }
    }
  }
}
