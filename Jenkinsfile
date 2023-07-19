pipeline{
    
    agent any 
        stages {
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
                
                    sh 'docker build  -t "$NEXUSTAG"/elif:docker .'
                
                }
            }
            stage('Trivy'){
                steps{
                    sh 'trivy image "$NEXUSTAG"/elif:docker'
                }
            }
            stage('Login') {
                steps{
                    withCredentials([usernamePassword(credentialsId: 'nexus', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                        sh 'docker login "$NEXUSIP" -u $USERNAME -p $PASSWORD'

                    }
                }
            }
            stage('Push') {
                steps{

                    sh 'docker push "$NEXUSTAG"/elif:docker '
                }
            }
        }
}
