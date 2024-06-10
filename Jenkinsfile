pipeline {
    agent any
    tools {
        jdk 'jdk17'
        maven 'maven3'
        nodejs 'nodejs'
    }    
    environment {
        SCANNER_HOME = tool 'sonar-scanner'
        SONARQUBE_IMAGE_NAME = 'sonarqube:latest'
        JENKINS_IMAGE_NAME = 'jenkins/jenkins'
    }
   
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'VueNewVersion', credentialsId: 'RelationalDatabases', url: 'https://github.com/tselloss/ActyInFrontEnd.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Sonarqube Analysis') {
            steps {
                withSonarQubeEnv('sonar') {
                    sh '''
                        ${SCANNER_HOME}/bin/sonar-scanner \
                        -Dsonar.projectName=ActyInFrontEnd \
                        -Dsonar.projectKey=ActyInFrontEnd
                    '''
                }
            }
        }
    }
}
