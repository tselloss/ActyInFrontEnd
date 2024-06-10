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
        
        stage('OWASP Dependency Check') {
            steps {
                dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'DC'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }

       stage('File System Scan') {
            steps {
                sh "/var/jenkins_home/workspace/trivy fs ."
            }
        }

        stage('Sonarqube Image Scan') {
            steps {
                 sh "/var/jenkins_home/workspace/trivy repo https://github.com/SonarSource/docker-sonarqube.git"
            }
        }

        stage('Jenkins Image Scan') {
            steps {               
                sh "/var/jenkins_home/workspace/trivy image ${JENKINS_IMAGE_NAME}"
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
