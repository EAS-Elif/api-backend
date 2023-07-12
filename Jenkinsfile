pipeline{
    
    agent any 
        stages {
            stage('Clone repository') {
                steps {
                    git branch: 'main', url: 'https://github.com/EAS-Elif/api-backend.git'
                }
            }
            
            stage("Sonarqube analysis") {
                environment {
                    scannerHome = tool 'SonarQubeScanner'
                }
                steps {
                    withSonarQubeEnv('SonarQubeScanner') {
                        sh 'echo $SONAR_HOST_URL'
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
            stage('Build image'){
                steps{
                
                    sh 'docker build  -t 172.16.2.64:8082/elif-docker/elif:docker .'
                
                }
            }
            stage('Trivy'){
                steps{
                    sh 'trivy image 172.16.2.64:8082/elif-docker/elif:docker'
                }
            }
            stage('Login') {
                steps{
                    withCredentials([usernamePassword(credentialsId: 'nexus', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                        sh 'docker login https://172.16.2.64:8082 -u $USERNAME -p $PASSWORD'

                    }
                }
            }
            stage('Push') {
                steps{

                    sh 'docker push 172.16.2.64:8082/elif-docker/elif:docker '
                }
            }
        }
}
